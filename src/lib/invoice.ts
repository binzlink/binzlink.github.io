import { localeMeta, type Locale } from './locales';

export const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.claudenovo.invoicemaker';
export const PACKAGE_ID = 'com.claudenovo.invoicemaker';
export const DEVELOPER_EMAIL = 'support@claudenovo.com';
export const ICON_SRC = '/invoice-maker/icon.png';
export const FEATURE_SRC = '/invoice-maker/feature.png';
export const SHOT_FILES = [
  '/invoice-maker/01-create-invoice.jpg',
  '/invoice-maker/02-share-pdf.jpg',
  '/invoice-maker/03-offline-no-account.jpg',
  '/invoice-maker/04-templates.jpg',
  '/invoice-maker/05-free-and-pro.jpg',
] as const;

export type InvoiceCopy = {
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
  plansLabel: string;
  plansTitle: string;
  plansLead: string;
  plans: { name: string; price: string; body: string }[];
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

const en: InvoiceCopy = {
  htmlLang: 'en',
  name: 'Invoice Maker',
  title: 'Invoice Maker — Create and share invoices. No account.',
  description:
    'Create and share professional invoices. Offline. USD & CAD. No account.',
  kicker: 'For contractors in the US and Canada',
  headline: 'Create and share invoices. No account.',
  lead: 'A professional invoice in about 30 seconds. Add a client, pick a saved service, set due terms, and share a PDF. Zelle, PayPal.me, ACH, or Interac e-Transfer print on the invoice. The app does not collect card payments.',
  cta: 'Get it on Google Play',
  ctaHint: 'Android · 30 PDF shares free each month',
  skip: 'Skip to content',
  stats: [
    { value: '30s', label: 'To a professional invoice' },
    { value: 'USD · CAD', label: 'On each invoice' },
    { value: 'Offline', label: 'Stays on your phone' },
    { value: '0', label: 'Account required' },
  ],
  shotsLabel: 'Look inside',
  shotsTitle: 'From draft to PDF on your phone.',
  shots: [
    { title: 'Create', caption: 'A professional invoice in about 30 seconds.' },
    { title: 'Share PDF', caption: 'Email, Messages, WhatsApp — get paid.' },
    { title: 'No account', caption: 'Works offline. No cloud login.' },
    { title: '3 layouts', caption: 'Classic, Minimal, or Modern.' },
    { title: 'Free and Pro', caption: '30 shares a month, or unlimited.' },
  ],
  howLabel: 'How it works',
  howTitle: 'Client, lines, PDF.',
  steps: [
    { n: '01', title: 'Add a client', body: 'Save them, or import from your contacts.' },
    { n: '02', title: 'Add the work', body: 'Reuse services. Tax label and rate are yours. Due on receipt, Net 15, Net 30, or a date.' },
    { n: '03', title: 'Share the PDF', body: 'Preview first. Then send. Mark Draft, Sent, Paid, or Overdue.' },
  ],
  extrasLabel: 'On the invoice',
  extrasTitle: 'What you can put on the page',
  extras: [
    { name: 'Auto numbers', body: 'INV-1001 and up, so you are not inventing codes.' },
    { name: 'USD or CAD', body: 'Pick the currency on each invoice.' },
    { name: 'Your tax label', body: 'Sales Tax, HST, or whatever you actually charge.' },
    { name: 'Logo and signature', body: 'Looks like your shop, not a template farm.' },
    { name: 'Payment notes', body: 'Zelle, PayPal.me, ACH, or Interac e-Transfer — printed, not processed.' },
    { name: 'Backup zip', body: 'Export and restore when you switch phones.' },
  ],
  plansLabel: 'Pricing',
  plansTitle: 'Same app. Pro only lifts the cap.',
  plansLead: 'You can share 30 invoices each month for free. Pro is $4.99/month for uncapped sharing. Cancel anytime.',
  plans: [
    { name: 'Free', price: '30 / month', body: 'Full features. Thirty PDF shares each month.' },
    { name: 'Pro', price: '$4.99 / month', body: 'Same features. No share cap. Cancel anytime.' },
  ],
  closeHeadline: 'Get paid faster.',
  closeLead: 'Invoice Maker is built for getting paid, not for bookkeeping. It does not file taxes, sync to the cloud, or process cards.',
  legal: 'Optional Pro subscription, $4.99/month. Cancel anytime. If Pro lapses, the free monthly cap applies again.',
  privacy: 'Privacy',
  privacyTitle: 'Privacy',
  privacyBody:
    'Invoice Maker does not require an account and does not sync invoices to our cloud. Invoices stay on your phone unless you share a PDF or export a backup yourself. The app does not collect card payments. Google Play billing is used only if you subscribe to Pro. This page is the privacy notice for the Android app (package com.claudenovo.invoicemaker).',
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
      q: 'Is Invoice Maker free?',
      a: 'Yes. You can share 30 invoices each month at no charge. Pro is $4.99/month to share without a cap. Same features either way.',
    },
    {
      q: 'Do I need an account?',
      a: 'No. There is no cloud login. Invoices stay on your phone. Export a zip backup whenever you want.',
    },
    {
      q: 'Does it take card payments?',
      a: 'No. It prints payment instructions — Zelle, PayPal.me, ACH, Interac e-Transfer. It does not process cards or file taxes.',
    },
    {
      q: 'Where is my data?',
      a: 'On the device. We do not sync invoices to our servers. See the privacy section on this page.',
    },
  ],
};

const zh: InvoiceCopy = {
  ...en,
  htmlLang: 'zh-CN',
  title: 'Invoice Maker — 开票、发 PDF。不用注册。',
  description: '专业发票，离线开、离线发。美元和加元。不用账号。',
  kicker: '面向美国、加拿大的独立承包商和小服务商',
  headline: '开票、发 PDF。不用注册。',
  lead: '大约 30 秒开出一张专业发票。加客户、选常用项目、设账期，然后发 PDF。Zelle、PayPal.me、ACH、Interac e-Transfer 会印在发票上。应用不代收银行卡。',
  cta: '在 Google Play 下载',
  ctaHint: 'Android · 每月免费分享 30 张 PDF',
  skip: '跳到正文',
  stats: [
    { value: '30秒', label: '开出专业发票' },
    { value: 'USD · CAD', label: '每张发票自选' },
    { value: '离线', label: '数据在你手机里' },
    { value: '0', label: '需要账号' },
  ],
  shotsLabel: '应用里长这样',
  shotsTitle: '从草稿到 PDF，都在手机上。',
  shots: [
    { title: '开票', caption: '大约 30 秒一张专业发票。' },
    { title: '发 PDF', caption: '邮件、短信、WhatsApp，发出去好收款。' },
    { title: '不用账号', caption: '离线能用。没有云登录。' },
    { title: '三种版式', caption: 'Classic、Minimal、Modern。' },
    { title: '免费和 Pro', caption: '每月 30 次，或订阅不限额。' },
  ],
  howLabel: '怎么用',
  howTitle: '客户、明细、PDF。',
  steps: [
    { n: '01', title: '加客户', body: '自己存，或从通讯录导入。' },
    { n: '02', title: '写工作内容', body: '常用项目可复用。税率和税种自己填。即付、Net 15、Net 30 或指定日期。' },
    { n: '03', title: '发 PDF', body: '先预览再发出。草稿、已发、已付、逾期自己标。' },
  ],
  extrasLabel: '发票上有什么',
  extrasTitle: '能印在纸上的东西',
  extras: [
    { name: '自动编号', body: '从 INV-1001 起，不用自己编号。' },
    { name: '美元或加元', body: '每张发票自己选币种。' },
    { name: '自己的税名', body: 'Sales Tax、HST，或你实际在收的那种。' },
    { name: 'Logo 和签名', body: '像你的店，不像模板站。' },
    { name: '收款说明', body: 'Zelle、PayPal.me、ACH、Interac 印上去，不代扣。' },
    { name: 'Zip 备份', body: '换机时导出、再导回。' },
  ],
  plansLabel: '价格',
  plansTitle: '功能一样。Pro 只是去掉上限。',
  plansLead: '每月可免费分享 30 张发票。Pro 每月 $4.99，分享不限额。随时取消。',
  plans: [
    { name: '免费', price: '30 张 / 月', body: '功能齐全。每月 30 次 PDF 分享。' },
    { name: 'Pro', price: '$4.99 / 月', body: '同样功能。分享不限额。随时取消。' },
  ],
  closeHeadline: '更快收到钱。',
  closeLead: 'Invoice Maker 为收款而做，不是记账软件。不报税、不同步云、不刷卡。',
  legal: '可选 Pro 订阅，每月 $4.99。随时取消。订阅失效后，恢复每月免费上限。',
  privacy: '隐私',
  privacyTitle: '隐私',
  privacyBody:
    'Invoice Maker 不用注册，发票不同步到我们的云。发票留在你的手机上，除非你自己分享 PDF 或导出备份。应用不代收银行卡。只有订阅 Pro 时才会走 Google Play 结算。本页是 Android 应用（包名 com.claudenovo.invoicemaker）的隐私说明。',
  developer: '深圳市深科纪元科技有限公司',
  langLabel: '语言',
  share: '分享',
  copyLink: '复制链接',
  copiedLink: '已复制',
  shareNative: '用系统分享',
  faqLabel: '常见问题',
  faqTitle: '下载前先看',
  faqs: [
    { q: '免费吗？', a: '免费。每月可分享 30 张发票。Pro 每月 $4.99，分享不限额。功能一样。' },
    { q: '要账号吗？', a: '不要。没有云登录。发票在手机里。随时可导出 zip 备份。' },
    { q: '能代收刷卡吗？', a: '不能。只把 Zelle、PayPal.me、ACH、Interac 说明印在发票上。不处理卡片，也不报税。' },
    { q: '数据在哪？', a: '在设备上。我们不同步发票到自己的服务器。详见本页隐私一节。' },
  ],
};

const packs: Partial<Record<Locale, InvoiceCopy>> = { en, zh };

export function invoice(locale: Locale): InvoiceCopy {
  const copy = packs[locale] ?? en;
  return { ...copy, htmlLang: localeMeta(locale).html };
}
