
import React from 'react';

interface GeneratedImageViewProps {
  imageData: string | null; // base64 string or "error"
  altText: string;
}

export const GeneratedImageView: React.FC<GeneratedImageViewProps> = ({ imageData, altText }) => {
  if (imageData === 'error') {
    return (
      <div className="aspect-video bg-slate-600 rounded-md flex items-center justify-center">
        <div className="text-center text-red-400 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mb-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <p className="text-xs">Error generating image.</p>
        </div>
      </div>
    );
  }

  if (!imageData) {
    return (
      <div className="aspect-video bg-slate-600 rounded-md flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>
    );
  }

  return (
    <img 
      src={`data:image/jpeg;base64,${imageData}`} 
      alt={altText} 
      className="rounded-md object-cover aspect-video w-full" 
    />
  );
};
