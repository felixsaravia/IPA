
import React from 'react';
import type { IPASymbol } from '../types';

interface MouthVisualizationProps {
  shape: IPASymbol['mouthShape'];
}

export const MouthVisualization: React.FC<MouthVisualizationProps> = ({ shape }) => {
  let width = 80;
  let height = 40;
  let rx = 40;
  let ry = 15;
  let fill = "rgb(251 146 163)"; // Light pink for lips, tailwind pink-400

  switch (shape) {
    case 'open':
      ry = 20;
      break;
    case 'mid':
      ry = 15;
      break;
    case 'closed':
      ry = 5;
      height = 20; // Make overall mouth less tall for closed
      break;
    case 'rounded':
      rx = 20;
      ry = 20; // More circular
      width = 50;
      break;
    case 'spread':
      rx = 45; // Wider
      ry = 10;
      width = 90;
      break;
    case 'neutral':
    default:
      // Default values are already neutral-ish
      break;
  }

  return (
    <div className="flex justify-center items-center h-24">
      <svg width={width + 10} height={height + 10} viewBox={`-5 -5 ${width + 10} ${height + 10}`} 
           aria-label={`Simplified mouth shape: ${shape}`} role="img">
        <ellipse 
          cx={width / 2} 
          cy={height / 2} 
          rx={rx} 
          ry={ry} 
          fill={fill}
          stroke="rgb(226 232 240)" // slate-200
          strokeWidth="2"
        />
        {/* Simple teeth representation for open/spread shapes */}
        {(shape === 'open' || shape === 'spread' || shape === 'mid') && ry > 8 && (
          <>
            <rect x={(width - rx * 1.2)/2} y={(height - ry*0.3)/2 - 2} width={rx * 1.2} height={ry*0.3} fill="white" rx="2" />
            <rect x={(width - rx * 1.2)/2} y={(height + ry*0.3)/2 - ry*0.3 + 2} width={rx * 1.2} height={ry*0.3} fill="white" rx="2" />
          </>
        )}
         {/* Simple tongue representation for some vowels */}
        {(shape === 'open' || shape === 'mid' ) && ry > 10 && (
          <ellipse 
            cx={width / 2} 
            cy={height / 2 + ry * 0.3} 
            rx={rx * 0.5} 
            ry={ry * 0.3} 
            fill="rgb(244 114 182)" // pink-500
          />
        )}
      </svg>
    </div>
  );
};
