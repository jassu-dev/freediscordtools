'use client';
import { useState } from 'react';
import { calculateAtsScore } from './atsCalculator';

export default function AtsScannerTool() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{score: number, improvements: string[]} | null>(null);

  const handleScan = () => {
    const score = calculateAtsScore(text);
    const improvements = [];
    if (!text.includes('skills')) improvements.push('Add a dedicated "Skills" section.');
    if (!text.includes('experience')) improvements.push('Include a "Work Experience" section.');
    if (text.length < 1500) improvements.push('Add more detail to your experience entries.');
    
    setResult({ score, improvements });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-[#E3E6F0]">
      <div className="mb-4 p-4 border-2 border-dashed rounded-md text-center text-[#5b6282]">
        Drag & drop PDF/DOCX or 
        <input type="file" className="ml-2" accept=".pdf,.doc,.docx" />
      </div>
      <textarea
        className="w-full h-64 p-4 border rounded-md mb-4"
        placeholder="Or paste your resume text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleScan}
        className="bg-[#5865F2] text-white px-6 py-3 rounded-md font-bold w-full"
      >
        Check ATS Score
      </button>
      
      {result && (
        <div className="mt-6 p-4 bg-[#F8F9FF] rounded-lg">
          <div className="text-2xl font-bold mb-4">
            Your ATS Score: <span className="text-[#5865F2]">{result.score}/100</span>
          </div>
          <h3 className="font-bold mb-2">Improvements to make:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {result.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
