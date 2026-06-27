'use client';

import { useState } from 'react';

// Discord message link formats:
// https://discord.com/channels/{guild_id}/{channel_id}/{message_id}
// https://discord.com/channels/@me/{channel_id}/{message_id}

interface ParsedLink {
  guildId: string | null;
  channelId: string;
  messageId: string;
  timestamp: Date | null;
}

export default function DiscordMessageLinkResolver() {
  const [link, setLink] = useState('');
  const [parsed, setParsed] = useState<ParsedLink | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Discord snowflake to timestamp converter
  const snowflakeToDate = (snowflake: string): Date | null => {
    try {
      const DISCORD_EPOCH = 1420070400000;
      const id = BigInt(snowflake);
      const timestamp = Number((id >> BigInt(22)) + BigInt(DISCORD_EPOCH));
      return new Date(timestamp);
    } catch (e) {
      return null;
    }
  };

  const handleParse = () => {
    setError(null);
    setParsed(null);

    try {
      const url = new URL(link);
      if (url.hostname !== 'discord.com' && url.hostname !== 'canary.discord.com' && url.hostname !== 'ptb.discord.com') {
        throw new Error('Not a valid Discord link');
      }

      const pathParts = url.pathname.split('/');
      if (pathParts[1] !== 'channels') {
        throw new Error('Not a valid Discord message link');
      }

      let guildId: string | null = null;
      let channelId: string;
      let messageId: string;

      if (pathParts[2] === '@me') {
        // DM link
        channelId = pathParts[3];
        messageId = pathParts[4];
      } else {
        // Server link
        guildId = pathParts[2];
        channelId = pathParts[3];
        messageId = pathParts[4];
      }

      if (!channelId || !messageId) {
        throw new Error('Could not parse channel or message ID');
      }

      setParsed({
        guildId,
        channelId,
        messageId,
        timestamp: snowflakeToDate(messageId),
      });
    } catch (e) {
      setError('Invalid Discord message link');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Paste Discord message link here..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#E3E6F0] rounded-xl focus:border-[#5865F2] outline-none"
            onKeyDown={(e) => e.key === 'Enter' && handleParse()}
          />
          <button
            onClick={handleParse}
            className="px-6 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752C4] transition shadow-lg"
          >
            Parse Link
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 border border-red-300 rounded-xl text-red-700">
            {error}
          </div>
        )}

        {parsed && (
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#1a1d2e]">Parsed Information</h3>
            <div className="grid grid-cols-1 gap-3">
              {parsed.guildId && (
                <div className="p-3 bg-[#F8F9FF] rounded-lg border border-[#E3E6F0] flex justify-between items-center">
                  <span className="font-bold text-[#1a1d2e]">Server ID</span>
                  <div className="flex gap-2 items-center">
                    <span className="text-[#5b6282]">{parsed.guildId}</span>
                    <button
                      onClick={() => copyToClipboard(parsed.guildId)}
                      className="text-[#5865F2] hover:underline text-sm"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
              <div className="p-3 bg-[#F8F9FF] rounded-lg border border-[#E3E6F0] flex justify-between items-center">
                <span className="font-bold text-[#1a1d2e]">Channel ID</span>
                <div className="flex gap-2 items-center">
                  <span className="text-[#5b6282]">{parsed.channelId}</span>
                  <button
                    onClick={() => copyToClipboard(parsed.channelId)}
                    className="text-[#5865F2] hover:underline text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div className="p-3 bg-[#F8F9FF] rounded-lg border border-[#E3E6F0] flex justify-between items-center">
                <span className="font-bold text-[#1a1d2e]">Message ID</span>
                <div className="flex gap-2 items-center">
                  <span className="text-[#5b6282]">{parsed.messageId}</span>
                  <button
                    onClick={() => copyToClipboard(parsed.messageId)}
                    className="text-[#5865F2] hover:underline text-sm"
                  >
                    Copy
                  </button>
                </div>
              </div>
              {parsed.timestamp && (
                <div className="p-3 bg-[#F8F9FF] rounded-lg border border-[#E3E6F0]">
                  <span className="font-bold text-[#1a1d2e]">Sent At</span>
                  <div className="mt-1 text-[#5b6282]">
                    <p>{parsed.timestamp.toLocaleString()}</p>
                    <p className="text-sm">{parsed.timestamp.toISOString()}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
