
import React from 'react';
import type { IPASymbol, IPASection } from '../types';
import { IPASymbolButton } from './IPASymbolButton';

interface IPASymbolGridProps {
  sections: IPASection[];
  onSelectSymbol: (symbol: IPASymbol) => void;
  practicedSymbols: Set<string>;
}

export const IPASymbolGrid: React.FC<IPASymbolGridProps> = ({ sections, onSelectSymbol, practicedSymbols }) => {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.name} aria-labelledby={section.name.replace(/\s+/g, '-').toLowerCase()}>
          <h2 id={section.name.replace(/\s+/g, '-').toLowerCase()} className="text-2xl font-semibold text-sky-400 mb-6 border-b-2 border-sky-600 pb-2">
            {section.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {section.symbols.map((symbol) => (
              <IPASymbolButton 
                key={symbol.symbol} 
                symbol={symbol} 
                onClick={() => onSelectSymbol(symbol)}
                isPracticed={practicedSymbols.has(symbol.symbol)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
