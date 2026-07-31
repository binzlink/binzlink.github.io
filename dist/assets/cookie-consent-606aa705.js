/**
 * Cookie consent + deferred Google Analytics.
 * - 居中弹层 + 遮罩，未接受前无法使用页面
 * - 接受后写入 localStorage 并注入 gtag
 */
;(() => {
  const GA_ID = 'G-MV5LGGJ7LH'
  const STORAGE_KEY = 'claudenovo-cookie-consent'
  const LOCALE_KEY = 'claudenovo-locale'

  const I18N = {
    en: {
      title: 'Cookie consent',
      message:
        'We use cookies for essential site functions and Google Analytics to improve ClaudeNovo. Please accept cookies to continue using the site.',
      accept: 'Accept and continue',
      privacy: 'Privacy policy',
    },
    zh: {
      title: 'Cookie 同意',
      message:
        '我们使用 Cookie 提供必要功能，并使用 Google Analytics 改进 ClaudeNovo。请接受 Cookie 后继续使用本网站。',
      accept: '接受并继续',
      privacy: '隐私政策',
    },
    ja: {
      title: 'Cookie の同意',
      message:
        '当サイトでは必須機能と、ClaudeNovo 改善のための Google Analytics に Cookie を使用します。続行するには Cookie に同意してください。',
      accept: '同意して続行',
      privacy: 'プライバシーポリシー',
    },
    ko: {
      title: '쿠키 동의',
      message:
        '필수 기능과 ClaudeNovo 개선을 위한 Google Analytics에 쿠키를 사용합니다. 사이트를 계속 사용하려면 쿠키에 동의해 주세요.',
      accept: '동의하고 계속',
      privacy: '개인정보 처리방침',
    },
    es: {
      title: 'Consentimiento de cookies',
      message:
        'Usamos cookies para funciones esenciales y Google Analytics para mejorar ClaudeNovo. Acepta las cookies para continuar usando el sitio.',
      accept: 'Aceptar y continuar',
      privacy: 'Política de privacidad',
    },
    fr: {
      title: 'Consentement aux cookies',
      message:
        'Nous utilisons des cookies pour les fonctions essentielles et Google Analytics afin d’améliorer ClaudeNovo. Veuillez accepter les cookies pour continuer.',
      accept: 'Accepter et continuer',
      privacy: 'Politique de confidentialité',
    },
    de: {
      title: 'Cookie-Einwilligung',
      message:
        'Wir verwenden Cookies für notwendige Funktionen und Google Analytics, um ClaudeNovo zu verbessern. Bitte akzeptieren Sie Cookies, um fortzufahren.',
      accept: 'Akzeptieren und fortfahren',
      privacy: 'Datenschutz',
    },
    pt: {
      title: 'Consentimento de cookies',
      message:
        'Usamos cookies para funções essenciais e Google Analytics para melhorar o ClaudeNovo. Aceite os cookies para continuar usando o site.',
      accept: 'Aceitar e continuar',
      privacy: 'Política de privacidade',
    },
    it: {
      title: 'Consenso cookie',
      message:
        'Usiamo cookie per funzioni essenziali e Google Analytics per migliorare ClaudeNovo. Accetta i cookie per continuare a usare il sito.',
      accept: 'Accetta e continua',
      privacy: 'Informativa sulla privacy',
    },
    ru: {
      title: 'Согласие на cookie',
      message:
        'Мы используем cookie для необходимых функций и Google Analytics для улучшения ClaudeNovo. Примите cookie, чтобы продолжить использование сайта.',
      accept: 'Принять и продолжить',
      privacy: 'Политика конфиденциальности',
    },
    vi: {
      title: 'Đồng ý cookie',
      message:
        'Chúng tôi dùng cookie cho chức năng thiết yếu và Google Analytics để cải thiện ClaudeNovo. Vui lòng chấp nhận cookie để tiếp tục sử dụng trang.',
      accept: 'Chấp nhận và tiếp tục',
      privacy: 'Chính sách quyền riêng tư',
    },
    id: {
      title: 'Persetujuan cookie',
      message:
        'Kami menggunakan cookie untuk fungsi penting dan Google Analytics untuk meningkatkan ClaudeNovo. Terima cookie untuk terus menggunakan situs.',
      accept: 'Terima dan lanjutkan',
      privacy: 'Kebijakan privasi',
    },
    th: {
      title: 'ความยินยอมคุกกี้',
      message:
        'เราใช้คุกกี้สำหรับฟังก์ชันที่จำเป็นและ Google Analytics เพื่อปรับปรุง ClaudeNovo กรุณายอมรับคุกกี้เพื่อใช้งานเว็บไซต์ต่อ',
      accept: 'ยอมรับและดำเนินการต่อ',
      privacy: 'นโยบายความเป็นส่วนตัว',
    },
    tr: {
      title: 'Çerez onayı',
      message:
        'Zorunlu işlevler ve ClaudeNovo’yu geliştirmek için Google Analytics kapsamında çerez kullanırız. Siteyi kullanmaya devam etmek için çerezleri kabul edin.',
      accept: 'Kabul et ve devam et',
      privacy: 'Gizlilik politikası',
    },
    nl: {
      title: 'Cookie-toestemming',
      message:
        'We gebruiken cookies voor essentiële functies en Google Analytics om ClaudeNovo te verbeteren. Accepteer cookies om de site te blijven gebruiken.',
      accept: 'Accepteren en doorgaan',
      privacy: 'Privacybeleid',
    },
    pl: {
      title: 'Zgoda na pliki cookie',
      message:
        'Używamy plików cookie do niezbędnych funkcji oraz Google Analytics, aby ulepszać ClaudeNovo. Zaakceptuj pliki cookie, aby kontynuować korzystanie z witryny.',
      accept: 'Akceptuję i kontynuuję',
      privacy: 'Polityka prywatności',
    },
    ar: {
      title: 'الموافقة على ملفات تعريف الارتباط',
      message:
        'نستخدم ملفات تعريف الارتباط للوظائف الأساسية وGoogle Analytics لتحسين ClaudeNovo. يرجى قبول ملفات تعريف الارتباط لمتابعة استخدام الموقع.',
      accept: 'قبول والمتابعة',
      privacy: 'سياسة الخصوصية',
    },
    hi: {
      title: 'कुकी सहमति',
      message:
        'हम आवश्यक सुविधाओं और ClaudeNovo सुधारने हेतु Google Analytics के लिए कुकीज़ का उपयोग करते हैं। साइट का उपयोग जारी रखने के लिए कृपया कुकीज़ स्वीकार करें।',
      accept: 'स्वीकार करें और जारी रखें',
      privacy: 'गोपनीयता नीति',
    },
  }

  function resolveLocale() {
    const lang = (document.documentElement.getAttribute('lang') || '').toLowerCase()
    const primary = lang.startsWith('zh') ? 'zh' : lang.split('-')[0]
    const path = typeof location !== 'undefined' ? location.pathname || '' : ''
    const isApp = /app\.html?$/i.test(path)

    if (!isApp && primary && I18N[primary]) return primary

    try {
      const stored = localStorage.getItem(LOCALE_KEY)
      if (stored && I18N[stored]) return stored
    } catch {
      /* ignore */
    }

    if (primary && I18N[primary]) return primary
    return 'en'
  }

  function readConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'accepted' ? 'accepted' : null
    } catch {
      return null
    }
  }

  function writeConsent() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      /* ignore */
    }
  }

  function loadAnalytics() {
    if (window.__CN_GA_LOADED__) return
    window.__CN_GA_LOADED__ = true
    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments)
      }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID)
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(s)
  }

  function injectStyles() {
    if (document.getElementById('cn-cookie-style')) return
    const style = document.createElement('style')
    style.id = 'cn-cookie-style'
    style.textContent = `
      body.cn-cookie-locked {
        overflow: hidden !important;
      }
      .cn-cookie-root {
        position: fixed;
        inset: 0;
        z-index: 100000;
        display: grid;
        place-items: center;
        padding: 1.25rem;
        font-family: Geist, Inter, system-ui, sans-serif;
      }
      .cn-cookie-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(6, 8, 14, 0.78);
        backdrop-filter: blur(8px);
      }
      .cn-cookie-modal {
        position: relative;
        z-index: 1;
        width: min(28rem, calc(100vw - 2rem));
        padding: 1.35rem 1.35rem 1.25rem;
        border-radius: 1rem;
        border: 1px solid rgba(255,255,255,0.12);
        background: linear-gradient(180deg, #242632 0%, #171922 100%);
        color: #e8e9ef;
        box-shadow: 0 28px 80px rgba(0,0,0,0.55);
      }
      .cn-cookie-modal h2 {
        margin: 0 0 0.65rem;
        font-size: 1.05rem;
        font-weight: 650;
        letter-spacing: -0.02em;
      }
      .cn-cookie-modal p {
        margin: 0 0 1.1rem;
        color: #c5c7d1;
        font-size: 0.9rem;
        line-height: 1.5;
      }
      .cn-cookie-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;
        align-items: center;
      }
      .cn-cookie-actions a {
        color: #a5b4fc;
        text-decoration: underline;
        text-underline-offset: 2px;
        margin-inline-end: auto;
        font-size: 0.8125rem;
      }
      .cn-cookie-btn {
        appearance: none;
        border: none;
        border-radius: 0.55rem;
        padding: 0.65rem 1.05rem;
        font: inherit;
        font-size: 0.875rem;
        font-weight: 650;
        cursor: pointer;
        background: #6366f1;
        color: #fff;
      }
      .cn-cookie-btn:hover { background: #818cf8; }
      @media (max-width: 480px) {
        .cn-cookie-actions { flex-direction: column; align-items: stretch; }
        .cn-cookie-actions a { margin: 0 0 0.15rem; }
        .cn-cookie-btn { width: 100%; }
      }
    `
    document.head.appendChild(style)
  }

  function unlock() {
    document.body.classList.remove('cn-cookie-locked')
  }

  function showModal(t) {
    injectStyles()
    document.body.classList.add('cn-cookie-locked')

    const root = document.createElement('div')
    root.className = 'cn-cookie-root'
    root.setAttribute('role', 'dialog')
    root.setAttribute('aria-modal', 'true')
    root.setAttribute('aria-labelledby', 'cn-cookie-title')

    const backdrop = document.createElement('div')
    backdrop.className = 'cn-cookie-backdrop'
    backdrop.setAttribute('aria-hidden', 'true')

    const modal = document.createElement('div')
    modal.className = 'cn-cookie-modal'

    const title = document.createElement('h2')
    title.id = 'cn-cookie-title'
    title.textContent = t.title

    const p = document.createElement('p')
    p.textContent = t.message

    const actions = document.createElement('div')
    actions.className = 'cn-cookie-actions'

    const privacy = document.createElement('a')
    privacy.href = '/privacy-policy.html'
    privacy.target = '_blank'
    privacy.rel = 'noopener noreferrer'
    privacy.textContent = t.privacy

    const accept = document.createElement('button')
    accept.type = 'button'
    accept.className = 'cn-cookie-btn'
    accept.textContent = t.accept

    accept.addEventListener('click', () => {
      writeConsent()
      loadAnalytics()
      unlock()
      root.remove()
    })

    actions.append(privacy, accept)
    modal.append(title, p, actions)
    root.append(backdrop, modal)
    document.body.appendChild(root)
    accept.focus()
  }

  function init() {
    if (readConsent() === 'accepted') {
      loadAnalytics()
      return
    }
    const locale = resolveLocale()
    showModal(I18N[locale] || I18N.en)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
