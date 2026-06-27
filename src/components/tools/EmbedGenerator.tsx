'use client';
import { useState } from 'react';
import { Plus, Trash2, Clipboard, Check, Code, Eye, Sparkles } from 'lucide-react';

interface EmbedField {
  name: string;
  value: string;
  inline: boolean;
}

export default function EmbedGenerator() {
  // Embed properties
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [title, setTitle] = useState('');
  const [titleUrl, setTitleUrl] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#5865F2');
  const [authorName, setAuthorName] = useState('');
  const [authorUrl, setAuthorUrl] = useState('');
  const [authorIcon, setAuthorIcon] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [image, setImage] = useState('');
  const [footerText, setFooterText] = useState('');
  const [footerIcon, setFooterIcon] = useState('');
  const [fields, setFields] = useState<EmbedField[]>([]);
  const [showTimestamp, setShowTimestamp] = useState(false);

  // Interface state
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'json' | 'js' | 'py'>('preview');

  // Convert Hex to Decimal
  const getDecimalColor = (hex: string) => {
    const cleanHex = hex.replace('#', '');
    return parseInt(cleanHex, 16) || 0;
  };

  // Generate Webhook JSON Payload
  const generateJSON = () => {
    const embed: any = {};
    if (title) embed.title = title;
    if (titleUrl && title) embed.url = titleUrl;
    if (description) embed.description = description;
    embed.color = getDecimalColor(color);
    
    if (authorName) {
      embed.author = { name: authorName };
      if (authorUrl) embed.author.url = authorUrl;
      if (authorIcon) embed.author.icon_url = authorIcon;
    }
    
    if (thumbnail) embed.thumbnail = { url: thumbnail };
    if (image) embed.image = { url: image };
    
    if (footerText) {
      embed.footer = { text: footerText };
      if (footerIcon) embed.footer.icon_url = footerIcon;
    }
    
    if (fields.length > 0) {
      embed.fields = fields.map(f => ({ name: f.name, value: f.value, inline: f.inline }));
    }
    
    if (showTimestamp) {
      embed.timestamp = new Date().toISOString();
    }

    const payload: any = {};
    if (content) payload.content = content;
    if (username) payload.username = username;
    if (avatarUrl) payload.avatar_url = avatarUrl;
    payload.embeds = [embed];

    return JSON.stringify(payload, null, 2);
  };

  // Generate Discord.js v14 Snippet
  const generateDjs = () => {
    const decColor = getDecimalColor(color);
    let code = `const { EmbedBuilder } = require('discord.js');\n\n`;
    code += `const embed = new EmbedBuilder()\n`;
    code += `  .setColor(${decColor})\n`;
    if (title) code += `  .setTitle(${JSON.stringify(title)})\n`;
    if (titleUrl && title) code += `  .setURL(${JSON.stringify(titleUrl)})\n`;
    if (description) code += `  .setDescription(${JSON.stringify(description)})\n`;
    if (authorName) {
      code += `  .setAuthor({ name: ${JSON.stringify(authorName)}${authorIcon ? `, iconURL: ${JSON.stringify(authorIcon)}` : ''}${authorUrl ? `, url: ${JSON.stringify(authorUrl)}` : ''} })\n`;
    }
    if (thumbnail) code += `  .setThumbnail(${JSON.stringify(thumbnail)})\n`;
    if (image) code += `  .setImage(${JSON.stringify(image)})\n`;
    if (fields.length > 0) {
      const fieldsStr = fields.map(f => `    { name: ${JSON.stringify(f.name)}, value: ${JSON.stringify(f.value)}, inline: ${f.inline} }`).join(',\n');
      code += `  .addFields([\n${fieldsStr}\n  ])\n`;
    }
    if (footerText) {
      code += `  .setFooter({ text: ${JSON.stringify(footerText)}${footerIcon ? `, iconURL: ${JSON.stringify(footerIcon)}` : ''} })\n`;
    }
    if (showTimestamp) code += `  .setTimestamp()\n`;
    code += `;\n\nmessage.channel.send({ embeds: [embed] });`;
    return code;
  };

  // Generate Discord.py Snippet
  const generateDpy = () => {
    const hexColorStr = color.replace('#', '0x');
    let code = `import discord\n\n`;
    code += `embed = discord.Embed(\n`;
    if (title) code += `    title=${JSON.stringify(title)},\n`;
    if (description) code += `    description=${JSON.stringify(description)},\n`;
    if (titleUrl && title) code += `    url=${JSON.stringify(titleUrl)},\n`;
    code += `    color=discord.Color(${hexColorStr})\n`;
    code += `)\n`;
    
    if (authorName) {
      code += `embed.set_author(\n`;
      code += `    name=${JSON.stringify(authorName)},\n`;
      if (authorUrl) code += `    url=${JSON.stringify(authorUrl)},\n`;
      if (authorIcon) code += `    icon_url=${JSON.stringify(authorIcon)},\n`;
      code = code.replace(/,\n\)$/, '\n)');
    }
    if (thumbnail) code += `embed.set_thumbnail(url=${JSON.stringify(thumbnail)})\n`;
    if (image) code += `embed.set_image(url=${JSON.stringify(image)})\n`;
    
    fields.forEach(f => {
      code += `embed.add_field(name=${JSON.stringify(f.name)}, value=${JSON.stringify(f.value)}, inline=${f.inline ? 'True' : 'False'})\n`;
    });
    
    if (footerText) {
      code += `embed.set_footer(\n`;
      code += `    text=${JSON.stringify(footerText)},\n`;
      if (footerIcon) code += `    icon_url=${JSON.stringify(footerIcon)},\n`;
      code = code.replace(/,\n\)$/, '\n)');
    }
    if (showTimestamp) {
      code += `embed.timestamp = discord.utils.utcnow()\n`;
    }
    code += `\nawait ctx.send(embed=embed)`;
    return code;
  };

  const handleAddField = () => {
    if (fields.length < 25) {
      setFields([...fields, { name: 'Field Name', value: 'Field Value', inline: true }]);
    }
  };

  const handleUpdateField = (index: number, key: keyof EmbedField, val: any) => {
    const updated = [...fields];
    updated[index] = { ...updated[index], [key]: val };
    setFields(updated);
  };

  const handleRemoveField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const getCodeString = () => {
    switch (activeTab) {
      case 'json': return generateJSON();
      case 'js': return generateDjs();
      case 'py': return generateDpy();
      default: return '';
    }
  };

  const handleCopy = () => {
    const code = getCodeString();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Visual Form Editor */}
      <div className="lg:col-span-7 space-y-6">
        {/* Editor Wrapper */}
        <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-[#E3E6F0] pb-4">
            <h3 className="text-lg font-bold text-[#1a1d2e] flex items-center gap-2">
              <Sparkles className="text-[#5865F2]" size={20} />
              Embed Customizer
            </h3>
            <span className="text-xs text-[#5b6282] font-semibold">Max 25 Fields ({fields.length}/25)</span>
          </div>

          {/* Webhook Properties */}
          <div>
            <h4 className="text-sm font-bold text-[#1a1d2e] mb-3 uppercase tracking-wide text-[#5865F2]">1. Webhook Overrides (Optional)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Webhook Username</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="Custom bot username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Webhook Avatar URL</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="https://..."
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-3">
              <label className="block text-xs font-semibold text-[#5b6282] mb-1">Message Content (Outside Embed)</label>
              <textarea
                rows={2}
                className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                placeholder="Message that goes before the embed card..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>

          {/* Embed Core */}
          <div className="border-t border-[#E3E6F0] pt-6">
            <h4 className="text-sm font-bold text-[#1a1d2e] mb-3 uppercase tracking-wide text-[#5865F2]">2. Embed Main Content</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-[#5b6282] mb-1">Embed Title</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                    placeholder="Grand Giveaway!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5b6282] mb-1">Embed Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      className="w-10 h-9 p-0.5 border border-[#E3E6F0] rounded-lg cursor-pointer"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg uppercase font-mono text-center"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Title URL Link</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="https://google.com (optional)"
                  value={titleUrl}
                  onChange={(e) => setTitleUrl(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Description (Markdown allowed)</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="React to this post with 🎉 to win Nitro!"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Author info */}
          <div className="border-t border-[#E3E6F0] pt-6">
            <h4 className="text-sm font-bold text-[#1a1d2e] mb-3 uppercase tracking-wide text-[#5865F2]">3. Author Metadata</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Author Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="Community Bot"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Author URL</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="https://..."
                  value={authorUrl}
                  onChange={(e) => setAuthorUrl(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Author Icon URL</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="https://..."
                  value={authorIcon}
                  onChange={(e) => setAuthorIcon(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Embed Images */}
          <div className="border-t border-[#E3E6F0] pt-6">
            <h4 className="text-sm font-bold text-[#1a1d2e] mb-3 uppercase tracking-wide text-[#5865F2]">4. Images</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Thumbnail URL (Top Right)</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="https://..."
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Image URL (Main Bottom)</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="https://..."
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Fields */}
          <div className="border-t border-[#E3E6F0] pt-6">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-bold text-[#1a1d2e] uppercase tracking-wide text-[#5865F2]">5. Custom Fields</h4>
              <button
                type="button"
                onClick={handleAddField}
                disabled={fields.length >= 25}
                className="flex items-center gap-1 text-xs bg-[#5865F2] hover:bg-[#4752C4] text-white px-3 py-1.5 rounded-lg font-bold transition-all disabled:opacity-50"
              >
                <Plus size={14} /> Add Field
              </button>
            </div>

            {fields.length === 0 ? (
              <p className="text-xs text-[#5b6282] italic text-center py-4 bg-gray-50 rounded-xl border border-dashed border-[#E3E6F0]">
                No fields added yet. Webhook embeds support up to 25 custom table fields.
              </p>
            ) : (
              <div className="space-y-4">
                {fields.map((field, idx) => (
                  <div key={idx} className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0] space-y-3 relative group">
                    <button
                      type="button"
                      onClick={() => handleRemoveField(idx)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Remove Field"
                    >
                      <Trash2 size={16} />
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pr-6">
                      <div className="md:col-span-5">
                        <label className="block text-xs font-semibold text-[#5b6282] mb-1">Field Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-1.5 text-xs border border-[#E3E6F0] bg-white rounded-lg focus:border-[#5865F2] outline-none"
                          value={field.name}
                          onChange={(e) => handleUpdateField(idx, 'name', e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label className="block text-xs font-semibold text-[#5b6282] mb-1">Field Value</label>
                        <input
                          type="text"
                          className="w-full px-3 py-1.5 text-xs border border-[#E3E6F0] bg-white rounded-lg focus:border-[#5865F2] outline-none"
                          value={field.value}
                          onChange={(e) => handleUpdateField(idx, 'value', e.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2 flex items-center mt-4 md:mt-0">
                        <label className="flex items-center gap-1.5 cursor-pointer select-none text-xs font-semibold text-[#5b6282]">
                          <input
                            type="checkbox"
                            className="rounded border-[#E3E6F0] text-[#5865F2] focus:ring-[#5865F2]"
                            checked={field.inline}
                            onChange={(e) => handleUpdateField(idx, 'inline', e.target.checked)}
                          />
                          Inline
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="border-t border-[#E3E6F0] pt-6">
            <h4 className="text-sm font-bold text-[#1a1d2e] mb-3 uppercase tracking-wide text-[#5865F2]">6. Footer & Timestamp</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Footer Text</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="Powered by AntiGravity Tools"
                  value={footerText}
                  onChange={(e) => setFooterText(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#5b6282] mb-1">Footer Icon URL</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-[#E3E6F0] rounded-lg focus:border-[#5865F2] focus:ring-1 focus:ring-[#5865F2] outline-none"
                  placeholder="https://..."
                  value={footerIcon}
                  onChange={(e) => setFooterIcon(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm font-semibold text-[#1a1d2e]">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#E3E6F0] text-[#5865F2] focus:ring-[#5865F2]"
                  checked={showTimestamp}
                  onChange={(e) => setShowTimestamp(e.target.checked)}
                />
                Show Current Timestamp
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Live Simulator & Exports */}
      <div className="lg:col-span-5 space-y-6">
        {/* Navigation Tabs */}
        <div className="bg-white p-2 rounded-xl border border-[#E3E6F0] flex gap-1 shadow-sm">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'preview' ? 'bg-[#5865F2] text-white' : 'text-[#5b6282] hover:bg-gray-50'
            }`}
          >
            <Eye size={14} /> Discord Live Preview
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`flex-1 py-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'json' ? 'bg-[#5865F2] text-white' : 'text-[#5b6282] hover:bg-gray-50'
            }`}
          >
            <Code size={14} /> JSON Payload
          </button>
          <button
            onClick={() => setActiveTab('js')}
            className={`flex-1 py-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'js' ? 'bg-[#5865F2] text-white' : 'text-[#5b6282] hover:bg-gray-50'
            }`}
          >
            JS
          </button>
          <button
            onClick={() => setActiveTab('py')}
            className={`flex-1 py-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'py' ? 'bg-[#5865F2] text-white' : 'text-[#5b6282] hover:bg-gray-50'
            }`}
          >
            Py
          </button>
        </div>

        {/* Dynamic Display Panel */}
        {activeTab === 'preview' ? (
          <div className="bg-[#313338] text-[#dbdee1] p-6 rounded-2xl border border-gray-800 shadow-xl overflow-hidden font-sans">
            {/* Simulation Header */}
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4 border-b border-gray-700/50 pb-2">
              Discord Client Preview (Dark Mode)
            </div>

            {/* Chat message row */}
            <div className="flex gap-4 items-start">
              {/* Avatar Icon */}
              <div className="flex-shrink-0">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold font-mono">
                    {username ? username.slice(0,2).toUpperCase() : 'BOT'}
                  </div>
                )}
              </div>

              {/* Message Content Area */}
              <div className="flex-1 min-w-0">
                {/* User details */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-white hover:underline cursor-pointer text-sm">
                    {username || 'Discord Bot'}
                  </span>
                  <span className="bg-[#5865F2] text-white text-[9px] font-bold px-1 py-0.5 rounded leading-none">
                    BOT
                  </span>
                  <span className="text-[10px] text-gray-400">
                    Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {/* Text content outside embed */}
                {content && (
                  <div className="text-sm text-gray-100 whitespace-pre-wrap mb-2 leading-relaxed">
                    {content}
                  </div>
                )}

                {/* Discord Embed Card container */}
                <div className="max-w-[520px] bg-[#2b2d31] rounded border-l-4 overflow-hidden relative" style={{ borderLeftColor: color }}>
                  <div className="p-4 flex gap-4">
                    {/* Embed Content Info */}
                    <div className="flex-1 min-w-0 space-y-2">
                      {/* Author */}
                      {authorName && (
                        <div className="flex items-center gap-2">
                          {authorIcon && <img src={authorIcon} alt="Author Icon" className="w-5 h-5 rounded-full object-cover" />}
                          {authorUrl ? (
                            <a href={authorUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-white hover:underline">
                              {authorName}
                            </a>
                          ) : (
                            <span className="text-xs font-semibold text-white">{authorName}</span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      {title && (
                        <div>
                          {titleUrl ? (
                            <a href={titleUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#00a8fc] hover:underline block">
                              {title}
                            </a>
                          ) : (
                            <span className="text-base font-bold text-white block">{title}</span>
                          )}
                        </div>
                      )}

                      {/* Description */}
                      {description && (
                        <div className="text-sm text-[#dbdee1] whitespace-pre-wrap leading-relaxed">
                          {description}
                        </div>
                      )}

                      {/* Fields grid */}
                      {fields.length > 0 && (
                        <div className="grid grid-cols-12 gap-3 pt-2">
                          {fields.map((f, index) => {
                            const inlineSpan = f.inline ? 'col-span-4' : 'col-span-12';
                            return (
                              <div key={index} className={`${inlineSpan} min-w-0`}>
                                <div className="text-xs font-bold text-white mb-0.5 truncate">{f.name}</div>
                                <div className="text-sm text-[#dbdee1] break-words whitespace-pre-wrap">{f.value}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Image */}
                      {image && (
                        <div className="pt-2">
                          <img src={image} alt="Embed" className="rounded max-h-[300px] w-full object-cover border border-gray-700/30" />
                        </div>
                      )}

                      {/* Footer & Timestamp */}
                      {(footerText || showTimestamp) && (
                        <div className="flex items-center gap-2 pt-2 text-[10px] text-gray-400">
                          {footerIcon && <img src={footerIcon} alt="Footer Icon" className="w-4 h-4 rounded-full object-cover" />}
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {footerText && <span>{footerText}</span>}
                            {footerText && showTimestamp && <span>•</span>}
                            {showTimestamp && (
                              <span>
                                {new Date().toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Image (Top Right) */}
                    {thumbnail && (
                      <div className="flex-shrink-0 w-20 h-20">
                        <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover rounded border border-gray-700/30" />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white p-6 rounded-2xl border border-[#E3E6F0] shadow-sm flex flex-col min-h-[400px]">
            <div className="flex items-center justify-between border-b border-[#E3E6F0] pb-3 mb-4">
              <h4 className="text-xs font-bold uppercase text-[#5b6282]">Export Code</h4>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-[#5865F2] hover:text-[#4752C4] font-bold bg-[#F0F2FF] hover:bg-[#E3E6F0] px-3 py-1.5 rounded-lg transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} /> Copied!
                  </>
                ) : (
                  <>
                    <Clipboard size={14} /> Copy Code
                  </>
                )}
              </button>
            </div>
            
            <pre className="flex-1 bg-gray-50 border border-[#E3E6F0] rounded-xl p-4 overflow-auto font-mono text-xs text-[#373b4d] leading-relaxed max-h-[500px]">
              <code>{getCodeString()}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
