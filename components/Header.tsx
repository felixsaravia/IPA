
import React from 'react';
import type { Accent } from '../types';

interface HeaderProps {
  accent: Accent;
  onAccentChange: (accent: Accent) => void;
}

export const Header: React.FC<HeaderProps> = ({ accent, onAccentChange }) => {
  return (
    <header className="bg-sky-700/50 backdrop-blur-md shadow-lg p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-sky-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 6.062 14.12 7.008 15 7.5M4.5 6.075A48.342 48.342 0 019 5.25m3.75 3C13.18 7.94 14.12 6.992 15 6.5M15 9.75V14.25m0-4.495c1.126-.088 2.24-.163 3.342-.23M15 9.75c-.639 0-1.257.053-1.873.151" />
          </svg>
          <h1 className="text-3xl font-bold text-sky-300">IPA Pronounce AI</h1>
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="accent-select" className="text-sm text-sky-200">Accent:</label>
          <select
            id="accent-select"
            value={accent}
            onChange={(e) => onAccentChange(e.target.value as Accent)}
            className="bg-slate-700 text-sky-200 border border-sky-600 rounded-md p-2 text-sm focus:ring-sky-500 focus:border-sky-500"
          >
            <option value="American">American English</option>
            <option value="British">British English</option>
          </select>
        </div>
      </div>
    </header>
  );
};
