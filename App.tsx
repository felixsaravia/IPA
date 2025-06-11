
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { IPASymbolGrid } from './components/IPASymbolGrid';
import { SymbolDetailModal } from './components/SymbolDetailModal';
import { IPA_SECTIONS, GEMINI_MODEL_TEXT, GEMINI_MODEL_IMAGE } from './constants';
import type { IPASymbol, Accent, IPASectionName } from './types';
import { GoogleGenAI } from "@google/genai";
import { generateAIImageForWord, getAIExampleSentences, getAIPronunciationFeedback } from './services/geminiService';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<IPASymbol | null>(null);
  const [accent, setAccent] = useState<Accent>('American');
  const [isLoadingModalContent, setIsLoadingModalContent] = useState<boolean>(false);
  const [aiExamples, setAiExamples] = useState<string[]>([]);
  const [aiGeneratedImage, setAiGeneratedImage] = useState<string | null>(null);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [practicedSymbols, setPracticedSymbols] = useState<Set<string>>(new Set());
  
  const [aiClient, setAiClient] = useState<GoogleGenAI | null>(null);

  useEffect(() => {
    if (process.env.API_KEY) {
      setAiClient(new GoogleGenAI({ apiKey: process.env.API_KEY }));
    } else {
      console.error("API_KEY environment variable not set.");
      // Potentially show an error to the user or disable AI features
    }
  }, []);

  useEffect(() => {
    const storedPracticedSymbols = localStorage.getItem('practicedSymbols');
    if (storedPracticedSymbols) {
      setPracticedSymbols(new Set(JSON.parse(storedPracticedSymbols)));
    }
  }, []);

  const handleSelectSymbol = useCallback((symbol: IPASymbol) => {
    setSelectedSymbol(symbol);
    setAiExamples([]);
    setAiGeneratedImage(null);
    setAiFeedback(null);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedSymbol(null);
  }, []);

  const togglePracticedSymbol = useCallback((symbol: string) => {
    setPracticedSymbols(prev => {
      const newSet = new Set(prev);
      if (newSet.has(symbol)) {
        newSet.delete(symbol);
      } else {
        newSet.add(symbol);
      }
      localStorage.setItem('practicedSymbols', JSON.stringify(Array.from(newSet)));
      return newSet;
    });
  }, []);

  const handleGenerateExamples = useCallback(async () => {
    if (!selectedSymbol || !aiClient) return;
    setIsLoadingModalContent(true);
    setAiFeedback(null);
    try {
      const examples = await getAIExampleSentences(aiClient, selectedSymbol.symbol, selectedSymbol.exampleWord);
      setAiExamples(examples);
    } catch (error) {
      console.error("Error generating examples:", error);
      setAiExamples(["Failed to load examples."]);
    }
    setIsLoadingModalContent(false);
  }, [selectedSymbol, aiClient]);

  const handleGenerateImage = useCallback(async () => {
    if (!selectedSymbol || !aiClient) return;
    setIsLoadingModalContent(true);
    setAiFeedback(null);
    try {
      const imageUrl = await generateAIImageForWord(aiClient, selectedSymbol.exampleWord);
      setAiGeneratedImage(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      setAiGeneratedImage("error"); // Special value to indicate error
    }
    setIsLoadingModalContent(false);
  }, [selectedSymbol, aiClient]);

  const handleGetFeedback = useCallback(async (transcript: string) => {
    if (!selectedSymbol || !aiClient) return;
    setIsLoadingModalContent(true);
    setAiExamples([]);
    setAiGeneratedImage(null);
    try {
      const feedback = await getAIPronunciationFeedback(aiClient, selectedSymbol.symbol, selectedSymbol.exampleWord, transcript);
      setAiFeedback(feedback);
    } catch (error) {
      console.error("Error getting feedback:", error);
      setAiFeedback("Failed to get feedback. Please try again.");
    }
    setIsLoadingModalContent(false);
  }, [selectedSymbol, aiClient]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-sky-900 text-slate-100">
      <Header accent={accent} onAccentChange={setAccent} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <p className="text-center text-lg text-sky-300 mb-8">
          Select an IPA symbol below to learn its pronunciation and explore AI-powered features.
        </p>
        <IPASymbolGrid 
          sections={IPA_SECTIONS} 
          onSelectSymbol={handleSelectSymbol}
          practicedSymbols={practicedSymbols}
        />
      </main>
      {selectedSymbol && aiClient && (
        <SymbolDetailModal
          symbolInfo={selectedSymbol}
          accent={accent}
          isOpen={!!selectedSymbol}
          onClose={handleCloseModal}
          onGenerateExamples={handleGenerateExamples}
          onGenerateImage={handleGenerateImage}
          onGetFeedback={handleGetFeedback}
          aiExamples={aiExamples}
          aiGeneratedImage={aiGeneratedImage}
          aiFeedback={aiFeedback}
          isLoading={isLoadingModalContent}
          isPracticed={practicedSymbols.has(selectedSymbol.symbol)}
          onTogglePracticed={togglePracticedSymbol}
        />
      )}
      {!aiClient && (
         <div 
            aria-live="assertive" 
            className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50">
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                <div className="max-w-sm w-full bg-red-500 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div className="ml-3 w-0 flex-1 pt-0.5">
                                <p className="text-sm font-medium text-white">Configuration Error</p>
                                <p className="mt-1 text-sm text-red-100">
                                    API_KEY is not configured. AI features will be unavailable. Please set the API_KEY environment variable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
      <footer className="text-center py-4 text-sm text-sky-400 border-t border-sky-700">
        IPA Pronounce AI &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;
