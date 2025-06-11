
import React from 'react';
import type { IPASymbol, Accent } from '../types';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { MouthVisualization } from './MouthVisualization';
import { LoadingIndicator } from './LoadingIndicator';
import { GeneratedImageView } from './GeneratedImageView';

interface SymbolDetailModalProps {
  symbolInfo: IPASymbol;
  accent: Accent;
  isOpen: boolean;
  onClose: () => void;
  onGenerateExamples: () => Promise<void>;
  onGenerateImage: () => Promise<void>;
  onGetFeedback: (transcript: string) => Promise<void>;
  onGetWordExplanation: () => Promise<void>;
  aiExamples: string[];
  aiGeneratedImage: string | null; // base64 string or 'error'
  aiFeedback: string | null;
  aiWordExplanation: string | null;
  isLoading: boolean;
  isPracticed: boolean;
  onTogglePracticed: (symbol: string) => void;
}

export const SymbolDetailModal: React.FC<SymbolDetailModalProps> = ({
  symbolInfo,
  accent,
  isOpen,
  onClose,
  onGenerateExamples,
  onGenerateImage,
  onGetFeedback,
  onGetWordExplanation,
  aiExamples,
  aiGeneratedImage,
  aiFeedback,
  aiWordExplanation,
  isLoading,
  isPracticed,
  onTogglePracticed,
}) => {
  const { speak, isSpeaking, supportedVoices } = useSpeechSynthesis();
  const { transcript, isListening, startListening, stopListening, error: recognitionError, resetTranscript } = useSpeechRecognition();

  const handlePlaySound = () => {
    const textToSpeak = `${symbolInfo.exampleWord}. As in, ${symbolInfo.name}, ${symbolInfo.exampleWord}.`;
    const lang = accent === 'British' ? 'en-GB' : 'en-US';
    const voice = supportedVoices.find(v => v.lang === lang);
    speak(textToSpeak, voice);
  };

  const handleStartRecording = () => {
    resetTranscript();
    startListening();
  };

  const handleStopRecordingAndGetFeedback = async () => {
    stopListening();
    if (transcript) {
      await onGetFeedback(transcript);
    }
  };
  
  const handleTogglePracticed = () => {
    onTogglePracticed(symbolInfo.symbol);
  };

  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="symbol-details-title"
    >
      <div 
        className="bg-slate-800 p-6 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto space-y-6 transform transition-all"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 id="symbol-details-title" className="text-4xl font-mono text-sky-400">{symbolInfo.symbol}</h2>
            <p className="text-xl text-slate-300">{symbolInfo.name}</p>
            <p className="text-sm text-slate-400">Example: <strong className="text-sky-300">{symbolInfo.exampleWord}</strong></p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-sky-400 transition-colors rounded-full hover:bg-slate-700"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Core Info & Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column: Pronunciation & Articulation Details */}
          <div className="space-y-4">
            <button
              onClick={handlePlaySound}
              disabled={isSpeaking}
              className="w-full flex items-center justify-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              <span>Play ({accent})</span>
            </button>
            
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-base font-semibold text-sky-300 mb-2">How to Pronounce: {symbolInfo.symbol}</h3>
              <MouthVisualization shape={symbolInfo.mouthShape || 'neutral'} />
              <p className="text-sm text-slate-300 mt-2 whitespace-pre-wrap">{symbolInfo.description}</p>
            </div>

             <button
                onClick={handleTogglePracticed}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors
                            ${isPracticed ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-slate-600 hover:bg-slate-500 text-slate-200'}`}
              >
                 {isPracticed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  )}
                <span>{isPracticed ? 'Marked as Mastered' : 'Mark as Mastered'}</span>
              </button>
          </div>

          {/* Right Column: AI Features & Practice */}
          <div className="space-y-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-sky-300 mb-2">Practice Your Pronunciation</h3>
              {!isListening && (
                <button
                  onClick={handleStartRecording}
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15c-1.125 0-2.25-.130-3.3-.365M12 15c1.125 0 2.25-.130 3.3-.365m0 0A7.48 7.48 0 0112 12c0-2.062.796-3.933 2.1-5.334M12 15c-1.125 0-2.25.130-3.3-.365M9.9 9.666c-.334.235-.635.508-.9.814m1.8 0A7.482 7.482 0 0012 12M6.9 14.334c.334-.235.635-.508.9-.814M5.1 9.666A7.486 7.486 0 0112 6.666" /></svg>
                  <span>Record</span>
                </button>
              )}
              {isListening && (
                <button
                  onClick={handleStopRecordingAndGetFeedback}
                  className="w-full flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold py-2 px-3 rounded-lg transition-colors text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" /></svg>
                  <span>Stop & Get Feedback</span>
                </button>
              )}
              {transcript && <p className="text-xs text-slate-400 mt-2">You said: "{transcript}"</p>}
              {recognitionError && <p className="text-xs text-red-400 mt-2">Recording Error: {recognitionError}</p>}
            </div>
            
            {isLoading && <div className="py-4"><LoadingIndicator message="AI is thinking..." /></div>}

            {aiFeedback && !isLoading && (
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-sky-300 mb-2">AI Pronunciation Feedback</h3>
                <p className="text-xs text-slate-300 whitespace-pre-wrap">{aiFeedback}</p>
              </div>
            )}
            
            {/* AI Word Explanation */}
            <button
                onClick={onGetWordExplanation}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 6.062 14.12 7.008 15 7.5M4.5 6.075A48.342 48.342 0 019 5.25m3.75 3C13.18 7.94 14.12 6.992 15 6.5M15 9.75V14.25m0-4.495c1.126-.088 2.24-.163 3.342-.23M15 9.75c-.639 0-1.257.053-1.873.151" /></svg>
                <span>Explain "{symbolInfo.exampleWord}"</span>
            </button>
            {aiWordExplanation && !isLoading && (
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-sky-300 mb-2">Meaning of "{symbolInfo.exampleWord}":</h3>
                <p className="text-xs text-slate-300 whitespace-pre-wrap">{aiWordExplanation}</p>
              </div>
            )}
            
            {/* AI Examples */}
            <button
                onClick={onGenerateExamples}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-6.75 3h9M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                <span>AI Example Sentences</span>
            </button>
            {aiExamples.length > 0 && !isLoading && (
              <div className="bg-slate-700 p-4 rounded-lg max-h-32 overflow-y-auto">
                <h3 className="text-sm font-semibold text-sky-300 mb-2">AI Generated Examples:</h3>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  {aiExamples.map((ex, i) => <li key={i}>{ex}</li>)}
                </ul>
              </div>
            )}

            {/* AI Image */}
             <button
                onClick={onGenerateImage}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-sm disabled:opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                <span>AI Image for "{symbolInfo.exampleWord}"</span>
            </button>
            {aiGeneratedImage && !isLoading && (
              <div className="bg-slate-700 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-sky-300 mb-2">AI Generated Image:</h3>
                <GeneratedImageView imageData={aiGeneratedImage} altText={`AI generated image for ${symbolInfo.exampleWord}`} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
