import { localeMeta, type Locale } from './locales';

export const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.claudenovo.photostitch';
export const PACKAGE_ID = 'com.claudenovo.photostitch';
export const DEVELOPER_EMAIL = 'support@claudenovo.com';
export const ICON_SRC = '/picom/icon.png';

/** Play Console phone shots, listing order. */
const SHOT_NAMES = ['02-hero', '04-layouts', '08-decorate', '05-crop'] as const;

const STORE_LOCALE: Partial<Record<Locale, string>> = {
  en: 'en',
  zh: 'zh-CN',
  ja: 'ja',
};

export function storeFolder(locale: Locale): string {
  return STORE_LOCALE[locale] ?? 'en';
}

export function featureSrc(locale: Locale = 'en'): string {
  return `/picom/store/${storeFolder(locale)}/feature.jpg`;
}

export function shotFiles(locale: Locale = 'en'): string[] {
  const folder = storeFolder(locale);
  return SHOT_NAMES.map((name) => `/picom/store/${folder}/${name}.jpg`);
}

/** Default (English) paths for meta fallbacks. */
export const FEATURE_SRC = featureSrc('en');
export const SHOT_FILES = shotFiles('en');

export type PicomCopy = {
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
  privacyPolicy: string;
  faqs: { q: string; a: string }[];
};

const en: PicomCopy = {
  htmlLang: 'en',
  name: 'Picom',
  title: 'Picom Collage — Pick a few photos. Make one story.',
  description: 'Pick a few photos. Make one story. Layouts, scrapbook, on-device cutout.',
  kicker: 'Photo collage',
  headline: 'Pick a few. Make one.',
  lead: 'Turn scattered moments into one story. Start from a layout, or drop photos like a scrapbook. Background removal runs on your phone — originals stay on the device.',
  cta: 'Get it on Google Play',
  ctaHint: 'Android · free · ads & optional in-app purchases',
  skip: 'Skip to content',
  stats: [
    { value: 'One frame', label: 'Not a nine-grid dump' },
    { value: 'Layouts', label: 'Or freestyle scrapbook' },
    { value: 'On-device', label: 'Cutouts stay local' },
    { value: 'Export', label: 'Save or share' },
  ],
  shotsLabel: 'Looks inside',
  shotsTitle: 'One complete frame — not a nine-grid.',
  shots: [
    { title: 'One story', caption: 'Pick a few photos. Make one frame you want to send.' },
    { title: 'Layouts', caption: 'Grid, split, irregular — or place freely like a journal.' },
    { title: 'Decorate', caption: 'Borders, filters, stickers, type, and doodles.' },
    { title: 'Crop', caption: 'Crop first when you only need one shot.' },
  ],
  howLabel: 'How it works',
  howTitle: 'Pick. Arrange. Send.',
  steps: [
    { n: '01', title: 'Pick a few', body: 'Grab photos from your gallery — trip, group, shop, or journal.' },
    { n: '02', title: 'Arrange', body: 'Use a layout for speed, or drop them freely. Crop, border, filter, sticker, type, doodle.' },
    { n: '03', title: 'Send', body: 'Save to the system album, or share. Cutouts never leave your phone.' },
  ],
  extrasLabel: 'Also in Picom',
  extrasTitle: 'Borders, type, stickers, cutouts',
  extras: [
    { name: 'Layouts', body: 'Grid, split, irregular, and shapes that match how many photos you pick.' },
    { name: 'Freestyle', body: 'Place freely like a scrapbook or journal page.' },
    { name: 'On-device cutout', body: 'Background removal runs on your phone. Originals stay off the cloud.' },
    { name: 'Filters & borders', body: 'Finish the frame before you export.' },
    { name: 'Stickers & doodles', body: 'Personal marks on top of the collage.' },
    { name: 'Text', body: 'Captions and titles without leaving the canvas.' },
    { name: 'Light / dark', body: 'Theme that follows how you edit.' },
    { name: 'Languages', body: 'Multiple languages for the people you send to.' },
  ],
  closeHeadline: 'Turn scattered moments into one story.',
  closeLead: 'For trip recaps, group photos, journal pages, and shop posters: one complete frame.',
  legal: 'Contains ads and optional in-app purchases. Rated Everyone.',
  privacy: 'Privacy',
  privacyTitle: 'Privacy',
  privacyBody:
    'Background removal and collage exports stay on your device. Originals are not uploaded to our cloud for cutouts. Google Play lists no data collected and no data shared with third parties for this app. This page is the privacy notice for the Android app (package com.claudenovo.photostitch).',
  developer: 'Shenzhen Shenke Jiyuan Technology Co., Ltd.',
  studio: 'ClaudeNovo',
  langLabel: 'Language',
  share: 'Share',
  copyLink: 'Copy link',
  copiedLink: 'Copied',
  shareNative: 'Share via device',
  faqLabel: 'FAQ',
  faqTitle: 'Before you install',
  privacyPolicy: 'Privacy Policy',
  faqs: [
    {
      q: 'Is Picom free?',
      a: 'Yes. It is free on Google Play, with ads and optional in-app purchases. You can make and export collages without buying anything first.',
    },
    {
      q: 'Do my photos leave the phone for cutouts?',
      a: 'No. Background removal runs on-device. Originals stay off the cloud for that step.',
    },
    {
      q: 'Layout or freestyle?',
      a: 'Both. Use a layout when you want speed. Place freely when you want a scrapbook page.',
    },
    {
      q: 'What can I export?',
      a: 'Save to the system album, or share through the usual Android share sheet.',
    },
  ],
};

const zh: PicomCopy = {
  ...en,
  htmlLang: 'zh-CN',
  title: 'Picom — 选几张，拼成一张故事。',
  description: '选几张照片，做成一张故事。模板拼贴、自由手帐、一键去背景，全在设备端完成。',
  kicker: '照片拼贴',
  headline: '选几张，拼成一张',
  lead: '把散落的瞬间，拼成一张故事。套模板，或像手帐一样随手摆。去背景在你手机上完成，不必把原图传到云端。',
  cta: '在 Google Play 下载',
  ctaHint: 'Android · 免费 · 含广告与可选内购',
  skip: '跳到正文',
  stats: [
    { value: '一张就够', label: '不是九格凑合' },
    { value: '模板', label: '或手帐自由摆' },
    { value: '本机', label: '抠图留在手机' },
    { value: '导出', label: '保存或分享' },
  ],
  shotsLabel: '里面长这样',
  shotsTitle: '一张完整画面——不是九宫格堆砌。',
  shots: [
    { title: '一张故事', caption: '选几张图，拼成你想发出去的那一张。' },
    { title: '布局', caption: '要快用模板；要个性就自由摆。' },
    { title: '点缀', caption: '边框、滤镜、贴纸、文字、涂鸦。' },
    { title: '裁切', caption: '只需要一格时，先裁出想要的画面。' },
  ],
  howLabel: '怎么用',
  howTitle: '选图。摆好。发出去。',
  steps: [
    { n: '01', title: '选几张', body: '从相册挑旅行、合照、店招或手账素材。' },
    { n: '02', title: '摆好', body: '要快用布局，要个性就自由摆。裁切、边框、滤镜、贴纸、文字、涂鸦都行。' },
    { n: '03', title: '发出去', body: '存进系统相册，或直接分享。抠图不会离开你的手机。' },
  ],
  extrasLabel: 'Picom 里还有',
  extrasTitle: '边框、文字、贴纸、抠图',
  extras: [
    { name: '布局', body: '宫格、分割、不规则与异形，跟着你选的张数走。' },
    { name: '自由摆', body: '像手账页一样随意放置。' },
    { name: '本机抠图', body: '抠图在手机上跑。原图不上云。' },
    { name: '滤镜与边框', body: '导出前把画面收干净。' },
    { name: '贴纸与涂鸦', body: '在拼贴上留下你的记号。' },
    { name: '文字', body: '标题和说明不用离开画布。' },
    { name: '浅色 / 深色', body: '编辑时跟着主题走。' },
    { name: '多语言', body: '发给谁都能读得懂界面。' },
  ],
  closeHeadline: '把散落的瞬间，拼成一张故事。',
  closeLead: '旅行收尾、聚会合影、手帐一页、店铺海报：发出去的是一张完整画面。',
  legal: '含广告与可选内购。适合全年龄。',
  privacy: '隐私',
  privacyTitle: '隐私',
  privacyBody:
    '抠图与拼贴导出都在设备上完成。抠图步骤不会把原图上传到我们的云。Google Play 上本应用申报为不收集数据、不与第三方共享数据。本页是 Android 应用（包名 com.claudenovo.photostitch）的隐私说明。',
  developer: '深圳市深科纪元科技有限公司',
  langLabel: '语言',
  share: '分享',
  copyLink: '复制链接',
  copiedLink: '已复制',
  shareNative: '用系统分享',
  faqLabel: '常见问题',
  faqTitle: '下载前先看',
  privacyPolicy: '隐私政策',
  faqs: [
    { q: 'Picom 免费吗？', a: '免费。Google Play 可下，含广告和可选内购。做拼贴、导出不必先付费。' },
    { q: '抠图会把照片传走吗？', a: '不会。抠图在本机跑。这一步原图不上云。' },
    { q: '布局还是自由摆？', a: '都有。要快用布局，要手账感就自由摆。' },
    { q: '能怎么导出？', a: '存进系统相册，或走 Android 系统分享。' },
  ],
};

const ja: PicomCopy = {
  ...en,
  htmlLang: 'ja',
  title: 'Picom コラージュ — 何枚か選んで、1枚に。',
  description: '写真を選んで、1枚の物語に。テンプレート、フリー配置、端末内の切り抜き。',
  kicker: 'フォトコラージュ',
  headline: '何枚か選んで、1枚に。',
  lead: '散らばった瞬間を、ひとつの物語に。テンプレートか、手帳のように置くか。切り抜きは端末内で — 原画はクラウドに上げません。',
  cta: 'Google Play で入手',
  ctaHint: 'Android · 無料 · 広告と任意のアプリ内購入',
  skip: '本文へ',
  stats: [
    { value: '1枚で', label: '九分割の羅列ではない' },
    { value: 'レイアウト', label: 'または自由配置' },
    { value: '端末内', label: '切り抜きはローカル' },
    { value: '書き出し', label: '保存または共有' },
  ],
  shotsLabel: '中を見る',
  shotsTitle: 'ひとつの完成フレーム — 九分割ではない。',
  shots: [
    { title: 'ひとつの物語', caption: '数枚選んで、送りたくなる1枚に。' },
    { title: 'レイアウト', caption: '速さならテンプレート。個性なら自由配置。' },
    { title: '飾る', caption: '枠、フィルタ、スタンプ、文字、落書き。' },
    { title: '切り抜き', caption: '1枚だけでいいときは、先にトリミング。' },
  ],
  howLabel: '使い方',
  howTitle: '選ぶ。並べる。送る。',
  steps: [
    { n: '01', title: '数枚選ぶ', body: '旅・集合・店舗・日記の写真をギャラリーから。' },
    { n: '02', title: '並べる', body: '速さならレイアウト。個性なら自由配置。枠・フィルタ・スタンプ・文字・落書き。' },
    { n: '03', title: '送る', body: 'アルバムに保存するか共有。切り抜きは端末を出ない。' },
  ],
  extrasLabel: 'ほかにも',
  extrasTitle: '枠、文字、スタンプ、切り抜き',
  extras: [
    { name: 'レイアウト', body: '枚数に合うグリッド、分割、異形。' },
    { name: 'フリースタイル', body: 'スクラップや手帳のように置く。' },
    { name: '端末内切り抜き', body: '背景除去は端末内。原画はクラウドに上げない。' },
    { name: 'フィルタと枠', body: '書き出す前に仕上げる。' },
    { name: 'スタンプと落書き', body: 'コラージュに自分の印を。' },
    { name: 'テキスト', body: 'キャプションもキャンバス内で。' },
    { name: 'ライト / ダーク', body: '編集の雰囲気に合わせる。' },
    { name: '多言語', body: '送る相手向けに複数言語。' },
  ],
  closeHeadline: '散らばった瞬間を、ひとつの物語に。',
  closeLead: '旅の振り返り、集合写真、日記、店舗ポスター向け。ひとつの完成フレーム。',
  legal: '広告と任意のアプリ内購入あり。全年齢対象。',
  privacy: 'プライバシー',
  privacyTitle: 'プライバシー',
  privacyBody:
    '切り抜きとコラージュ書き出しは端末内。切り抜きのために原画を当社クラウドへ上げません。Google Play では本アプリはデータ収集なし・第三者共有なしと申告されています。本ページは Android アプリ（com.claudenovo.photostitch）のプライバシー告知です。',
  langLabel: '言語',
  share: 'シェア',
  copyLink: 'リンクをコピー',
  copiedLink: 'コピーしました',
  shareNative: '端末で共有',
  faqLabel: 'FAQ',
  faqTitle: 'インストールの前に',
  privacyPolicy: 'プライバシーポリシー',
  faqs: [
    { q: '無料ですか？', a: 'はい。Google Play で無料。広告と任意課金。コラージュ作成と書き出しに購入は不要です。' },
    { q: '切り抜きで写真は端末外へ？', a: 'いいえ。背景除去は端末内。その工程でクラウドに上げません。' },
    { q: 'レイアウトとフリー？', a: '両方。速さはレイアウト、手帳感は自由配置。' },
    { q: '書き出しは？', a: 'システムアルバムへ保存、または Android の共有シート。' },
  ],
};

const packs: Partial<Record<Locale, PicomCopy>> = { en, zh, ja };

export function picom(locale: Locale): PicomCopy {
  const copy = packs[locale] ?? en;
  return { ...copy, htmlLang: localeMeta(locale).html };
}
