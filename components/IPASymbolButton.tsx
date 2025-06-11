
import React from 'react';
import type { IPASymbol } from '../types';

interface IPASymbolButtonProps {
  symbol: IPASymbol;
  onClick: () => void;
  isPracticed: boolean;
}

export const IPASymbolButton: React.FC<IPASymbolButtonProps> = ({ symbol, onClick, isPracticed }) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 ease-in-out
                  flex flex-col items-center justify-center aspect-square
                  bg-slate-800 hover:bg-sky-700 border border-slate-700 hover:border-sky-500
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500`}
      aria-label={`Learn about IPA symbol ${symbol.name} (${symbol.symbol})`}
    >
      <span className="text-4xl font-mono text-sky-300">{symbol.symbol}</span>
      <span className="mt-1 text-xs text-center text-slate-400">{symbol.name}</span>
      {isPracticed && (
        <div className="absolute top-1 right-1 bg-green-500 text-white rounded-full p-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </button>
  );
};
