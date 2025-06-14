
import type { IPASection } from './types';

export const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';
export const GEMINI_MODEL_IMAGE = 'imagen-3.0-generate-002';

export const IPA_SECTIONS: IPASection[] = [
  {
    name: 'Vowels (Monophthongs)',
    symbols: [
      { symbol: 'iː', name: 'Fleece', type: 'vowel', exampleWord: 'fleece', description: 'High front tense vowel.', simplifiedDescription_es: "Como una 'i' larga y tensa (ej. 'sí' pero más larga).", mouthShape: 'spread' },
      { symbol: 'ɪ', name: 'Kit', type: 'vowel', exampleWord: 'kit', description: 'High front lax vowel.', simplifiedDescription_es: "Como una 'i' corta y relajada (entre 'i' y 'e').", mouthShape: 'neutral' },
      { symbol: 'e', name: 'Dress', type: 'vowel', exampleWord: 'dress', description: 'Mid front lax vowel.', simplifiedDescription_es: "Como la 'e' en 'tres'.", mouthShape: 'neutral' },
      { symbol: 'æ', name: 'Trap', type: 'vowel', exampleWord: 'trap', description: 'Low front lax vowel.', simplifiedDescription_es: "Sonido entre 'a' y 'e', boca abierta.", mouthShape: 'open' },
      { symbol: 'ɑː', name: 'Father/Palm', type: 'vowel', exampleWord: 'father', description: 'Low back tense vowel.', simplifiedDescription_es: "Como una 'a' abierta y larga (ej. 'paz' pero más larga).", mouthShape: 'open' },
      { symbol: 'ɒ', name: 'Lot (British)', type: 'vowel', exampleWord: 'lot', description: 'Low back rounded lax vowel (common in BrE).', simplifiedDescription_es: "Como una 'o' corta y abierta (BrE).", mouthShape: 'rounded' },
      { symbol: 'ɔː', name: 'Thought', type: 'vowel', exampleWord: 'thought', description: 'Mid back rounded tense vowel.', simplifiedDescription_es: "Como una 'o' larga y cerrada, labios redondeados.", mouthShape: 'rounded' },
      { symbol: 'ʊ', name: 'Foot', type: 'vowel', exampleWord: 'foot', description: 'High back rounded lax vowel.', simplifiedDescription_es: "Como una 'u' corta y relajada (ej. 'su' pero más breve).", mouthShape: 'rounded' },
      { symbol: 'uː', name: 'Goose', type: 'vowel', exampleWord: 'goose', description: 'High back rounded tense vowel.', simplifiedDescription_es: "Como una 'u' larga y tensa (ej. 'tú' pero más larga).", mouthShape: 'rounded' },
      { symbol: 'ʌ', name: 'Strut', type: 'vowel', exampleWord: 'strut', description: 'Mid central unrounded lax vowel.', simplifiedDescription_es: "Como una 'a' corta y central (similar a la primera 'a' en 'mamá').", mouthShape: 'mid' },
      { symbol: 'ɜː', name: 'Nurse (British)', type: 'vowel', exampleWord: 'nurse', description: 'Mid central unrounded tense vowel (common in BrE).', simplifiedDescription_es: "Sonido 'e' largo y central (BrE), sin equivalente exacto.", mouthShape: 'mid' },
      { symbol: 'ə', name: 'Schwa / About', type: 'vowel', exampleWord: 'about', description: 'Mid central unrounded lax vowel (unstressed).', simplifiedDescription_es: "Vocal breve y neutra (ej. la 'a' final átona de 'casa').", mouthShape: 'neutral' },
      { symbol: 'ɚ', name: 'Letter (American)', type: 'vowel', exampleWord: 'letter', description: 'R-colored schwa (common in AmE).', simplifiedDescription_es: "Como 'er' en 'teacher' (AmE), schwa con sonido 'r'.", mouthShape: 'neutral' },
    ],
  },
  {
    name: 'Diphthongs',
    symbols: [
      { symbol: 'eɪ', name: 'Face', type: 'diphthong', exampleWord: 'face', description: 'Starts like /e/ and glides towards /ɪ/.', simplifiedDescription_es: "Empieza como 'e', desliza hacia 'i'.", mouthShape: 'neutral' },
      { symbol: 'aɪ', name: 'Price', type: 'diphthong', exampleWord: 'price', description: 'Starts like /a/ (low central/front) and glides towards /ɪ/.', simplifiedDescription_es: "Empieza como 'a' abierta, desliza hacia 'i'.", mouthShape: 'open' },
      { symbol: 'ɔɪ', name: 'Choice', type: 'diphthong', exampleWord: 'choice', description: 'Starts like /ɔ/ and glides towards /ɪ/.', simplifiedDescription_es: "Empieza como 'o' abierta, desliza hacia 'i'.", mouthShape: 'rounded' },
      { symbol: 'əʊ', name: 'Goat (British)', type: 'diphthong', exampleWord: 'goat', description: 'Starts with schwa /ə/ and glides towards /ʊ/ (BrE).', simplifiedDescription_es: "Empieza como schwa /ə/, desliza hacia 'u' (BrE).", mouthShape: 'rounded' },
      { symbol: 'oʊ', name: 'Goat (American)', type: 'diphthong', exampleWord: 'boat', description: 'Starts like /o/ and glides towards /ʊ/ (AmE).', simplifiedDescription_es: "Empieza como 'o', desliza hacia 'u' (AmE).", mouthShape: 'rounded' },
      { symbol: 'aʊ', name: 'Mouth', type: 'diphthong', exampleWord: 'mouth', description: 'Starts like /a/ (low central/front) and glides towards /ʊ/.', simplifiedDescription_es: "Empieza como 'a' abierta, desliza hacia 'u'.", mouthShape: 'open' },
      { symbol: 'ɪə', name: 'Near (British)', type: 'diphthong', exampleWord: 'near', description: 'Starts with /ɪ/ and glides towards schwa /ə/ (BrE).', simplifiedDescription_es: "Empieza como 'i' corta, desliza hacia schwa /ə/ (BrE).", mouthShape: 'neutral' },
      { symbol: 'eə', name: 'Square (British)', type: 'diphthong', exampleWord: 'square', description: 'Starts with /e/ and glides towards schwa /ə/ (BrE).', simplifiedDescription_es: "Empieza como 'e', desliza hacia schwa /ə/ (BrE).", mouthShape: 'neutral' },
      { symbol: 'ʊə', name: 'Cure (British)', type: 'diphthong', exampleWord: 'cure', description: 'Starts with /ʊ/ and glides towards schwa /ə/ (BrE).', simplifiedDescription_es: "Empieza como 'u' corta, desliza hacia schwa /ə/ (BrE).", mouthShape: 'rounded' },
    ],
  },
  {
    name: 'Consonants (Plosives)',
    symbols: [
      { symbol: 'p', name: 'Pit', type: 'consonant', exampleWord: 'pit', description: 'Voiceless bilabial plosive.', simplifiedDescription_es: "Como la 'p' en 'papá'.", mouthShape: 'closed' },
      { symbol: 'b', name: 'Bit', type: 'consonant', exampleWord: 'bit', description: 'Voiced bilabial plosive.', simplifiedDescription_es: "Como la 'b' en 'bebé'.", mouthShape: 'closed' },
      { symbol: 't', name: 'Tin', type: 'consonant', exampleWord: 'tin', description: 'Voiceless alveolar plosive.', simplifiedDescription_es: "Como la 't' en 'taza'.", mouthShape: 'closed' },
      { symbol: 'd', name: 'Din', type: 'consonant', exampleWord: 'din', description: 'Voiced alveolar plosive.', simplifiedDescription_es: "Como la 'd' en 'dedo'.", mouthShape: 'closed' },
      { symbol: 'k', name: 'Cut', type: 'consonant', exampleWord: 'cut', description: 'Voiceless velar plosive.', simplifiedDescription_es: "Como la 'c' de 'casa' o 'k' de 'kilo'.", mouthShape: 'closed' },
      { symbol: 'g', name: 'Gut', type: 'consonant', exampleWord: 'gut', description: 'Voiced velar plosive.', simplifiedDescription_es: "Como la 'g' en 'gato'.", mouthShape: 'closed' },
    ],
  },
  {
    name: 'Consonants (Fricatives)',
    symbols: [
      { symbol: 'f', name: 'Fan', type: 'consonant', exampleWord: 'fan', description: 'Voiceless labiodental fricative.', simplifiedDescription_es: "Como la 'f' en 'foca'.", mouthShape: 'mid' },
      { symbol: 'v', name: 'Van', type: 'consonant', exampleWord: 'van', description: 'Voiced labiodental fricative.', simplifiedDescription_es: "Como 'f' pero con vibración de cuerdas vocales.", mouthShape: 'mid' },
      { symbol: 'θ', name: 'Thin', type: 'consonant', exampleWord: 'thin', description: 'Voiceless dental fricative.', simplifiedDescription_es: "Como la 'z' en 'zapato' (España).", mouthShape: 'mid' },
      { symbol: 'ð', name: 'This', type: 'consonant', exampleWord: 'this', description: 'Voiced dental fricative.', simplifiedDescription_es: "Como la 'd' suave en 'cada'.", mouthShape: 'mid' },
      { symbol: 's', name: 'Sip', type: 'consonant', exampleWord: 'sip', description: 'Voiceless alveolar fricative.', simplifiedDescription_es: "Como la 's' en 'sopa'.", mouthShape: 'mid' },
      { symbol: 'z', name: 'Zip', type: 'consonant', exampleWord: 'zip', description: 'Voiced alveolar fricative.', simplifiedDescription_es: "Como 's' pero con vibración (zumbido de abeja).", mouthShape: 'mid' },
      { symbol: 'ʃ', name: 'Ship', type: 'consonant', exampleWord: 'ship', description: 'Voiceless postalveolar fricative.', simplifiedDescription_es: "Como 'sh' en 'show' o 'ch' francesa.", mouthShape: 'mid' },
      { symbol: 'ʒ', name: 'Vision', type: 'consonant', exampleWord: 'vision', description: 'Voiced postalveolar fricative.', simplifiedDescription_es: "Como la 'y' o 'll' argentina en 'calle', o 'j' francesa.", mouthShape: 'mid' },
      { symbol: 'h', name: 'Hit', type: 'consonant', exampleWord: 'hit', description: 'Voiceless glottal fricative.', simplifiedDescription_es: "Como una 'j' suave (español) o 'h' aspirada.", mouthShape: 'open' },
    ],
  },
  {
    name: 'Consonants (Nasals)',
    symbols: [
      { symbol: 'm', name: 'Map', type: 'consonant', exampleWord: 'map', description: 'Voiced bilabial nasal.', simplifiedDescription_es: "Como la 'm' en 'mamá'.", mouthShape: 'closed' },
      { symbol: 'n', name: 'Nap', type: 'consonant', exampleWord: 'nap', description: 'Voiced alveolar nasal.', simplifiedDescription_es: "Como la 'n' en 'nada'.", mouthShape: 'closed' },
      { symbol: 'ŋ', name: 'Sing', type: 'consonant', exampleWord: 'sing', description: 'Voiced velar nasal.', simplifiedDescription_es: "Como la 'n' en 'banco' o 'tango'.", mouthShape: 'closed' },
    ],
  },
  {
    name: 'Consonants (Approximants)',
    symbols: [
      { symbol: 'l', name: 'Lip', type: 'consonant', exampleWord: 'lip', description: 'Voiced alveolar lateral approximant.', simplifiedDescription_es: "Como la 'l' en 'luna'.", mouthShape: 'mid' },
      { symbol: 'r', name: 'Rip', type: 'consonant', exampleWord: 'rip', description: 'Voiced alveolar approximant (varies by dialect).', simplifiedDescription_es: "Como la 'r' inglesa (más suave que la 'r' española).", mouthShape: 'mid' },
      { symbol: 'w', name: 'Wit', type: 'consonant', exampleWord: 'wit', description: 'Voiced labiovelar approximant.', simplifiedDescription_es: "Como la 'u' en 'hueso' o 'gu' en 'agua'.", mouthShape: 'rounded' },
      { symbol: 'j', name: 'Yet', type: 'consonant', exampleWord: 'yet', description: 'Voiced palatal approximant.', simplifiedDescription_es: "Como la 'i' en 'hielo' o 'y' en 'yo'.", mouthShape: 'mid' },
    ],
  },
];

export const DEFAULT_ACCENT: 'American' | 'British' = 'American';

// Placeholder for API Key, should be set via environment variable process.env.API_KEY
// export const GEMINI_API_KEY = process.env.API_KEY || "YOUR_API_KEY_HERE";
// Using process.env.API_KEY directly in services/geminiService.ts or App.tsx as per instructions.