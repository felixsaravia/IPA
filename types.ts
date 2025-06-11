
export interface IPASymbol {
  symbol: string;
  name: string;
  type: 'vowel' | 'consonant' | 'diphthong';
  exampleWord: string;
  description: string; // Articulation description
  simplifiedDescription_es: string; // Simple Spanish description of how it sounds
  mouthShape?: 'open' | 'mid' | 'closed' | 'rounded' | 'spread' | 'neutral'; // For simple mouth viz
}

export type IPASectionName = 'Vowels (Monophthongs)' | 'Diphthongs' | 'Consonants (Plosives)' | 'Consonants (Fricatives)' | 'Consonants (Nasals)' | 'Consonants (Approximants)';

export interface IPASection {
  name: IPASectionName;
  symbols: IPASymbol[];
}

export type Accent = 'American' | 'British';

export interface Voice {
  name: string;
  lang: string;
}