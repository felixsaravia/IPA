
import type { IPASection } from './types';

export const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';
export const GEMINI_MODEL_IMAGE = 'imagen-3.0-generate-002';

export const IPA_SECTIONS: IPASection[] = [
  {
    name: 'Vowels (Monophthongs)',
    symbols: [
      { symbol: 'iː', name: 'Fleece', type: 'vowel', exampleWord: 'fleece', description: 'High front tense vowel.', mouthShape: 'spread' },
      { symbol: 'ɪ', name: 'Kit', type: 'vowel', exampleWord: 'kit', description: 'High front lax vowel.', mouthShape: 'neutral' },
      { symbol: 'e', name: 'Dress', type: 'vowel', exampleWord: 'dress', description: 'Mid front lax vowel.', mouthShape: 'neutral' },
      { symbol: 'æ', name: 'Trap', type: 'vowel', exampleWord: 'trap', description: 'Low front lax vowel.', mouthShape: 'open' },
      { symbol: 'ɑː', name: 'Father/Palm', type: 'vowel', exampleWord: 'father', description: 'Low back tense vowel.', mouthShape: 'open' },
      { symbol: 'ɒ', name: 'Lot (British)', type: 'vowel', exampleWord: 'lot', description: 'Low back rounded lax vowel (common in BrE).', mouthShape: 'rounded' },
      { symbol: 'ɔː', name: 'Thought', type: 'vowel', exampleWord: 'thought', description: 'Mid back rounded tense vowel.', mouthShape: 'rounded' },
      { symbol: 'ʊ', name: 'Foot', type: 'vowel', exampleWord: 'foot', description: 'High back rounded lax vowel.', mouthShape: 'rounded' },
      { symbol: 'uː', name: 'Goose', type: 'vowel', exampleWord: 'goose', description: 'High back rounded tense vowel.', mouthShape: 'rounded' },
      { symbol: 'ʌ', name: 'Strut', type: 'vowel', exampleWord: 'strut', description: 'Mid central unrounded lax vowel.', mouthShape: 'mid' },
      { symbol: 'ɜː', name: 'Nurse (British)', type: 'vowel', exampleWord: 'nurse', description: 'Mid central unrounded tense vowel (common in BrE).', mouthShape: 'mid' },
      { symbol: 'ə', name: 'Schwa / About', type: 'vowel', exampleWord: 'about', description: 'Mid central unrounded lax vowel (unstressed).', mouthShape: 'neutral' },
      { symbol: 'ɚ', name: 'Letter (American)', type: 'vowel', exampleWord: 'letter', description: 'R-colored schwa (common in AmE).', mouthShape: 'neutral' },

    ],
  },
  {
    name: 'Diphthongs',
    symbols: [
      { symbol: 'eɪ', name: 'Face', type: 'diphthong', exampleWord: 'face', description: 'Starts like /e/ and glides towards /ɪ/.', mouthShape: 'neutral' },
      { symbol: 'aɪ', name: 'Price', type: 'diphthong', exampleWord: 'price', description: 'Starts like /a/ (low central/front) and glides towards /ɪ/.', mouthShape: 'open' },
      { symbol: 'ɔɪ', name: 'Choice', type: 'diphthong', exampleWord: 'choice', description: 'Starts like /ɔ/ and glides towards /ɪ/.', mouthShape: 'rounded' },
      { symbol: 'əʊ', name: 'Goat (British)', type: 'diphthong', exampleWord: 'goat', description: 'Starts with schwa /ə/ and glides towards /ʊ/ (BrE).', mouthShape: 'rounded' },
      { symbol: 'oʊ', name: 'Goat (American)', type: 'diphthong', exampleWord: 'boat', description: 'Starts like /o/ and glides towards /ʊ/ (AmE).', mouthShape: 'rounded' },
      { symbol: 'aʊ', name: 'Mouth', type: 'diphthong', exampleWord: 'mouth', description: 'Starts like /a/ (low central/front) and glides towards /ʊ/.', mouthShape: 'open' },
      { symbol: 'ɪə', name: 'Near (British)', type: 'diphthong', exampleWord: 'near', description: 'Starts with /ɪ/ and glides towards schwa /ə/ (BrE).', mouthShape: 'neutral' },
      { symbol: 'eə', name: 'Square (British)', type: 'diphthong', exampleWord: 'square', description: 'Starts with /e/ and glides towards schwa /ə/ (BrE).', mouthShape: 'neutral' },
      { symbol: 'ʊə', name: 'Cure (British)', type: 'diphthong', exampleWord: 'cure', description: 'Starts with /ʊ/ and glides towards schwa /ə/ (BrE).', mouthShape: 'rounded' },
    ],
  },
  {
    name: 'Consonants (Plosives)',
    symbols: [
      { symbol: 'p', name: 'Pit', type: 'consonant', exampleWord: 'pit', description: 'Voiceless bilabial plosive.', mouthShape: 'closed' },
      { symbol: 'b', name: 'Bit', type: 'consonant', exampleWord: 'bit', description: 'Voiced bilabial plosive.', mouthShape: 'closed' },
      { symbol: 't', name: 'Tin', type: 'consonant', exampleWord: 'tin', description: 'Voiceless alveolar plosive.', mouthShape: 'closed' },
      { symbol: 'd', name: 'Din', type: 'consonant', exampleWord: 'din', description: 'Voiced alveolar plosive.', mouthShape: 'closed' },
      { symbol: 'k', name: 'Cut', type: 'consonant', exampleWord: 'cut', description: 'Voiceless velar plosive.', mouthShape: 'closed' },
      { symbol: 'g', name: 'Gut', type: 'consonant', exampleWord: 'gut', description: 'Voiced velar plosive.', mouthShape: 'closed' },
    ],
  },
  {
    name: 'Consonants (Fricatives)',
    symbols: [
      { symbol: 'f', name: 'Fan', type: 'consonant', exampleWord: 'fan', description: 'Voiceless labiodental fricative.', mouthShape: 'mid' },
      { symbol: 'v', name: 'Van', type: 'consonant', exampleWord: 'van', description: 'Voiced labiodental fricative.', mouthShape: 'mid' },
      { symbol: 'θ', name: 'Thin', type: 'consonant', exampleWord: 'thin', description: 'Voiceless dental fricative.', mouthShape: 'mid' },
      { symbol: 'ð', name: 'This', type: 'consonant', exampleWord: 'this', description: 'Voiced dental fricative.', mouthShape: 'mid' },
      { symbol: 's', name: 'Sip', type: 'consonant', exampleWord: 'sip', description: 'Voiceless alveolar fricative.', mouthShape: 'mid' },
      { symbol: 'z', name: 'Zip', type: 'consonant', exampleWord: 'zip', description: 'Voiced alveolar fricative.', mouthShape: 'mid' },
      { symbol: 'ʃ', name: 'Ship', type: 'consonant', exampleWord: 'ship', description: 'Voiceless postalveolar fricative.', mouthShape: 'mid' },
      { symbol: 'ʒ', name: 'Vision', type: 'consonant', exampleWord: 'vision', description: 'Voiced postalveolar fricative.', mouthShape: 'mid' },
      { symbol: 'h', name: 'Hit', type: 'consonant', exampleWord: 'hit', description: 'Voiceless glottal fricative.', mouthShape: 'open' },
    ],
  },
  {
    name: 'Consonants (Nasals)',
    symbols: [
      { symbol: 'm', name: 'Map', type: 'consonant', exampleWord: 'map', description: 'Voiced bilabial nasal.', mouthShape: 'closed' },
      { symbol: 'n', name: 'Nap', type: 'consonant', exampleWord: 'nap', description: 'Voiced alveolar nasal.', mouthShape: 'closed' },
      { symbol: 'ŋ', name: 'Sing', type: 'consonant', exampleWord: 'sing', description: 'Voiced velar nasal.', mouthShape: 'closed' },
    ],
  },
  {
    name: 'Consonants (Approximants)',
    symbols: [
      { symbol: 'l', name: 'Lip', type: 'consonant', exampleWord: 'lip', description: 'Voiced alveolar lateral approximant.', mouthShape: 'mid' },
      { symbol: 'r', name: 'Rip', type: 'consonant', exampleWord: 'rip', description: 'Voiced alveolar approximant (varies by dialect).', mouthShape: 'mid' }, // Often postalveolar in AmE
      { symbol: 'w', name: 'Wit', type: 'consonant', exampleWord: 'wit', description: 'Voiced labiovelar approximant.', mouthShape: 'rounded' },
      { symbol: 'j', name: 'Yet', type: 'consonant', exampleWord: 'yet', description: 'Voiced palatal approximant.', mouthShape: 'mid' },
    ],
  },
];

export const DEFAULT_ACCENT: 'American' | 'British' = 'American';

// Placeholder for API Key, should be set via environment variable process.env.API_KEY
// export const GEMINI_API_KEY = process.env.API_KEY || "YOUR_API_KEY_HERE";
// Using process.env.API_KEY directly in services/geminiService.ts or App.tsx as per instructions.

