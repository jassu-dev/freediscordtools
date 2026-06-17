'use client';
import { useState } from 'react';
import { calculateAtsScore } from './atsCalculator';

export default function AtsScannerTool() {
  const [text, setText] = useState('');
  const [score, setScore] = useState<number | null>(null);

  const handleScan = () => {
    setScore(calculateAtsScore(text));
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-[#E3E6F0]">
      <textarea
        className="w-full h-64 p-4 border rounded-md mb-4"
        placeholder="Paste your resume text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleScan}
        className="bg-[#5865F2] text-white px-6 py-3 rounded-md font-bold"
      >
        Check ATS Score
      </button>
      {score !== null && (
        <div className="mt-6 text-2xl font-bold">
          Your ATS Score: <span className="text-[#5865F2]">{score}/100</span>
        </div>
      )}
    </div>
  );
}
