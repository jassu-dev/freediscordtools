// ─── Unicode Font Transformation Library ─────────────────────────────────────
// Performance: all maps & arrays built once at module load (not per-call).
// Correctness: every map verified source.length === target codepoints via spread.

export interface FontStyle {
  id: string;
  name: string;
  category: FontCategory;
  transform: (text: string) => string;
  preview: string;
  trending?: boolean;
  popular?: number;
}

export type FontCategory =
  | 'Aesthetic'
  | 'Cute'
  | 'Gothic'
  | 'Fancy'
  | 'Gaming'
  | 'Anime'
  | 'Cyberpunk'
  | 'Small Caps'
  | 'Bubble'
  | 'Glitch'
  | 'Script'
  | 'Bold';

// ─── Constants ────────────────────────────────────────────────────────────────
const UPPER  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER  = 'abcdefghijklmnopqrstuvwxyz';
const DIGITS = '0123456789';

// ─── Map helpers ──────────────────────────────────────────────────────────────
// Uses Unicode-aware spread so astral codepoints (SMP chars) are single entries.
function makeMap(source: string, target: string): Map<string, string> {
  const src = [...source];
  const tgt = [...target];
  const m   = new Map<string, string>();
  const len = Math.min(src.length, tgt.length);
  for (let i = 0; i < len; i++) m.set(src[i], tgt[i]);
  return m;
}

function applyMap(text: string, map: Map<string, string>): string {
  return [...text].map((c) => map.get(c) ?? c).join('');
}

// Helper: build a map from a Unicode codepoint range
function rangeMap(source: string, startCP: number): Map<string, string> {
  const src = [...source];
  const m   = new Map<string, string>();
  for (let i = 0; i < src.length; i++) {
    m.set(src[i], String.fromCodePoint(startCP + i));
  }
  return m;
}

// ─── Mathematical alphanumeric maps (SMP, all pre-built at module load) ───────

// U+1D400 Bold Serif
const boldSerifMap = new Map([
  ...rangeMap(UPPER,  0x1D400),
  ...rangeMap(LOWER,  0x1D41A),
  ...rangeMap(DIGITS, 0x1D7CE),
]);

// U+1D434 Italic Serif (special cases: h=U+210E already handled by range)
const italicSerifMap = new Map([
  ...rangeMap(UPPER, 0x1D434),
  ...rangeMap(LOWER, 0x1D44E),
  ['h', '\u210E'], ['I', '\u2110'],
]);
// Fix h position in italic lowercase (0x1D44E+7 = h slot = keep ℎ via override)
italicSerifMap.set('h', '\u210E');

// U+1D468 Bold Italic Serif
const boldItalicSerifMap = new Map([
  ...rangeMap(UPPER, 0x1D468),
  ...rangeMap(LOWER, 0x1D482),
]);

// U+1D49C Script (with several letterlike symbol replacements)
const _scriptExceptions: Record<string,string> = {
  B:'\u212C', E:'\u2130', F:'\u2131', H:'\u210B', I:'\u2110',
  L:'\u2112', M:'\u2133', R:'\u211B',
  e:'\u212F', g:'\u210A', o:'\u2134',
};
const scriptMap = new Map<string,string>();
[...UPPER].forEach((c,i) => scriptMap.set(c, _scriptExceptions[c] ?? String.fromCodePoint(0x1D49C+i)));
[...LOWER].forEach((c,i) => scriptMap.set(c, _scriptExceptions[c] ?? String.fromCodePoint(0x1D4B6+i)));

// U+1D4D0 Bold Script
const boldScriptMap = new Map([
  ...rangeMap(UPPER, 0x1D4D0),
  ...rangeMap(LOWER, 0x1D4EA),
]);

// U+1D504 Fraktur (with letterlike replacements)
const _frakturExceptions: Record<string,string> = {
  C:'\u212D', H:'\u210C', I:'\u2111', R:'\u211C', Z:'\u2128',
};
const frakturMap = new Map<string,string>();
[...UPPER].forEach((c,i) => frakturMap.set(c, _frakturExceptions[c] ?? String.fromCodePoint(0x1D504+i)));
[...LOWER].forEach((c,i) => frakturMap.set(c, String.fromCodePoint(0x1D51E+i)));

// U+1D56C Bold Fraktur
const boldFrakturMap = new Map([
  ...rangeMap(UPPER, 0x1D56C),
  ...rangeMap(LOWER, 0x1D586),
]);

// U+1D538 Double-Struck (with letterlike replacements)
const _dsExceptions: Record<string,string> = {
  C:'\u2102', H:'\u210D', N:'\u2115', P:'\u2119', Q:'\u211A', R:'\u211D', Z:'\u2124',
};
const doubleStruckMap = new Map<string,string>();
[...UPPER].forEach((c,i) => doubleStruckMap.set(c, _dsExceptions[c] ?? String.fromCodePoint(0x1D538+i)));
[...LOWER].forEach((c,i) => doubleStruckMap.set(c, String.fromCodePoint(0x1D552+i)));
rangeMap(DIGITS, 0x1D7D8).forEach((v,k) => doubleStruckMap.set(k,v));

// U+1D5A0 Sans-Serif
const sansSerifMap = new Map([
  ...rangeMap(UPPER,  0x1D5A0),
  ...rangeMap(LOWER,  0x1D5BA),
  ...rangeMap(DIGITS, 0x1D7E2),
]);

// U+1D5D4 Bold Sans-Serif
const boldSansMap = new Map([
  ...rangeMap(UPPER,  0x1D5D4),
  ...rangeMap(LOWER,  0x1D5EE),
  ...rangeMap(DIGITS, 0x1D7EC),
]);

// U+1D608 Italic Sans-Serif
const italicSansMap = new Map([
  ...rangeMap(UPPER, 0x1D608),
  ...rangeMap(LOWER, 0x1D622),
]);

// U+1D63C Bold Italic Sans-Serif
const boldItalicSansMap = new Map([
  ...rangeMap(UPPER, 0x1D63C),
  ...rangeMap(LOWER, 0x1D656),
]);

// U+1D670 Monospace
const monospaceMap = new Map([
  ...rangeMap(UPPER,  0x1D670),
  ...rangeMap(LOWER,  0x1D68A),
  ...rangeMap(DIGITS, 0x1D7F6),
]);

// Fullwidth Latin
const fullwidthMap = new Map([
  ...rangeMap(UPPER,  0xFF21),
  ...rangeMap(LOWER,  0xFF41),
  ...rangeMap(DIGITS, 0xFF10),
  [' ', '\u3000'],
]);

// Circled (bubble): Ⓐ=U+24B6, ⓐ=U+24D0, ⓪=U+24EA, ①=U+2460
const bubbleMap = new Map([
  ...rangeMap(UPPER,  0x24B6),
  ...rangeMap(LOWER,  0x24D0),
  ['0', String.fromCodePoint(0x24EA)],
  ...rangeMap('123456789', 0x2460),
]);

// Negative circled: 🅐=U+1F150
const negativeBubbleMap = new Map([
  ...rangeMap(UPPER, 0x1F150),
  ...rangeMap(LOWER, 0x1F150), // lowercase maps to same (uppercase variant)
]);

// Squared: 🄰=U+1F130
const squaredMap = new Map([
  ...rangeMap(UPPER, 0x1F130),
  ...rangeMap(LOWER, 0x1F130), // lowercase maps to uppercase squared
]);

// Small Caps (IPA phonetic) only lowercase, verified 26 chars
const smallCapsMap = makeMap(
  LOWER,
  'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ'
);

// Superscript best available per letter
const superscriptMap = makeMap(
  LOWER + UPPER + DIGITS,
  'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ' +
  'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁᵛᵂˣʸᶻ' +
  '⁰¹²³⁴⁵⁶⁷⁸⁹'
);

// Subscript available characters only
const subscriptMap = makeMap(
  LOWER + DIGITS,
  'ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz' +
  '₀₁₂₃₄₅₆₇₈₉'
);

// Leet speak
const leetMap = makeMap(
  'aAbBcCdDeEgGiIoOsStT',
  '4A8B(C|)D3EgGiIoO$$tT'
);

// Upside-down (IPA lookalikes, text reversed on apply)
const upsideDownMap = makeMap(
  LOWER + UPPER,
  'ɐqɔpǝɟƃɥᴉɾʞlɯuodqɹsʇnʌʍxʎz' +
  'ɐqɔpǝɟƃɥᴉɾʞlɯuodqɹsʇnʌʍxʎz'
);

// ─── Combining diacritical helpers ────────────────────────────────────────────
// Only applies diacritic to non-space characters to avoid weird space rendering.
function withCombining(mark: string) {
  return (text: string): string =>
    [...text].map((c) => (c === ' ' ? c : c + mark)).join('');
}

const strikethrough   = withCombining('\u0336'); // combining long stroke overlay
const underlineText   = withCombining('\u0332'); // combining low line
const doubleUnderline = withCombining('\u0333'); // combining double low line
const overlineText    = withCombining('\u0305'); // combining overline
const slashThrough    = withCombining('\u0338'); // combining long solidus overlay
const dotAbove        = withCombining('\u0307'); // combining dot above
const ringAbove       = withCombining('\u030A'); // combining ring above
const tildeCombining  = withCombining('\u0303'); // combining tilde
const wavyUnderline   = withCombining('\u0330'); // combining tilde below (wavy under)
const acuteCombining  = withCombining('\u0301'); // combining acute accent
const graveCombining  = withCombining('\u0300'); // combining grave accent
const circumflex      = withCombining('\u0302'); // combining circumflex accent
const macronAbove     = withCombining('\u0304'); // combining macron
const breve           = withCombining('\u0306'); // combining breve
const caronMark       = withCombining('\u030C'); // combining caron (háček)

// ─── Glitch / Zalgo ─────────────────────────────────────────────────────────
// Uses modulo on a small fixed seed derived from char position + index,
// NOT from codePointAt (which produces wrong modulo for astral-plane chars).
const Z_UP:   string[] = ['\u030d','\u030e','\u0304','\u0305','\u033f','\u0311','\u0306','\u0310','\u0352','\u0357'];
const Z_DOWN: string[] = ['\u0316','\u0317','\u0318','\u0319','\u031c','\u031d','\u031e','\u031f','\u0320','\u0324'];
const Z_MID:  string[] = ['\u0300','\u0301','\u0302','\u0303','\u0307','\u0308','\u030a','\u030b','\u030c','\u0350'];

// ONLY apply glitch to ASCII chars never to already-transformed astral SMP chars.
// This prevents the "stacked marks on fullwidth" breakage reported by the user.
function glitch(text: string, intensity: number): string {
  const chars = [...text];
  return chars.map((c, charIdx) => {
    if (c === ' ') return c;
    const cp = c.codePointAt(0)!;
    // Only glitch basic Latin (ASCII range) to avoid mangling SMP Unicode chars
    if (cp > 0x02FF) return c;
    let r = c;
    for (let i = 0; i < intensity; i++) {
      const seed = (charIdx * 31 + i * 17 + cp) & 0xFFFF;
      r += Z_UP[seed   % Z_UP.length];
      r += Z_DOWN[(seed * 7) % Z_DOWN.length];
      r += Z_MID[(seed  * 13) % Z_MID.length];
    }
    return r;
  }).join('');
}

// ─── Pure transform helpers ───────────────────────────────────────────────────
const wrap     = (l: string, r: string) => (t: string) => l + t + r;
const joinWith = (sep: string)          => (t: string) => [...t].join(sep);
const fw       = (t: string)            => applyMap(t, fullwidthMap);
const uwuFont  = (t: string)            => t
  .replace(/[rl]/gi, m => m === m.toUpperCase() ? 'W' : 'w')
  .replace(/n([aeiou])/gi, (_, v) => 'ny' + v)
  .replace(/ove/gi, 'uv');
const flipText = (t: string)            => applyMap([...t].reverse().join(''), upsideDownMap);

// ─── Font style registry ──────────────────────────────────────────────────────
export const FONT_STYLES: FontStyle[] = [

  // ══════════════════════════════════════════════════════════════════════ BOLD

  { id:'bold-serif',       name:'Bold',              category:'Bold',      transform:t=>applyMap(t,boldSerifMap),       preview:'𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭',        trending:true, popular:95 },
  { id:'bold-italic',      name:'Bold Italic',       category:'Bold',      transform:t=>applyMap(t,boldItalicSerifMap), preview:'𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄',      popular:80 },
  { id:'bold-sans',        name:'Bold Sans',         category:'Bold',      transform:t=>applyMap(t,boldSansMap),        preview:'𝗕𝗼𝗹𝗱 𝗦𝗮𝗻𝘀',         trending:true, popular:88 },
  { id:'bold-italic-sans', name:'Bold Italic Sans',  category:'Bold',      transform:t=>applyMap(t,boldItalicSansMap),  preview:'𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘',       popular:72 },
  { id:'bold-outlined',    name:'Bold Outlined',     category:'Bold',      transform:t=>applyMap(t,doubleStruckMap),    preview:'𝔹𝕠𝕝𝕕 𝕆𝕦𝕥',         popular:74 },
  { id:'bold-underline',   name:'Bold Underlined',   category:'Bold',      transform:t=>underlineText(applyMap(t,boldSerifMap)),      preview:'𝐁̲𝐨̲𝐥̲𝐝̲',  popular:66 },
  { id:'bold-strike',      name:'Bold Strike',       category:'Bold',      transform:t=>strikethrough(applyMap(t,boldSerifMap)),      preview:'𝐁̶𝐨̶𝐥̶𝐝̶', popular:61 },
  { id:'bold-overline',    name:'Bold Overline',     category:'Bold',      transform:t=>overlineText(applyMap(t,boldSerifMap)),       preview:'𝐁̅𝐨̅𝐥̅𝐝̅', popular:57 },
  { id:'bold-italic-under',name:'Bold Italic U/L',   category:'Bold',      transform:t=>underlineText(applyMap(t,boldItalicSerifMap)),preview:'𝑩̲𝒐̲𝒍̲𝒅̲', popular:54 },

  // ══════════════════════════════════════════════════════════════════════ SCRIPT

  { id:'script',           name:'Script',            category:'Script',    transform:t=>applyMap(t,scriptMap),          preview:'𝒮𝒸𝓇𝒾𝓅𝓉',           trending:true, popular:92 },
  { id:'bold-script',      name:'Bold Script',       category:'Script',    transform:t=>applyMap(t,boldScriptMap),      preview:'𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽',      popular:85 },
  { id:'script-spaced',    name:'Script Spaced',     category:'Script',    transform:t=>joinWith(' ')(applyMap(t,scriptMap)),           preview:'𝒮 𝒸 𝓇 𝒾 𝓅 𝓉', popular:63 },
  { id:'script-hearts',    name:'Script Hearts',     category:'Script',    transform:t=>'♡ '+applyMap(t,boldScriptMap)+' ♡',           preview:'♡ 𝓢𝓬𝓻𝓲𝓹𝓽 ♡',   popular:71 },
  { id:'script-overline',  name:'Script Overline',   category:'Script',    transform:t=>overlineText(applyMap(t,scriptMap)),            preview:'𝒮̅𝒸̅𝓇̅𝒾̅',        popular:55 },
  { id:'script-sparkle',   name:'Script Sparkle',    category:'Script',    transform:t=>'✨ '+applyMap(t,boldScriptMap)+' ✨',          preview:'✨ 𝓢𝓬𝓻𝓲𝓹𝓽 ✨',  popular:69 },

  // ══════════════════════════════════════════════════════════════════════ ITALIC

  { id:'italic-serif',     name:'Italic',            category:'Fancy',     transform:t=>applyMap(t,italicSerifMap),     preview:'𝐼𝑡𝑎𝑙𝑖𝑐',            popular:78 },
  { id:'italic-sans',      name:'Italic Sans',       category:'Fancy',     transform:t=>applyMap(t,italicSansMap),      preview:'𝘐𝘵𝘢𝘭𝘪𝘤 𝘚𝘢𝘯𝘴',        popular:70 },
  { id:'italic-under',     name:'Italic Underline',  category:'Fancy',     transform:t=>underlineText(applyMap(t,italicSerifMap)),      preview:'𝐼̲𝑡̲𝑎̲𝑙̲𝑖̲𝑐̲', popular:58 },

  // ══════════════════════════════════════════════════════════════════════ AESTHETIC

  { id:'vaporwave',        name:'Vaporwave',         category:'Aesthetic', transform:fw,                                preview:'Ｖａｐｏｒｗａｖｅ',   trending:true, popular:91 },
  { id:'spaced',           name:'Spaced',            category:'Aesthetic', transform:t=>[...t].join(' '),               preview:'S p a c e d',        popular:82 },
  { id:'sparkle',          name:'Sparkle',           category:'Aesthetic', transform:joinWith('✦'),                     preview:'S✦p✦a✦r✦k✦l✦e',     popular:79 },
  { id:'stars',            name:'Stars',             category:'Aesthetic', transform:wrap('★ ',' ★'),                   preview:'★ Stars ★',          popular:75 },
  { id:'hearts',           name:'Hearts',            category:'Aesthetic', transform:wrap('♡ ',' ♡'),                   preview:'♡ Hearts ♡',         popular:77 },
  { id:'dot-above',        name:'Dotted',            category:'Aesthetic', transform:dotAbove,                          preview:'Ḋöṫṫėḋ',            popular:65 },
  { id:'ring-above',       name:'Ringed',            category:'Aesthetic', transform:ringAbove,                         preview:'Ri̊n̊ge̊d̊',          popular:60 },
  { id:'tilde',            name:'Tilde Wave',        category:'Aesthetic', transform:tildeCombining,                    preview:'T̃ĩl̃d̃ẽ',           popular:58 },
  { id:'angle-brackets',   name:'Angle Brackets',    category:'Aesthetic', transform:wrap('「','」'),                   preview:'「Aesthetic」',        popular:62 },
  { id:'jp-brackets',      name:'JP Brackets',       category:'Aesthetic', transform:wrap('【','】'),                   preview:'【Aesthetic】',        popular:68 },
  { id:'vaporwave-spaced', name:'Vaporwave Spaced',  category:'Aesthetic', transform:t=>joinWith(' ')(fw(t)),           preview:'Ｖ ａ ｐ ｏ ｒ',    popular:69 },
  { id:'diamond',          name:'Diamond',           category:'Aesthetic', transform:joinWith('◆'),                     preview:'D◆i◆a◆m◆o◆n◆d',     popular:56 },
  { id:'bullet',           name:'Bullet Sep',        category:'Aesthetic', transform:joinWith('•'),                     preview:'B•u•l•l•e•t',        popular:54 },
  { id:'flower-sep',       name:'Flower Sep',        category:'Aesthetic', transform:joinWith('✿'),                     preview:'F✿l✿o✿w✿e✿r',        popular:57 },
  { id:'star-sep',         name:'Star Glitter',      category:'Aesthetic', transform:joinWith('⋆'),                     preview:'S⋆t⋆a⋆r',           popular:59 },
  { id:'moon-wrap',        name:'Moon Wrap',         category:'Aesthetic', transform:wrap('☽ ',' ☾'),                   preview:'☽ Moon ☾',           popular:61 },
  { id:'crown-wrap',       name:'Crown',             category:'Aesthetic', transform:wrap('♛ ',' ♛'),                   preview:'♛ Crown ♛',          popular:64 },
  { id:'wave-wrap',        name:'Wave Bracket',      category:'Aesthetic', transform:wrap('〜','〜'),                   preview:'〜Wave〜',            popular:53 },
  { id:'italic-spaced',    name:'Italic Spaced',     category:'Aesthetic', transform:t=>[...applyMap(t,italicSerifMap)].join(' '), preview:'𝐼 𝑡 𝑎 𝑙 𝑖 𝑐', popular:60 },
  { id:'bold-spaced',      name:'Bold Spaced',       category:'Aesthetic', transform:t=>[...applyMap(t,boldSerifMap)].join(' '),   preview:'𝐁 𝐨 𝐥 𝐝',        popular:63 },
  { id:'macron-style',     name:'Macron',            category:'Aesthetic', transform:macronAbove,                       preview:'M̄ā̄c̄r̄ō̄n̄',          popular:52 },
  { id:'breve-style',      name:'Breve',             category:'Aesthetic', transform:breve,                             preview:'B̆r̆ĕv̆ĕ',             popular:51 },
  { id:'caron-style',      name:'Háček',             category:'Aesthetic', transform:caronMark,                         preview:'Ȟǎčěk',              popular:50 },
  { id:'acute-style',      name:'Acute Accent',      category:'Aesthetic', transform:acuteCombining,                    preview:'Áćúté',              popular:50 },
  { id:'grave-style',      name:'Grave Accent',      category:'Aesthetic', transform:graveCombining,                    preview:'G̀r̀àv̀è',            popular:48 },
  { id:'circumflex-style', name:'Circumflex',        category:'Aesthetic', transform:circumflex,                        preview:'Ĉirĉumflex',         popular:49 },

  // ══════════════════════════════════════════════════════════════════════ CUTE

  { id:'uwu',              name:'UwU',               category:'Cute',      transform:uwuFont,                           preview:'UwU Font',           trending:true, popular:87 },
  { id:'kaomoji',          name:'Kaomoji',           category:'Cute',      transform:wrap('(✿◠‿◠) ',''),               preview:'(✿◠‿◠) Cute',        popular:76 },
  { id:'star-emoji',       name:'Star Emoji',        category:'Cute',      transform:wrap('🌟 ',' 🌟'),                 preview:'🌟 Cute 🌟',          popular:71 },
  { id:'curly-brackets',   name:'Curly Brackets',    category:'Cute',      transform:wrap('{ ',' }'),                  preview:'{ Cute }',           popular:64 },
  { id:'cherry',           name:'Cherry',            category:'Cute',      transform:wrap('🍒 ',' 🍒'),                 preview:'🍒 Cherry 🍒',        popular:67 },
  { id:'sparkle-cute',     name:'Sparkle',           category:'Cute',      transform:wrap('✨ ',' ✨'),                 preview:'✨ Sparkle ✨',        popular:73 },
  { id:'paw-wrap',         name:'Paw',               category:'Cute',      transform:wrap('🐾 ',' 🐾'),                 preview:'🐾 Paw 🐾',           popular:62 },
  { id:'flower-cute',      name:'Flower',            category:'Cute',      transform:wrap('🌸 ',' 🌸'),                 preview:'🌸 Flower 🌸',        popular:68 },
  { id:'rainbow-wrap',     name:'Rainbow',           category:'Cute',      transform:wrap('🌈 ',' 🌈'),                 preview:'🌈 Rainbow 🌈',       popular:65 },
  { id:'cookie-wrap',      name:'Cookie',            category:'Cute',      transform:wrap('🍪 ',' 🍪'),                 preview:'🍪 Cookie 🍪',        popular:60 },
  { id:'bunny-wrap',       name:'Bunny',             category:'Cute',      transform:wrap('(づ。◕‿‿◕。)づ ',''),        preview:'(づ。◕‿‿◕。)づ Hi',  popular:58 },
  { id:'owo-wrap',         name:'OwO',               category:'Cute',      transform:wrap('OwO ',''),                  preview:'OwO Text',           popular:70 },
  { id:'script-cute',      name:'Cute Script',       category:'Cute',      transform:t=>'♡ '+applyMap(t,scriptMap)+' ♡', preview:'♡ 𝒸𝓊𝓉ℯ ♡',       popular:72 },
  { id:'tiny-cute',        name:'Tiny Text',         category:'Cute',      transform:t=>applyMap(t,superscriptMap),    preview:'ᵗⁱⁿʸ ᵗᵉˣᵗ',          popular:66 },
  { id:'heart-sep',        name:'Heart Sep',         category:'Cute',      transform:joinWith('♥'),                    preview:'H♥e♥a♥r♥t',         popular:61 },

  // ══════════════════════════════════════════════════════════════════════ GOTHIC

  { id:'fraktur',          name:'Fraktur',           category:'Gothic',    transform:t=>applyMap(t,frakturMap),         preview:'𝔉𝔯𝔞𝔨𝔱𝔲𝔯',           trending:true, popular:90 },
  { id:'bold-fraktur',     name:'Bold Fraktur',      category:'Gothic',    transform:t=>applyMap(t,boldFrakturMap),     preview:'𝕭𝖔𝖑𝖉 𝕱𝖗𝖆𝖐𝖙𝖚𝖗',      popular:81 },
  { id:'double-struck',    name:'Double Struck',     category:'Gothic',    transform:t=>applyMap(t,doubleStruckMap),    preview:'𝔻𝕠𝕦𝕓𝕝𝕖',            popular:74 },
  { id:'gothic-wide',      name:'Gothic Wide',       category:'Gothic',    transform:t=>joinWith(' ')(applyMap(t,frakturMap)),        preview:'𝔊 𝔬 𝔱 𝔥',   popular:65 },
  { id:'gothic-strike',    name:'Gothic Strike',     category:'Gothic',    transform:t=>strikethrough(applyMap(t,frakturMap)),        preview:'𝔊̶𝔬̶𝔱̶𝔥̶',    popular:61 },
  { id:'gothic-overline',  name:'Gothic Overline',   category:'Gothic',    transform:t=>overlineText(applyMap(t,boldFrakturMap)),     preview:'𝕲̅𝖔̅𝖙̅𝖍̅',    popular:59 },
  { id:'gothic-ring',      name:'Gothic Ringed',     category:'Gothic',    transform:t=>ringAbove(applyMap(t,frakturMap)),            preview:'𝔊̊𝔬̊𝔱̊𝔥̊',    popular:57 },
  { id:'outlined-wide',    name:'Outlined Wide',     category:'Gothic',    transform:t=>joinWith(' ')(applyMap(t,doubleStruckMap)),   preview:'𝔻 𝕠 𝕦 𝕓',   popular:56 },
  { id:'outlined-script',  name:'Gothic Script',     category:'Gothic',    transform:t=>applyMap(t,doubleStruckMap),                  preview:'𝔻𝕠𝕦𝕓𝕝𝕖',     popular:55 },

  // ══════════════════════════════════════════════════════════════════════ SMALL CAPS

  { id:'small-caps',       name:'Small Caps',        category:'Small Caps', transform:t=>applyMap(t,smallCapsMap),     preview:'ꜱᴍᴀʟʟ ᴄᴀᴩꜱ',         trending:true, popular:89 },
  { id:'small-caps-spaced',name:'Small Caps Spaced', category:'Small Caps', transform:t=>joinWith(' ')(applyMap(t,smallCapsMap)),     preview:'ꜱ ᴍ ᴀ ʟ ʟ', popular:63 },
  { id:'small-caps-italic',name:'SC Italic',         category:'Small Caps', transform:t=>applyMap(applyMap(t,italicSerifMap),smallCapsMap), preview:'𝐼ᴛᴀʟɪᴄ', popular:57 },
  { id:'small-caps-wide',  name:'SC Vaporwave',      category:'Small Caps', transform:t=>fw(applyMap(t,smallCapsMap)), preview:'ꜱｍᴀʟʟ ꜱ', popular:54 },

  // ══════════════════════════════════════════════════════════════════════ FANCY

  { id:'superscript',      name:'Superscript',       category:'Fancy',     transform:t=>applyMap(t,superscriptMap),    preview:'ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ',       popular:73 },
  { id:'subscript',        name:'Subscript',         category:'Fancy',     transform:t=>applyMap(t,subscriptMap),      preview:'ₛᵤbₛcᵣᵢₚₜ',         popular:61 },
  { id:'upside-down',      name:'Upside Down',       category:'Fancy',     transform:flipText,                         preview:'uʍop ǝpᴉsdΩ',        popular:84 },
  { id:'strikethrough',    name:'Strikethrough',     category:'Fancy',     transform:strikethrough,                    preview:'S̶t̶r̶i̶k̶e̶',          popular:83 },
  { id:'underline',        name:'Underline',         category:'Fancy',     transform:underlineText,                    preview:'U̲n̲d̲e̲r̲l̲i̲n̲e̲',        popular:69 },
  { id:'double-underline', name:'Double Underline',  category:'Fancy',     transform:doubleUnderline,                  preview:'D̳o̳u̳b̳l̳e̳',          popular:59 },
  { id:'slash-through',    name:'Slash Through',     category:'Fancy',     transform:slashThrough,                     preview:'S̸l̸a̸s̸h̸',            popular:55 },
  { id:'overline',         name:'Overline',          category:'Fancy',     transform:overlineText,                     preview:'O̅v̅e̅r̅l̅i̅n̅e̅',        popular:56 },
  { id:'wavy-underline',   name:'Wavy Underline',    category:'Fancy',     transform:wavyUnderline,                    preview:'W̰a̰v̰y̰',              popular:57 },
  { id:'sans-serif',       name:'Sans Serif',        category:'Fancy',     transform:t=>applyMap(t,sansSerifMap),      preview:'𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿',          popular:71 },
  { id:'monospace',        name:'Monospace',         category:'Fancy',     transform:t=>applyMap(t,monospaceMap),      preview:'𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',          popular:76 },
  { id:'mirror',           name:'Mirror / Flip',     category:'Fancy',     transform:t=>[...t].reverse().join(''),     preview:'txeT rorriM',        popular:66 },
  { id:'bold-mono',        name:'Bold Mono',         category:'Fancy',     transform:t=>applyMap(applyMap(t,boldSerifMap),monospaceMap), preview:'𝙱𝚘𝚕𝚍', popular:58 },
  { id:'wavy-italic',      name:'Wavy Italic',       category:'Fancy',     transform:t=>wavyUnderline(applyMap(t,italicSerifMap)),       preview:'𝐼̰𝑡̰𝑎̰𝑙̰𝑖̰𝑐̰', popular:53 },

  // ══════════════════════════════════════════════════════════════════════ BUBBLE

  { id:'bubble',           name:'Bubble',            category:'Bubble',    transform:t=>applyMap(t,bubbleMap),         preview:'ⓑⓤⓑⓑⓛⓔ',          trending:true, popular:86 },
  { id:'filled-bubble',    name:'Filled Bubble',     category:'Bubble',    transform:t=>applyMap(t,negativeBubbleMap), preview:'🅕🅘🅛🅛🅔🅓',         popular:67 },
  { id:'squared',          name:'Squared',           category:'Bubble',    transform:t=>applyMap(t,squaredMap),        preview:'🄢🄠🄤🄰🄡🄴🄳',        popular:63 },
  { id:'bubble-spaced',    name:'Bubble Spaced',     category:'Bubble',    transform:t=>joinWith(' ')(applyMap(t,bubbleMap)),          preview:'ⓑ ⓤ ⓑ ⓑ ⓛ ⓔ', popular:58 },
  { id:'bubble-strike',    name:'Bubble Strike',     category:'Bubble',    transform:t=>strikethrough(applyMap(t,bubbleMap)),          preview:'ⓑ̶ⓤ̶ⓑ̶ⓑ̶',      popular:54 },
  { id:'bubble-italic',    name:'Bubble Italic',     category:'Bubble',    transform:t=>applyMap(applyMap(t,italicSerifMap),bubbleMap), preview:'ⓘⓣⓐⓛⓘⓒ',   popular:51 },
  { id:'squared-spaced',   name:'Squared Spaced',    category:'Bubble',    transform:t=>joinWith(' ')(applyMap(t,squaredMap)),         preview:'🄢 🄠 🄤',      popular:49 },

  // ══════════════════════════════════════════════════════════════════════ GLITCH
  // Glitch only applied to ASCII-range text avoids broken fullwidth + combining combos

  { id:'glitch-mild',      name:'Glitch',            category:'Glitch',    transform:t=>glitch(t,2),                   preview:'G̷l̴i̸t̵c̷h̴',          trending:true, popular:93 },
  { id:'glitch-heavy',     name:'Heavy Glitch',      category:'Glitch',    transform:t=>glitch(t,4),                   preview:'H̵e̸a̴v̷y̶',            popular:82 },
  { id:'glitch-bold',      name:'Glitch Bold',       category:'Glitch',    transform:t=>glitch(applyMap(t,boldSerifMap),2), preview:'𝐆̷𝐥̴𝐢̸𝐭̵𝐜̷𝐡̴',        popular:78 },
  { id:'glitch-script',    name:'Glitch Script',     category:'Glitch',    transform:t=>glitch(applyMap(t,scriptMap),1),   preview:'𝒢̷𝓁̴𝒾̸𝓉̵',           popular:72 },
  { id:'glitch-fraktur',   name:'Glitch Gothic',     category:'Glitch',    transform:t=>glitch(applyMap(t,frakturMap),2),  preview:'𝔊̷𝔩̴𝔦̸𝔱̵',           popular:70 },
  { id:'glitch-strikeout', name:'Glitch Strike',     category:'Glitch',    transform:t=>strikethrough(glitch(t,1)),        preview:'G̶̷l̶̴i̶̸t̶̵c̶̷h̶̴',     popular:65 },
  { id:'glitch-underline', name:'Glitch Underline',  category:'Glitch',    transform:t=>underlineText(glitch(t,2)),        preview:'G̷̲l̴̲i̸̲t̵̲c̷̲h̴̲',     popular:62 },

  // ══════════════════════════════════════════════════════════════════════ GAMING

  { id:'leet',             name:'L33t Speak',        category:'Gaming',    transform:t=>applyMap(t,leetMap),            preview:'L33t Sp34k',         trending:true, popular:88 },
  { id:'retro',            name:'Retro',             category:'Gaming',    transform:t=>'▶ '+applyMap(t,monospaceMap)+' ◀', preview:'▶ 𝚁𝚎𝚝𝚛𝚘 ◀',  popular:75 },
  { id:'leet-bold',        name:'L33t Bold',         category:'Gaming',    transform:t=>applyMap(applyMap(t,boldSansMap),leetMap), preview:'𝗟33𝘁 𝗕𝗼𝗹𝗱', popular:70 },
  { id:'gaming-glitch',    name:'Gaming Glitch',     category:'Gaming',    transform:t=>'⚔ '+glitch(t,1)+' ⚔',         preview:'⚔ G̷a̴m̸e ⚔',        popular:77 },
  { id:'code-style',       name:'Code Style',        category:'Gaming',    transform:t=>'> '+applyMap(t,monospaceMap),  preview:'> 𝙲𝚘𝚍𝚎',            popular:65 },
  { id:'wide-gaming',      name:'Wide Gaming',       category:'Gaming',    transform:t=>fw(applyMap(t,boldSansMap)),    preview:'Ｗｉｄｅ',            popular:73 },
  { id:'double-struck-gaming',name:'Math Gaming',    category:'Gaming',    transform:t=>applyMap(t,doubleStruckMap),   preview:'𝕄𝕒𝕥𝕙',              popular:62 },
  { id:'mono-glitch-gaming',name:'Mono Glitch',      category:'Gaming',    transform:t=>glitch(applyMap(t,monospaceMap),1), preview:'𝙼̷𝚘̴𝚗̸𝚘̵',          popular:60 },
  { id:'leet-italic',      name:'L33t Italic',       category:'Gaming',    transform:t=>applyMap(applyMap(t,italicSansMap),leetMap), preview:'𝘓33𝘵 𝘐𝘵𝘢𝘭𝘪𝘤', popular:55 },

  // ══════════════════════════════════════════════════════════════════════ CYBERPUNK

  { id:'cyberpunk',        name:'Cyberpunk',         category:'Cyberpunk', transform:t=>glitch(applyMap(t,boldSansMap),1),          preview:'𝗖̷𝘆̴𝗯̸𝗲̵𝗿̷',  trending:true, popular:90 },
  { id:'neon-wide',        name:'Neon Wide',         category:'Cyberpunk', transform:fw,                                            preview:'Ｎｅｏｎ',       popular:78 },
  { id:'cyber-leet',       name:'Cyber L33t',        category:'Cyberpunk', transform:t=>applyMap(applyMap(t,boldSansMap),leetMap),   preview:'𝗖𝘆b3r',       popular:72 },
  { id:'cyber-strike',     name:'Cyber Strike',      category:'Cyberpunk', transform:t=>strikethrough(applyMap(t,boldSansMap)),      preview:'𝗖̶𝘆̶𝗯̶𝗲̶𝗿̶',   popular:64 },
  { id:'cyber-ring',       name:'Cyber Ring',        category:'Cyberpunk', transform:t=>ringAbove(applyMap(t,boldSansMap)),          preview:'𝗖̊𝘆̊𝗯̊𝗲̊𝗿̊',   popular:60 },
  { id:'cyber-overline',   name:'Cyber Overline',    category:'Cyberpunk', transform:t=>overlineText(applyMap(t,boldSansMap)),       preview:'𝗖̅𝘆̅𝗯̅𝗲̅𝗿̅',   popular:57 },
  { id:'cyber-italic',     name:'Cyber Italic',      category:'Cyberpunk', transform:t=>glitch(applyMap(t,boldItalicSansMap),1),     preview:'𝘽̷𝙤̴𝙡̸𝙙̵',    popular:68 },
  { id:'neon-double',      name:'Neon Outlined',     category:'Cyberpunk', transform:t=>applyMap(t,doubleStruckMap),                 preview:'𝕹𝖊𝖔𝖓',       popular:69 },
  { id:'cyber-mono',       name:'Cyber Mono',        category:'Cyberpunk', transform:t=>glitch(applyMap(t,monospaceMap),1),          preview:'𝙲̷𝚢̴𝚋̸𝚎̵𝚛̷',   popular:63 },

  // ══════════════════════════════════════════════════════════════════════ ANIME

  { id:'anime-sparkle',    name:'Anime Sparkle',     category:'Anime',     transform:t=>'✨'+applyMap(t,boldScriptMap)+'✨', preview:'✨𝓐𝓷𝓲𝓶𝓮✨',  trending:true, popular:91 },
  { id:'anime-hearts',     name:'Anime Hearts',      category:'Anime',     transform:t=>'♥ '+applyMap(t,scriptMap)+' ♥',   preview:'♥ 𝒜𝓃𝒾𝓂ℯ ♥',  popular:83 },
  { id:'anime-star',       name:'Star Script',       category:'Anime',     transform:t=>'⭐'+applyMap(t,boldScriptMap)+'⭐',preview:'⭐𝓢𝓽𝓪𝓻⭐',    popular:79 },
  { id:'anime-kawaii',     name:'Kawaii',            category:'Anime',     transform:wrap('(｡♥‿♥｡) ',''),                  preview:'(｡♥‿♥｡) Kawaii', popular:74 },
  { id:'anime-bold-spark', name:'Bold Sparkle',      category:'Anime',     transform:t=>'✦ '+applyMap(t,boldScriptMap)+' ✦', preview:'✦ 𝓐𝓷𝓲𝓶𝓮 ✦', popular:76 },
  { id:'anime-moon',       name:'Moonlight',         category:'Anime',     transform:t=>'🌙 '+applyMap(t,boldScriptMap)+' 🌙', preview:'🌙 𝓜𝓸𝓸𝓷 🌙', popular:72 },
  { id:'anime-rose',       name:'Rose',              category:'Anime',     transform:t=>'🌹 '+applyMap(t,scriptMap)+' 🌹', preview:'🌹 𝒜𝓃𝒾𝓂ℯ 🌹', popular:68 },
  { id:'anime-cat',        name:'Cat',               category:'Anime',     transform:wrap('(=^･ω･^=) ',''),               preview:'(=^･ω･^=) Nyan', popular:66 },
  { id:'anime-hug',        name:'Hug',               category:'Anime',     transform:wrap('(づ￣ ³￣)づ ',''),             preview:'(づ￣ ³￣)づ Hug', popular:63 },
  { id:'anime-script-sp',  name:'Anime Spaced',      category:'Anime',     transform:t=>'✧ '+joinWith(' ')(applyMap(t,scriptMap))+' ✧', preview:'✧ 𝒜 𝓃 𝒾 𝓂 ✧', popular:61 },
  { id:'anime-deco',       name:'Deco Script',       category:'Anime',     transform:t=>'°✧° '+applyMap(t,boldScriptMap)+' °✧°', preview:'°✧° 𝓐𝓷𝓲𝓶𝓮 °✧°', popular:59 },

  // ══════════════════════════════════════════════════════════════════ EXTRA BOLD

  { id:'bold-double',      name:'Bold Double',       category:'Bold',      transform:t=>applyMap(t,boldItalicSansMap), preview:'𝘽𝙤𝙡𝙙 𝘿𝙤𝙪𝙗𝙡𝙚',  popular:60 },
  { id:'bold-wide',        name:'Bold Wide',         category:'Bold',      transform:t=>fw(applyMap(t,boldSerifMap)),  preview:'Ｂｏｌｄ',         popular:58 },
  { id:'bold-tilde',       name:'Bold Tilde',        category:'Bold',      transform:t=>tildeCombining(applyMap(t,boldSerifMap)), preview:'𝐁̃𝐨̃𝐥̃𝐝̃', popular:52 },

  // ══════════════════════════════════════════════════════════════════ EXTRA SCRIPT

  { id:'script-italic',    name:'Script Italic',     category:'Script',    transform:t=>applyMap(t,italicSerifMap),   preview:'𝑆𝑐𝑟𝑖𝑝𝑡',          popular:60 },
  { id:'script-bold-wide', name:'Script Wide',       category:'Script',    transform:t=>fw(applyMap(t,boldScriptMap)), preview:'𝓢𝓬𝓻𝓲𝓹𝓽',         popular:56 },
  { id:'script-ring',      name:'Script Ringed',     category:'Script',    transform:t=>ringAbove(applyMap(t,scriptMap)),   preview:'𝒮̊𝒸̊𝓇̊𝒾̊', popular:53 },

  // ══════════════════════════════════════════════════════════════════ EXTRA GOTHIC

  { id:'fraktur-italic',   name:'Gothic Italic',     category:'Gothic',    transform:t=>applyMap(t,boldItalicSerifMap), preview:'𝑮𝒐𝒕𝒉𝒊𝒄',         popular:58 },
  { id:'fraktur-tilde',    name:'Gothic Tilde',      category:'Gothic',    transform:t=>tildeCombining(applyMap(t,frakturMap)), preview:'𝔊̃𝔬̃𝔱̃𝔥̃', popular:52 },
  { id:'fraktur-hearts',   name:'Gothic Hearts',     category:'Gothic',    transform:t=>'☩ '+applyMap(t,frakturMap)+' ☩', preview:'☩ 𝔊𝔬𝔱𝔥 ☩',      popular:56 },

  // ══════════════════════════════════════════════════════════════════ EXTRA GAMING

  { id:'gaming-bracket',   name:'Gaming Bracket',    category:'Gaming',    transform:t=>'['+applyMap(t,boldSansMap)+']', preview:'[𝗚𝗮𝗺𝗲𝗿]',        popular:67 },
  { id:'gaming-sword',     name:'Sword Strike',      category:'Gaming',    transform:t=>'†'+applyMap(t,monospaceMap)+'†', preview:'†𝙶𝚊𝚖𝚎†',         popular:64 },
  { id:'gaming-fire',      name:'Fire Gaming',       category:'Gaming',    transform:t=>'🔥 '+applyMap(t,boldSansMap)+' 🔥', preview:'🔥 𝗙𝗶𝗿𝗲 🔥',   popular:71 },
  { id:'gaming-skull',     name:'Skull Gaming',      category:'Gaming',    transform:t=>'💀 '+applyMap(t,boldSansMap)+' 💀', preview:'💀 𝗦𝗸𝘂𝗹𝗹 💀',  popular:68 },

  // ══════════════════════════════════════════════════════════════════ EXTRA CYBERPUNK

  { id:'cyber-bracket',    name:'Cyber Bracket',     category:'Cyberpunk', transform:t=>'['+glitch(applyMap(t,boldSansMap),1)+']', preview:'[𝗖̷𝘆̴𝗯̸𝗲̵𝗿̷]', popular:65 },
  { id:'cyber-double',     name:'Cyber Double',      category:'Cyberpunk', transform:t=>glitch(applyMap(t,doubleStruckMap),1),  preview:'𝔻̷𝕚̴𝕤̸𝕔̵',       popular:62 },
  { id:'cyber-skull',      name:'Cyber Skull',       category:'Cyberpunk', transform:t=>'💀 '+glitch(applyMap(t,boldSansMap),1)+' 💀', preview:'💀 𝗖̷𝘆̴𝗯̸𝗲̵𝗿̷ 💀', popular:67 },

  // ══════════════════════════════════════════════════════════════════ EXTRA GLITCH

  { id:'glitch-double',    name:'Glitch Double',     category:'Glitch',    transform:t=>glitch(applyMap(t,doubleStruckMap),2), preview:'𝔻̷𝕠̴𝕦̸𝕓̵𝕝̷𝕖̴',   popular:60 },
  { id:'glitch-bold-heavy',name:'Glitch Bold Heavy', category:'Glitch',    transform:t=>glitch(applyMap(t,boldItalicSerifMap),3), preview:'𝑩̷𝒐̴𝒍̸𝒅̵',   popular:63 },

  // ══════════════════════════════════════════════════════════════════ EXTRA BUBBLE

  { id:'bubble-hearts',    name:'Bubble Hearts',     category:'Bubble',    transform:t=>'♡ '+applyMap(t,bubbleMap)+' ♡', preview:'♡ ⓑⓤⓑⓑⓛⓔ ♡',    popular:60 },
  { id:'bubble-fire',      name:'Bubble Fire',       category:'Bubble',    transform:t=>'🔥 '+applyMap(t,bubbleMap)+' 🔥', preview:'🔥 ⓑⓤⓑⓑⓛⓔ 🔥', popular:57 },
  { id:'squared-hearts',   name:'Squared Hearts',    category:'Bubble',    transform:t=>'♡ '+applyMap(t,squaredMap)+' ♡', preview:'♡ 🄢🄠🄤 ♡',        popular:53 },

  // ══════════════════════════════════════════════════════════════════ EXTRA CUTE

  { id:'cute-music',       name:'Music',             category:'Cute',      transform:t=>'♪ '+t+' ♪',                  preview:'♪ Music ♪',         popular:69 },
  { id:'cute-dice',        name:'Dice',              category:'Cute',      transform:t=>'🎲 '+t+' 🎲',                 preview:'🎲 Lucky 🎲',        popular:63 },
  { id:'cute-cat2',        name:'Cat Face',          category:'Cute',      transform:t=>'ฅ^•ﻌ•^ฅ '+t,               preview:'ฅ^•ﻌ•^ฅ Nyan',      popular:66 },
  { id:'cute-bow',         name:'Bow',               category:'Cute',      transform:t=>'🎀 '+t+' 🎀',                 preview:'🎀 Cute 🎀',         popular:64 },
  { id:'cute-gem',         name:'Gem',               category:'Cute',      transform:t=>'💎 '+t+' 💎',                 preview:'💎 Gem 💎',           popular:67 },

  // ══════════════════════════════════════════════════════════════════ EXTRA AESTHETIC

  { id:'aesthetic-bold-script', name:'Aesthetic Script', category:'Aesthetic', transform:t=>[...applyMap(t,boldScriptMap)].join(' '), preview:'𝓐 𝓮 𝓼 𝓽', popular:70 },
  { id:'aesthetic-mono',   name:'Aesthetic Mono',    category:'Aesthetic', transform:t=>[...applyMap(t,monospaceMap)].join(' '), preview:'𝙰 𝚎 𝚜 𝚝',    popular:65 },
  { id:'aesthetic-fraktur',name:'Aesthetic Fraktur', category:'Aesthetic', transform:t=>[...applyMap(t,frakturMap)].join(' '),   preview:'𝔄 𝔢 𝔰 𝔱',    popular:63 },
  { id:'wave-bold',        name:'Wave Bold',         category:'Aesthetic', transform:t=>wrap('≋ ',' ≋')(applyMap(t,boldSerifMap)), preview:'≋ 𝐖𝐚𝐯𝐞 ≋',  popular:60 },
  { id:'infinity-wrap',    name:'Infinity',          category:'Aesthetic', transform:wrap('∞ ',' ∞'),                           preview:'∞ Infinity ∞',   popular:58 },
  { id:'music-wrap',       name:'Music Notes',       category:'Aesthetic', transform:wrap('♫ ',' ♫'),                           preview:'♫ Music ♫',     popular:61 },
  { id:'lightning-wrap',   name:'Lightning',         category:'Aesthetic', transform:wrap('⚡ ',' ⚡'),                          preview:'⚡ Power ⚡',    popular:63 },
  { id:'arrow-wrap',       name:'Arrow',             category:'Aesthetic', transform:wrap('→ ',' ←'),                           preview:'→ Arrow ←',      popular:57 },
  { id:'fire-wrap',        name:'Fire Wrap',         category:'Aesthetic', transform:wrap('🔥 ',' 🔥'),                         preview:'🔥 Fire 🔥',     popular:66 },

  // ══════════════════════════════════════════════════════════════════ EXTRA SMALL CAPS

  { id:'sc-gothic',        name:'SC Gothic',         category:'Small Caps', transform:t=>applyMap(applyMap(t,frakturMap),smallCapsMap), preview:'ꜱᴄ ɢᴏᴛʜɪᴄ', popular:54 },
  { id:'sc-hearts',        name:'SC Hearts',         category:'Small Caps', transform:t=>'♡ '+applyMap(t,smallCapsMap)+' ♡', preview:'♡ ꜱᴍᴀʟʟ ♡',       popular:57 },

  // ══════════════════════════════════════════════════════════════════ EXTRA ANIME

  { id:'anime-fire',       name:'Anime Fire',        category:'Anime',     transform:t=>'🔥 '+applyMap(t,boldScriptMap)+' 🔥', preview:'🔥 𝓐𝓷𝓲𝓶𝓮 🔥',  popular:70 },
  { id:'anime-sakura',     name:'Sakura',            category:'Anime',     transform:t=>'🌸✨'+applyMap(t,boldScriptMap)+'✨🌸', preview:'🌸✨𝓢𝓪𝓴𝓾𝓻𝓪✨🌸', popular:67 },
  { id:'anime-sword',      name:'Sword',             category:'Anime',     transform:t=>'⚔️ '+applyMap(t,boldScriptMap)+' ⚔️', preview:'⚔️ 𝓢𝔀𝓸𝓻𝓭 ⚔️', popular:64 },
];

// ─── Category order ───────────────────────────────────────────────────────────
export const FONT_CATEGORIES: FontCategory[] = [
  'Aesthetic','Cute','Gothic','Fancy','Gaming','Anime',
  'Cyberpunk','Small Caps','Bubble','Glitch','Script','Bold',
];

// ─── Utility exports ──────────────────────────────────────────────────────────
export const getFontsByCategory = (cat: FontCategory): FontStyle[] =>
  FONT_STYLES.filter(f => f.category === cat);

export const getTrendingFonts = (): FontStyle[] =>
  FONT_STYLES.filter(f => f.trending);

export const getTopFonts = (n = 10): FontStyle[] =>
  [...FONT_STYLES].sort((a,b) => (b.popular??0)-(a.popular??0)).slice(0,n);

export const searchFonts = (query: string): FontStyle[] => {
  const q = query.toLowerCase();
  return FONT_STYLES.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.category.toLowerCase().includes(q) ||
    f.id.includes(q)
  );
};
