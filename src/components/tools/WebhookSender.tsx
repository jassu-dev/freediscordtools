'use client';

import { useState, useCallback } from 'react';

export default function WebhookSender() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const handleSend = useCallback(async () => {
    if (!webhookUrl) {
      setStatus({ type: 'error', message: 'Please enter a Webhook URL.' });
      return;
    }
    if (!content) {
      setStatus({ type: 'error', message: 'Please enter message content.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const payload: any = {
        content: content,
      };
      if (username) payload.username = username;
      if (avatarUrl) payload.avatar_url = avatarUrl;

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 3000);
      } else {
        const errData = await response.json().catch(() => ({}));
        setStatus({
          type: 'error',
          message: errData.message || `Failed to send message (Status: ${response.status})`,
        });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'An error occurred while sending the message.' });
    }
  }, [webhookUrl, username, avatarUrl, content]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-6">
        {/* Webhook URL */}
        <div>
          <label htmlFor="webhook-url" className="block text-sm font-medium text-[#5b6282] mb-1">
            Webhook URL <span className="text-red-500">*</span>
          </label>
          <input
            id="webhook-url"
            type="text"
            placeholder="https://discord.com/api/webhooks/..."
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[44px] shadow-sm font-mono text-sm"
          />
        </div>

        {/* Customization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="webhook-username" className="block text-sm font-medium text-[#5b6282] mb-1">
              Custom Username (Optional)
            </label>
            <input
              id="webhook-username"
              type="text"
              placeholder="e.g. My Custom Bot"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[44px] shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="webhook-avatar" className="block text-sm font-medium text-[#5b6282] mb-1">
              Custom Avatar URL (Optional)
            </label>
            <input
              id="webhook-avatar"
              type="text"
              placeholder="https://example.com/image.png"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 min-h-[44px] shadow-sm"
            />
          </div>
        </div>

        {/* Message Content */}
        <div>
          <label htmlFor="webhook-content" className="block text-sm font-medium text-[#5b6282] mb-1">
            Message Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="webhook-content"
            placeholder="Hello from FreeDiscordTools!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 rounded-lg bg-white border border-[#E3E6F0] text-[#1a1d2e] focus:outline-none focus:border-[#5865F2] focus:ring-2 focus:ring-[#5865F2]/20 shadow-sm resize-none"
          />
        </div>

        {/* Status Display */}
        {status.type !== 'idle' && (
          <div className={`p-3 rounded-lg text-sm font-medium ${
            status.type === 'loading' ? 'bg-blue-50 text-blue-700' :
            status.type === 'success' ? 'bg-green-50 text-green-700' :
            'bg-red-50 text-red-700'
          }`}>
            {status.message}
          </div>
        )}

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={status.type === 'loading'}
          className={`w-full py-3 rounded-xl font-bold text-white transition-all shadow-md active:scale-[0.98] ${
            status.type === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#5865F2] hover:bg-[#4752C4] hover:shadow-lg'
          }`}
        >
          {status.type === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </button>
      </div>
    </div>
  );
}
