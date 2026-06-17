'use client';
import { useState, useEffect } from 'react';
import { calculateAtsScore } from './atsCalculator';

export default function AtsScannerTool() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{score: number, improvements: string[]} | null>(null);

  const handleScan = () => {
    setLoading(true);
    setResult(null);
    
    // Simulate a deep analysis process to increase engagement
    setTimeout(() => {
      const score = calculateAtsScore(text);
      const improvements = [];
      if (!text.toLowerCase().includes('skills')) improvements.push('Missing "Skills" section: ATS systems rely on this to categorize your expertise.');
      if (!text.toLowerCase().includes('experience')) improvements.push('Missing "Experience" section: This is critical for ATS parsing of your work history.');
      if (text.length < 1500) improvements.push('Resume too short: Add more detail to your work history to improve keyword density.');
      if (text.toLowerCase().split(' ').length < 200) improvements.push('Low keyword density: Incorporate industry-specific terminology relevant to your target role.');
      
      setResult({ score, improvements });
      setLoading(false);
    }, 2500); // 2.5 seconds delay
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
      <div className="mb-6 p-6 border-2 border-dashed rounded-xl text-center text-[#5b6282] hover:border-[#5865F2] transition-colors">
        <p className="mb-2">Drag & drop your resume (PDF/DOCX) or</p>
        <input type="file" className="text-sm" accept=".pdf,.doc,.docx" />
      </div>
      <textarea
        className="w-full h-72 p-4 border border-[#E3E6F0] rounded-xl mb-6 focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
        placeholder="Or paste your resume text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleScan}
        disabled={loading || !text}
        className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold w-full transition-all disabled:opacity-50"
      >
        {loading ? 'Analyzing Your Resume...' : 'Analyze My ATS Score'}
      </button>
      
      {result && (
        <div className="mt-8 p-6 bg-[#F8F9FF] rounded-xl border border-[#5865F2]/20 animate-in fade-in duration-500">
          <div className="text-3xl font-extrabold mb-6 text-center">
            Your ATS Score: <span className="text-[#5865F2]">{result.score}/100</span>
          </div>
          <h3 className="font-bold text-lg mb-4 text-[#1a1d2e]">Actionable Improvements:</h3>
          <ul className="list-disc pl-5 space-y-3 text-[#5b6282]">
            {result.improvements.length > 0 ? (
              result.improvements.map((imp, i) => <li key={i}>{imp}</li>)
            ) : (
              <li>Great job! Your resume is highly optimized for ATS.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
