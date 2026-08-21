import { localeMeta, type Locale } from './locales';

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=ai.ai111.cardmem';
export const PACKAGE_ID = 'ai.ai111.cardmem';
export const DEVELOPER_EMAIL = 'zhoubin@claudenovo.com';
export const ICON_SRC = '/cardmem/play_icon_512.png';
export const FEATURE_SRC = '/cardmem/play_feature_1024x500.jpg';
export const SHOT_FILES = [
  '/cardmem/shot_01.jpg',
  '/cardmem/shot_02.jpg',
  '/cardmem/shot_03.jpg',
  '/cardmem/shot_04.jpg',
  '/cardmem/shot_05.jpg',
  '/cardmem/shot_06.jpg',
] as const;

export type MemcardCopy = {
  htmlLang: string;
  name: string;
  title: string;
  description: string;
  kicker: string;
  headline: string;
  lead: string;
  cta: string;
  ctaHint: string;
  skip: string;
  stats: { value: string; label: string }[];
  shotsLabel: string;
  shotsTitle: string;
  shots: { title: string; caption: string }[];
  howLabel: string;
  howTitle: string;
  steps: { n: string; title: string; body: string }[];
  extrasLabel: string;
  extrasTitle: string;
  extras: { name: string; body: string }[];
  closeHeadline: string;
  closeLead: string;
  legal: string;
  privacy: string;
  privacyTitle: string;
  privacyBody: string;
  developer: string;
  studio: string;
  langLabel: string;
  share: string;
  copyLink: string;
  copiedLink: string;
  shareNative: string;
  faqLabel: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
};

const en: MemcardCopy = {
  htmlLang: 'en',
  name: 'CardMem',
  title: 'CardMem: Memory Card Game',
  description: 'Flip cute cards, match pairs, have fun. 16 levels and a gift every day!',
  kicker: 'Memory card game',
  headline: 'Flip. Match. Smile.',
  lead: 'Look at the cards, remember where they are, then flip to match every pair before time runs out. Start with 4 cards. Finish with 64.',
  cta: 'Get it on Google Play',
  ctaHint: 'Android · free to play',
  skip: 'Skip to content',
  stats: [
    { value: '16', label: 'Cute levels' },
    { value: '4–64', label: 'Cards on the board' },
    { value: 'Daily', label: 'Login gift' },
    { value: 'Offline', label: 'No account to start' },
  ],
  shotsLabel: 'Look inside',
  shotsTitle: 'Cute cards. Fast fun.',
  shots: [
    { title: 'Flip & match', caption: 'Cute cards. Fast fun.' },
    { title: '16 fun levels', caption: 'From 4 cards to 64.' },
    { title: 'Look first', caption: 'Then find the pairs.' },
    { title: 'Daily gifts', caption: 'A reward every day.' },
    { title: 'Play & win', caption: 'Climb the leaderboard.' },
    { title: 'Cute skins', caption: 'Collect pretty card backs.' },
  ],
  howLabel: 'How to play',
  howTitle: 'Watch. Then match. Beat the clock.',
  steps: [
    { n: '01', title: 'Look', body: 'Watch the cards during the memory phase.' },
    { n: '02', title: 'Flip', body: 'They turn face-down — now it is your turn.' },
    { n: '03', title: 'Match', body: 'Find every pair before the timer hits zero.' },
  ],
  extrasLabel: 'Also in the game',
  extrasTitle: 'Gifts, skins, a little competition',
  extras: [
    { name: 'Daily gifts', body: 'Short rounds, instant restarts, a gift waiting each day.' },
    { name: 'Leaderboards', body: 'See how you stack up worldwide.' },
    { name: 'Achievements', body: 'Google Play Games sign-in, if you want it.' },
    { name: 'Coin rewards', body: 'Play, collect, spend on looks.' },
    { name: 'Card skins', body: 'Unlock cute backs as you go.' },
    { name: 'Hints & time', body: 'A nudge or extra seconds when a board is tight.' },
    { name: 'Offline', body: 'No account required to start. Play on a break.' },
  ],
  closeHeadline: 'How far can you go?',
  closeLead: 'Download CardMem and see how many pairs you can remember.',
  legal: 'Contains ads and optional in-app purchases. Rated Everyone.',
  privacy: 'Privacy',
  privacyTitle: 'Privacy',
  privacyBody:
    'CardMem does not collect personal data and does not share data with third parties. You can play offline, with no account required to start. This page is the privacy notice for the Android app (package ai.ai111.cardmem).',
  developer: 'Shenzhen Shenke Jiyuan Technology Co., Ltd.',
  studio: 'ClaudeNovo',
  langLabel: 'Language',
  share: 'Share',
  copyLink: 'Copy link',
  copiedLink: 'Copied',
  shareNative: 'Share via device',
  faqLabel: 'FAQ',
  faqTitle: 'Before you install',
  faqs: [
    {
      q: 'Is CardMem free?',
      a: 'Yes. It is free on Google Play, with ads and optional in-app purchases. You do not need to buy anything to play the 16 levels.',
    },
    {
      q: 'Do I need the internet?',
      a: 'No. You can play offline. Google Play Games is optional for achievements and leaderboards.',
    },
    {
      q: 'How do you play?',
      a: 'Watch the cards first. They flip face-down. Match every pair before the timer runs out. Later levels add more cards, up to 64.',
    },
    {
      q: 'What data does the app collect?',
      a: 'None declared. No data shared with third parties. See the privacy section on this page.',
    },
  ],
};

const zh: MemcardCopy = {
  ...en,
  htmlLang: 'zh-CN',
  title: 'CardMem：记忆翻牌游戏',
  description: '翻开萌卡，配对就过关。16关好好玩，每天还有礼物！',
  kicker: '记忆翻牌',
  headline: '翻开。配对。开心。',
  lead: '先观察卡牌位置，倒计时结束后全部翻面，在时间耗尽前配对成功即可过关。第 1 关 4 张牌，最终关 64 张。',
  cta: '在 Google Play 下载',
  ctaHint: 'Android · 免费游玩',
  skip: '跳到正文',
  stats: [
    { value: '16', label: '精心调过的关卡' },
    { value: '4–64', label: '牌面张数' },
    { value: '每天', label: '登录礼物' },
    { value: '离线', label: '不用先注册' },
  ],
  shotsLabel: '游戏里长这样',
  shotsTitle: '萌卡，过关，开心。',
  shots: [
    { title: '翻开配对', caption: '萌卡，节奏快，好玩。' },
    { title: '16 关', caption: '从 4 张到 64 张。' },
    { title: '先看一眼', caption: '再凭记忆找对子。' },
    { title: '每日礼物', caption: '每天打开都有奖励。' },
    { title: '玩就有名次', caption: '冲一冲排行榜。' },
    { title: '可爱卡背', caption: '收集好看的皮肤。' },
  ],
  howLabel: '怎么玩',
  howTitle: '先记住，再翻开，限时找出所有配对。',
  steps: [
    { n: '01', title: '看', body: '观察阶段：快速记住每张牌的位置。' },
    { n: '02', title: '翻', body: '倒计时结束，牌全部翻面，轮到你了。' },
    { n: '03', title: '配', body: '在时间耗尽前清完所有对子。' },
  ],
  extrasLabel: '游戏里还有',
  extrasTitle: '礼物、卡背、排行榜',
  extras: [
    { name: '每日礼物', body: '一局很短，失败立刻重来。每天都有礼物。' },
    { name: '全球排行榜', body: '看看你能排到哪。' },
    { name: '成就', body: '可选用 Google Play 游戏登录。' },
    { name: '金币', body: '玩就有金币，拿去换外观。' },
    { name: '卡背皮肤', body: '边玩边解锁可爱卡背。' },
    { name: '提示和加时', body: '卡住时给一点提示，或多几秒。' },
    { name: '离线', body: '不用先注册。碎片时间就能开一局。' },
  ],
  closeHeadline: '你的记忆能走多远？',
  closeLead: '下载 CardMem，看看你能记住多少对。',
  legal: '含广告与可选内购。适合全年龄。',
  privacy: '隐私',
  privacyTitle: '隐私',
  privacyBody:
    'CardMem 不收集个人数据，也不与第三方共享数据。可离线开玩，不用先注册。本页是 Android 应用（包名 ai.ai111.cardmem）的隐私说明。',
  developer: '深圳市深科纪元科技有限公司',
  langLabel: '语言',
  share: '分享',
  copyLink: '复制链接',
  copiedLink: '已复制',
  shareNative: '用系统分享',
  faqLabel: '常见问题',
  faqTitle: '下载前先看',
  faqs: [
    { q: 'CardMem 免费吗？', a: '免费。Google Play 可下载，含广告和可选内购。打 16 关不必付费。' },
    { q: '要联网吗？', a: '不用。可离线玩。成就和排行榜才需要 Google Play 游戏。' },
    { q: '怎么玩？', a: '先观察卡牌，翻面后凭记忆配对，在倒计时结束前清完。后面关卡牌会变多，最多 64 张。' },
    { q: '应用会收集什么数据？', a: '不收集，也不与第三方共享。详见本页隐私一节。' },
  ],
};

const ja: MemcardCopy = {
  ...en,
  htmlLang: 'ja',
  title: 'CardMem：記憶カードゲーム',
  description: 'かわいいカードをめくってペアを揃える。16ステージ、毎日ギフト。',
  kicker: '神経衰弱',
  headline: 'めくる。揃える。笑う。',
  lead: '位置を覚えてから裏返す。制限時間内にすべてのペアを揃える。最初は4枚、最後は64枚。',
  cta: 'Google Play で入手',
  ctaHint: 'Android · 無料',
  skip: '本文へ',
  stats: [
    { value: '16', label: 'ステージ' },
    { value: '4–64', label: 'カード枚数' },
    { value: '毎日', label: 'ログインギフト' },
    { value: 'オフライン', label: '登録なしで開始' },
  ],
  shotsLabel: '中を見る',
  shotsTitle: 'かわいいカード。短い一局。',
  shots: [
    { title: 'めくって揃える', caption: 'かわいくて速い。' },
    { title: '16ステージ', caption: '4枚から64枚まで。' },
    { title: '先に見る', caption: 'それからペアを探す。' },
    { title: 'デイリーギフト', caption: '毎日ごほうび。' },
    { title: '遊んで勝つ', caption: 'ランキングを登る。' },
    { title: 'かわいい裏面', caption: 'スキンを集める。' },
  ],
  howLabel: '遊び方',
  howTitle: '見て、揃えて、時計に勝つ。',
  steps: [
    { n: '01', title: '見る', body: '記憶フェーズで位置を覚える。' },
    { n: '02', title: '裏返す', body: '全部裏向き。あなたの番。' },
    { n: '03', title: '揃える', body: 'ゼロになる前にすべてのペアを。' },
  ],
  extrasLabel: 'そのほか',
  extrasTitle: 'ギフト、スキン、少しの競争',
  extras: [
    { name: 'デイリーギフト', body: '短いラウンド。毎日戻ると贈り物。' },
    { name: 'ランキング', body: '世界の順位を見る。' },
    { name: '実績', body: 'Google Play ゲームは任意。' },
    { name: 'コイン', body: '遊んで集めて見た目に使う。' },
    { name: '裏面スキン', body: '進行でかわいい裏面を解除。' },
    { name: 'ヒントと延長', body: '詰まったらヒント、または数秒追加。' },
    { name: 'オフライン', body: '登録なしで開始。休憩に一局。' },
  ],
  closeHeadline: 'どこまで覚えられる？',
  closeLead: 'CardMem を入れて、いくつ揃えられるか試す。',
  legal: '広告と任意のアプリ内購入あり。全年齢対象。',
  privacy: 'プライバシー',
  privacyTitle: 'プライバシー',
  privacyBody:
    'CardMem は個人データを収集せず、第三者と共有しません。オフラインで遊べ、開始にアカウントは不要です。本ページは Android アプリ（ai.ai111.cardmem）のプライバシー告知です。',
  langLabel: '言語',
  share: 'シェア',
  copyLink: 'リンクをコピー',
  copiedLink: 'コピーしました',
  shareNative: '端末で共有',
  faqLabel: 'FAQ',
  faqTitle: 'インストールの前に',
  faqs: [
    { q: '無料ですか？', a: 'はい。Google Play で無料。広告と任意課金。16ステージに購入は不要です。' },
    { q: '通信は必要？', a: '不要です。オフラインで遊べます。実績とランキングは Google Play ゲームが任意。' },
    { q: 'どう遊ぶ？', a: '先に位置を見る。裏返したら制限時間内にペアを揃える。後半は最大64枚。' },
    { q: 'データは？', a: '収集しません。第三者とも共有しません。本ページのプライバシーを参照。' },
  ],
};

const packs: Partial<Record<Locale, MemcardCopy>> = { en, zh, ja };

export function memcard(locale: Locale): MemcardCopy {
  const copy = packs[locale] ?? en;
  return { ...copy, htmlLang: localeMeta(locale).html };
}
