
import { useState, useEffect, useCallback } from 'react';
import type { Voice } from '../types';

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supportedVoices, setSupportedVoices] = useState<Voice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        setSupportedVoices(voices.map(v => ({ name: v.name, lang: v.lang })));
      }
    };

    loadVoices();
    // Voices list might load asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      window.speechSynthesis.cancel(); // Cancel any ongoing speech when component unmounts
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const speak = useCallback((text: string, voice?: SpeechSynthesisVoice | Voice) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) {
      const actualVoice = window.speechSynthesis.getVoices().find(v => v.name === (voice as Voice).name && v.lang === (voice as Voice).lang);
      if (actualVoice) {
        utterance.voice = actualVoice;
      } else {
         // Fallback if specific voice not found, try to match language
        const langMatchVoice = window.speechSynthesis.getVoices().find(v => v.lang === (voice as Voice).lang);
        if (langMatchVoice) utterance.voice = langMatchVoice;
      }
    }
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false); // Also reset on error

    window.speechSynthesis.speak(utterance);
  }, [isSpeaking]);

  return { speak, isSpeaking, supportedVoices };
};
