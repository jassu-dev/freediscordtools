'use client';

import { useState } from 'react';

interface ListItem {
  id: string;
  text: string;
  level: number;
  type: 'bullet' | 'number' | 'check';
  checked: boolean;
}

export default function DiscordIndentedListGenerator() {
  const [items, setItems] = useState<ListItem[]>([
    { id: '1', text: 'First item', level: 0, type: 'bullet', checked: false },
    { id: '2', text: 'Nested item', level: 1, type: 'bullet', checked: false },
    { id: '3', text: 'Another item', level: 0, type: 'bullet', checked: false },
  ]);

  const addItem = () => {
    const newItem: ListItem = {
      id: Date.now().toString(),
      text: 'New item',
      level: items.length > 0 ? items[items.length - 1].level : 0,
      type: items.length > 0 ? items[items.length - 1].type : 'bullet',
      checked: false,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, updates: Partial<ListItem>) => {
    setItems(items.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const indentItem = (id: string) => {
    setItems(items.map(item => {
      if (item.id === id && item.level < 3) {
        return { ...item, level: item.level + 1 };
      }
      return item;
    }));
  };

  const outdentItem = (id: string) => {
    setItems(items.map(item => {
      if (item.id === id && item.level > 0) {
        return { ...item, level: item.level - 1 };
      }
      return item;
    }));
  };

  const moveItem = (id: string, direction: 'up' | 'down') => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return;
    
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= items.length) return;
    
    const newItems = [...items];
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    setItems(newItems);
  };

  const generateMarkdown = () => {
    let numberCounter = 0;
    let lastLevel = -1;
    
    return items.map((item, index) => {
      const indent = '  '.repeat(item.level);
      
      let prefix = '';
      if (item.type === 'bullet') {
        prefix = '- ';
      } else if (item.type === 'number') {
        if (item.level <= lastLevel) {
          numberCounter = 1;
        } else {
          numberCounter++;
        }
        prefix = `${numberCounter}. `;
      } else if (item.type === 'check') {
        prefix = item.checked ? '- [x] ' : '- [ ] ';
      }
      
      lastLevel = item.level;
      return `${indent}${prefix}${item.text}`;
    }).join('\n');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateMarkdown());
  };

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#1a1d2e]">List Editor</h3>
            <button
              onClick={addItem}
              className="px-4 py-2 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition"
            >
              + Add Item
            </button>
          </div>
          
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={item.id} className="flex flex-col gap-2 p-3 bg-[#F8F9FF] rounded-lg border border-[#E3E6F0]">
                <div className="flex gap-2 items-center">
                  <select
                    value={item.type}
                    onChange={(e) => updateItem(item.id, { type: e.target.value as ListItem['type'] })}
                    className="px-2 py-1 rounded border border-[#E3E6F0] text-sm"
                  >
                    <option value="bullet">Bullet</option>
                    <option value="number">Numbered</option>
                    <option value="check">Checklist</option>
                  </select>
                  
                  {item.type === 'check' && (
                    <button
                      onClick={() => updateItem(item.id, { checked: !item.checked })}
                      className={`px-2 py-1 rounded border text-sm font-bold transition ${item.checked ? 'bg-[#5865F2] text-white border-[#5865F2]' : 'bg-white text-[#1a1d2e] border-[#E3E6F0]'}`}
                    >
                      {item.checked ? '✓ Checked' : '□ Unchecked'}
                    </button>
                  )}
                  
                  <div className="flex gap-1 ml-auto">
                    <button
                      onClick={() => moveItem(item.id, 'up')}
                      disabled={index === 0}
                      className="px-2 py-1 rounded border border-[#E3E6F0] text-sm hover:bg-white disabled:opacity-30"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveItem(item.id, 'down')}
                      disabled={index === items.length - 1}
                      className="px-2 py-1 rounded border border-[#E3E6F0] text-sm hover:bg-white disabled:opacity-30"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => outdentItem(item.id)}
                      disabled={item.level === 0}
                      className="px-2 py-1 rounded border border-[#E3E6F0] text-sm hover:bg-white disabled:opacity-30"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => indentItem(item.id)}
                      disabled={item.level === 3}
                      className="px-2 py-1 rounded border border-[#E3E6F0] text-sm hover:bg-white disabled:opacity-30"
                    >
                      →
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-2 py-1 rounded border border-red-300 text-red-600 text-sm hover:bg-red-50"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) => updateItem(item.id, { text: e.target.value })}
                  placeholder="Enter list item..."
                  className="w-full px-3 py-2 rounded border border-[#E3E6F0] focus:border-[#5865F2] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#1a1d2e]">Discord Preview</h3>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-[#5865F2] text-white font-bold rounded-lg hover:bg-[#4752C4] transition"
            >
              Copy to Clipboard
            </button>
          </div>
          
          <div className="bg-[#36393f] p-4 rounded-lg text-white font-mono text-sm">
            <pre>{generateMarkdown()}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
