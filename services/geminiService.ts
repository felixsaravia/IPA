
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL_TEXT, GEMINI_MODEL_IMAGE } from '../constants';

const parseJsonFromMarkdown = <T,>(text: string): T | null => {
  let jsonStr = text.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = jsonStr.match(fenceRegex);
  if (match && match[2]) {
    jsonStr = match[2].trim();
  }
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response:", e, "Original text:", text);
    // Try to find JSON within the string if it's not perfectly formatted
    const jsonMatch = jsonStr.match(/(\[.*\]|\{.*\})/s);
    if (jsonMatch && jsonMatch[0]) {
      try {
        return JSON.parse(jsonMatch[0]) as T;
      } catch (e2) {
        console.error("Secondary JSON parse attempt failed:", e2);
      }
    }
    return null;
  }
};


export const getAIExampleSentences = async (
  ai: GoogleGenAI,
  ipaSymbol: string,
  exampleWord: string
): Promise<string[]> => {
  try {
    const prompt = `Generate 3 distinct example English sentences for a language learner, clearly using the word "${exampleWord}" which features the IPA sound ${ipaSymbol}. 
Each sentence should be simple and illustrative of the word's common usage.
Return the sentences as a JSON array of strings. For example: ["Sentence 1.", "Sentence 2.", "Sentence 3."]`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: prompt,
      config: {
        responseMimeType: "application/json", // Request JSON output
        temperature: 0.7,
      }
    });
    
    const textResponse = response.text;
    const parsedExamples = parseJsonFromMarkdown<string[]>(textResponse);

    if (parsedExamples && Array.isArray(parsedExamples) && parsedExamples.every(s => typeof s === 'string')) {
      return parsedExamples;
    }
    console.error("Failed to parse example sentences from AI response:", textResponse);
    return ["AI could not generate valid example sentences at this time."];

  } catch (error) {
    console.error("Error fetching AI example sentences:", error);
    throw error;
  }
};

export const getAIPronunciationFeedback = async (
  ai: GoogleGenAI,
  ipaSymbol: string,
  exampleWord: string,
  userTranscript: string
): Promise<string> => {
  try {
    const prompt = `A language learner is trying to pronounce the English word "${exampleWord}", which features the IPA sound ${ipaSymbol}. 
The learner said: "${userTranscript}".
Provide concise, constructive feedback (2-3 short bullet points) on how to improve their pronunciation of the target sound in that word.
Focus on common mistakes and practical tips for the sound ${ipaSymbol}.
Assume the transcript is accurate. Be encouraging. Do not ask for audio. Output plain text.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: prompt,
      config: {
        temperature: 0.5, // More factual feedback
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI pronunciation feedback:", error);
    throw error;
  }
};

export const generateAIImageForWord = async (
  ai: GoogleGenAI,
  word: string
): Promise<string> => { // Returns base64 image string
  try {
    const prompt = `Create a simple, clear, and contextually relevant illustrative image for the English word "${word}". 
The image should be suitable for a language learning application. Focus on a single, easily recognizable subject related to the word. Photorealistic style.`;
    
    const response = await ai.models.generateImages({
        model: GEMINI_MODEL_IMAGE,
        prompt: prompt,
        config: { numberOfImages: 1, outputMimeType: 'image/jpeg' }, // JPEG is often smaller
    });

    if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image.imageBytes) {
      return response.generatedImages[0].image.imageBytes; // This is already a base64 string
    }
    throw new Error("No image generated or image data missing.");

  } catch (error) {
    console.error(`Error generating AI image for "${word}":`, error);
    throw error;
  }
};
