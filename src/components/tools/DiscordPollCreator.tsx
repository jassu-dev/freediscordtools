'use client';

import { useState } from 'react';

export default function DiscordPollCreator() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [pollType, setPollType] = useState('simple');
  const [pollText, setPollText] = useState('');
  const [copied, setCopied] = useState(false);

  const addOption = () => {
    if (options.length < 10) {
      setOptions([...options, '']);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const generatePoll = () => {
    let poll = `**${question}**\n\n`;
    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    
    options.forEach((option, index) => {
      if (option.trim()) {
        poll += `${emojis[index]} ${option}\n`;
      }
    });

    setPollText(poll);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pollText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label className="font-bold text-[#1a1d2e]">Poll Question</label>
          <input
            type="text"
            placeholder="What's your favorite game?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <label className="font-bold text-[#1a1d2e]">Options</label>
            <button
              onClick={addOption}
              disabled={options.length >= 10}
              className="px-4 py-2 bg-[#F8F9FF] text-[#5865F2] font-bold rounded-lg hover:bg-[#E3E6F0] transition disabled:opacity-50"
            >
              + Add Option
            </button>
          </div>
          <div className="space-y-3">
            {options.map((option, index) => (
              <div key={index} className="flex gap-3 items-center">
                <span className="text-2xl">{['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'][index]}</span>
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
                />
                {options.length > 2 && (
                  <button
                    onClick={() => removeOption(index)}
                    className="px-4 py-3 text-red-500 hover:text-red-700 font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={generatePoll}
          className="px-6 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition shadow-lg"
        >
          Generate Poll
        </button>

        {pollText && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#1a1d2e]">Your Poll</h3>
            <div className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0] flex flex-col gap-3">
              <pre className="text-[#5b6282] whitespace-pre-wrap">{pollText}</pre>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition self-start"
              >
                {copied ? 'Copied!' : 'Copy Poll'}
              </button>
            </div>
            <div className="p-4 bg-[#F0F2FF] border-l-4 border-[#5865F2] rounded-r-xl text-sm text-[#373b4d]">
              <strong>Tip:</strong> After pasting the poll into Discord, add the reaction emojis manually or use a bot like Carl-bot to automate reactions!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
