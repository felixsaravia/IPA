
import React from 'react';
import type { IPASymbol, IPASection } from '../types';

interface IPASymbolGridProps {
  sections: IPASection[];
  onSelectSymbol: (symbol: IPASymbol) => void;
  practicedSymbols: Set<string>;
}

export const IPASymbolGrid: React.FC<IPASymbolGridProps> = ({ sections, onSelectSymbol, practicedSymbols }) => {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.name} aria-labelledby={section.name.replace(/\s+/g, '-').toLowerCase()}>
          <h2 
            id={section.name.replace(/\s+/g, '-').toLowerCase()} 
            className="text-2xl font-semibold text-sky-400 mb-6 border-b-2 border-sky-600 pb-3"
          >
            {section.name}
          </h2>
          <div className="overflow-x-auto bg-slate-800 shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-700/50">
                <tr>
                  <th scope="col" className="px-5 py-3.5 text-left text-sm font-semibold text-sky-300 w-1/6">Sonido IPA</th>
                  <th scope="col" className="px-5 py-3.5 text-left text-sm font-semibold text-sky-300 w-2/6">Palabra de Ejemplo</th>
                  <th scope="col" className="px-5 py-3.5 text-left text-sm font-semibold text-sky-300 w-3/6">Cómo suena (Descripción)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 bg-slate-800">
                {section.symbols.map((symbol) => (
                  <tr 
                    key={symbol.symbol} 
                    onClick={() => onSelectSymbol(symbol)}
                    className="hover:bg-sky-800/60 cursor-pointer transition-colors duration-150 group"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelectSymbol(symbol);}}
                    aria-label={`Aprender sobre el símbolo IPA ${symbol.name} (${symbol.symbol})`}
                  >
                    <td className="whitespace-nowrap px-5 py-4 text-xl font-mono text-sky-300 group-hover:text-sky-200">
                      <div className="flex items-center">
                        {practicedSymbols.has(symbol.symbol) && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 mr-2 flex-shrink-0">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        )}
                        <span className="flex-grow">{symbol.symbol}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-300 group-hover:text-slate-200">
                      <span className="font-medium text-sky-400 group-hover:text-sky-300">{symbol.exampleWord}</span>
                      {(symbol.name.toLowerCase() !== symbol.exampleWord.toLowerCase() && !symbol.name.includes(symbol.exampleWord)) && (
                        <span className="block text-xs text-slate-400 group-hover:text-slate-300">({symbol.name})</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-300 group-hover:text-slate-200 leading-relaxed">
                      {symbol.simplifiedDescription_es}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
};
