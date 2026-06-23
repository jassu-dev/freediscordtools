'use client';

import { useState, useCallback } from 'react';
import { Copy, RefreshCw, Check, Lock, Unlock, Eye, EyeOff } from 'lucide-react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const generatePassword = useCallback(() => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charPool = '';
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool.length === 0) {
      setPassword('');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      generatedPassword += charPool[randomIndex];
    }

    setPassword(generatedPassword);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const handleCopy = useCallback(async () => {
    if (!password) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(password);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = password;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }, [password]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm">
        {/* Password Display */}
        <div className="mb-8">
          <label className="block text-lg font-bold text-[#1a1d2e] mb-3">
            Generated Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              readOnly
              className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-[#E3E6F0] text-2xl font-mono text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[64px]"
              placeholder="Click Generate to create a password"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 rounded-lg hover:bg-gray-100 text-[#5b6282] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              <button
                onClick={handleCopy}
                disabled={!password}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-[#5865F2] text-white hover:bg-[#4752C4] disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full py-4 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20 flex items-center justify-center gap-2"
        >
          <RefreshCw size={20} />
          Generate New Password
        </button>
      </div>

      {/* Settings */}
      <div className="bg-white p-8 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-[#1a1d2e]">Password Settings</h3>

        {/* Length */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="font-semibold text-[#1a1d2e]">Password Length</label>
            <span className="text-lg font-bold text-[#5865F2]">{length}</span>
          </div>
          <input
            type="range"
            min="4"
            max="64"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-2 bg-[#E3E6F0] rounded-lg appearance-none cursor-pointer accent-[#5865F2]"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-[#F0F2FF] transition-colors">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-5 h-5 accent-[#5865F2]"
            />
            <span className="font-semibold text-[#1a1d2e]">
              <Lock size={18} className="inline mr-2" />
              Uppercase (A-Z)
            </span>
          </label>

          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-[#F0F2FF] transition-colors">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-5 h-5 accent-[#5865F2]"
            />
            <span className="font-semibold text-[#1a1d2e]">
              <Unlock size={18} className="inline mr-2" />
              Lowercase (a-z)
            </span>
          </label>

          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-[#F0F2FF] transition-colors">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-5 h-5 accent-[#5865F2]"
            />
            <span className="font-semibold text-[#1a1d2e]">
              <Lock size={18} className="inline mr-2" />
              Numbers (0-9)
            </span>
          </label>

          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-[#F0F2FF] transition-colors">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-5 h-5 accent-[#5865F2]"
            />
            <span className="font-semibold text-[#1a1d2e]">
              <Lock size={18} className="inline mr-2" />
              Symbols (!@#$)
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
