'use client';
import { useState, useRef } from 'react';
import { Bold, Italic, Underline, Eye, Sparkles, Code, Quote, Trash2, Clipboard, Check } from 'lucide-react';

export default function MarkdownPreviewer() {
  const [text, setText] = useState('Hello! Welcome to the **Discord Markdown Previewer**.\n\nThis tool lets you preview how your messages look before posting them.\n\n||Click this text to reveal a secret spoiler!||\n\nYou can use: \n* **Bold text** with `**` \n* *Italics* with `*` or `_` \n* __Underline__ with `__` \n* ~~Strikethrough~~ with `~~` \n* `# Header 1` for big announcements\n\n> This is a blockquote.\n\nHave fun formatting!');
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Helper to wrap selected text in markdown markers
  const insertMarker = (startMarker: string, endMarker: string = startMarker) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selection = text.substring(start, end);
    const replacement = startMarker + selection + endMarker;

    setText(text.substring(0, start) + replacement + text.substring(end));

    // Refocus and reset cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + startMarker.length, start + startMarker.length + selection.length);
    }, 0);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Parsing markdown to Discord-like HTML
  const parseMarkdown = (rawText: string) => {
    if (!rawText) return '<span class="text-gray-500 italic">No text to preview. Type something on the left!</span>';

    // 1. Escape HTML entities first to prevent XSS
    let html = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 2. Parse code blocks: ```lang\ncode\n```
    html = html.replace(/```(?:[a-zA-Z0-9]+)?\n([\s\S]*?)\n```/g, '<pre class="bg-[#1e1f22] border border-[#2b2d31] p-3 rounded-lg font-mono text-xs text-gray-200 my-2 overflow-x-auto whitespace-pre">$1</pre>');

    // 3. Parse inline code: `code`
    html = html.replace(/`([^`\n]+)`/g, '<code class="bg-[#1e1f22] px-1.5 py-0.5 rounded text-[#e06c75] font-mono text-xs font-semibold">$1</code>');

    // 4. Parse spoilers: ||spoiler||
    // Uses inline JS to toggle a class on click
    html = html.replace(/\|\|([\s\S]*?)\|\|/g, 
      '<span class="bg-[#1e1f22] text-[#1e1f22] hover:bg-[#2e3035] rounded px-1.5 py-0.5 cursor-pointer font-medium transition-colors select-none" onclick="this.style.color=\'#dbdee1\'; this.style.backgroundColor=\'rgba(255,255,255,0.05)\';">$1</span>'
    );

    // 5. Parse headers: # H1, ## H2, ### H3
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-sm font-bold text-white mt-3 mb-1">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-base font-bold text-white mt-4 mb-1 border-b border-gray-800 pb-0.5">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-lg font-extrabold text-white mt-5 mb-2 border-b border-gray-700 pb-1">$1</h1>');

    // 6. Parse Blockquotes: > quote (multiline support)
    html = html.replace(/^\s*&gt;\s+(.*$)/gim, '<blockquote class="border-l-4 border-gray-600 pl-3 italic text-gray-400 my-2">$1</blockquote>');

    // 7. Parse lists: * item, - item
    html = html.replace(/^\s*[\*\-]\s+(.*$)/gim, '<li class="list-disc ml-5 text-sm text-[#dbdee1]">$1</li>');

    // 8. Parse standard text styling markers (Bold, Italic, Underline, Strikethrough)
    html = html.replace(/\*\*([\s\S]*?)\*\*/g, '<strong class="font-extrabold text-white">$1</strong>');
    html = html.replace(/\*([\s\S]*?)\*/g, '<em class="italic">$1</em>');
    html = html.replace(/_([\s\S]*?)_/g, '<em class="italic">$1</em>');
    html = html.replace(/__([\s\S]*?)__/g, '<span class="underline decoration-1 decoration-gray-400">$1</span>');
    html = html.replace(/~~([\s\S]*?)~~/g, '<del class="line-through text-gray-400">$1</del>');

    // 9. Convert newlines to breaks
    html = html.replace(/\n/g, '<br />');

    return html;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Editor Panel */}
      <div className="lg:col-span-7 space-y-4">
        <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#E3E6F0] pb-3">
            <h3 className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
              <Sparkles className="text-[#5865F2]" size={20} />
              Markdown Editor
            </h3>
            <span className="text-xs text-[#5b6282] font-semibold">{text.length} Characters</span>
          </div>

          {/* Quick Markup Formatting Bar */}
          <div className="flex flex-wrap gap-2 border-b border-[#E3E6F0] pb-3">
            <button
              onClick={() => insertMarker('**')}
              className="p-2 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg transition-colors"
              title="Bold (**)"
            >
              <Bold size={16} />
            </button>
            <button
              onClick={() => insertMarker('*')}
              className="p-2 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg transition-colors"
              title="Italic (*)"
            >
              <Italic size={16} />
            </button>
            <button
              onClick={() => insertMarker('__')}
              className="p-2 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg transition-colors"
              title="Underline (__)"
            >
              <Underline size={16} />
            </button>
            <button
              onClick={() => insertMarker('~~')}
              className="p-2 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg transition-colors"
              title="Strikethrough (~~)"
            >
              <span className="font-bold line-through text-sm px-0.5">S</span>
            </button>
            <div className="w-px bg-[#E3E6F0] h-6 my-auto" />
            <button
              onClick={() => insertMarker('||')}
              className="px-2.5 py-1.5 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg text-xs font-bold transition-colors"
              title="Spoiler (||)"
            >
              Spoiler
            </button>
            <button
              onClick={() => insertMarker('`')}
              className="p-2 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg transition-colors"
              title="Inline Code (`)"
            >
              <Code size={16} />
            </button>
            <button
              onClick={() => insertMarker('```\n', '\n```')}
              className="px-2.5 py-1.5 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg text-xs font-bold transition-colors"
              title="Code Block (```)"
            >
              Code Block
            </button>
            <button
              onClick={() => insertMarker('> ')}
              className="p-2 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg transition-colors"
              title="Blockquote (>)"
            >
              <Quote size={16} />
            </button>
            <div className="w-px bg-[#E3E6F0] h-6 my-auto" />
            <button
              onClick={() => insertMarker('# ')}
              className="px-2 py-1 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg text-xs font-bold transition-colors"
              title="H1 Header"
            >
              H1
            </button>
            <button
              onClick={() => insertMarker('## ')}
              className="px-2 py-1 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg text-xs font-bold transition-colors"
              title="H2 Header"
            >
              H2
            </button>
            <button
              onClick={() => insertMarker('### ')}
              className="px-2 py-1 bg-gray-50 hover:bg-[#F0F2FF] hover:text-[#5865F2] text-[#373b4d] rounded-lg text-xs font-bold transition-colors"
              title="H3 Header"
            >
              H3
            </button>
          </div>

          {/* Text Area Input */}
          <textarea
            ref={textareaRef}
            rows={12}
            className="w-full p-4 border border-[#E3E6F0] rounded-xl focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none transition-all font-mono text-sm leading-relaxed"
            placeholder="Type your markdown here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Action Triggers */}
          <div className="flex gap-4">
            <button
              onClick={copyToClipboard}
              className="flex-1 flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 rounded-xl font-bold transition-all shadow-md shadow-[#5865F2]/20"
            >
              {copied ? <Check size={18} /> : <Clipboard size={18} />}
              {copied ? 'Copied Markdown!' : 'Copy Markdown'}
            </button>
            <button
              onClick={() => setText('')}
              className="px-4 py-3 border border-[#E3E6F0] text-gray-500 hover:text-red-500 hover:border-red-500 rounded-xl transition-all"
              title="Clear Text"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Simulator Preview Panel */}
      <div className="lg:col-span-5 space-y-4">
        <div className="bg-[#313338] text-[#dbdee1] p-6 rounded-2xl border border-gray-800 shadow-xl min-h-[460px] flex flex-col font-sans">
          {/* Header */}
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4 border-b border-gray-700/50 pb-2 flex items-center gap-1.5">
            <Eye size={12} />
            Discord Message Preview (Interactive)
          </div>

          {/* Chat message layout */}
          <div className="flex gap-4 items-start flex-1">
            {/* Avatar */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold">
              USER
            </div>

            {/* Content box */}
            <div className="flex-1 min-w-0">
              {/* Profile meta header */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-semibold text-white hover:underline cursor-pointer text-sm">
                  Community Member
                </span>
                <span className="text-[10px] text-gray-400">
                  Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {/* Parsed message text */}
              <div
                className="text-sm leading-relaxed break-words whitespace-pre-wrap selection:bg-[#5865f2]/30"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }}
              />
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-800 text-[10px] text-gray-500 flex justify-between">
            <span>Note: Click spoiler blocks to uncover content.</span>
            <span>Client Rendered</span>
          </div>
        </div>
      </div>
    </div>
  );
}
