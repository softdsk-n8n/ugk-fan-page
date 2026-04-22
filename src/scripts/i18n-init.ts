import type { Lang } from '../i18n';
import { t } from '../i18n';

function applyLang(lang: Lang): void {
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key || !t[lang][key]) return;
    const val = t[lang][key];
    // Handle \n in translations (e.g. hero.title)
    if (val.includes('\n')) {
      el.innerHTML = val.replace(/\n/g, '<br/>');
    } else {
      el.textContent = val;
    }
  });

  // Update alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (!key || !t[lang][key]) return;
    const suffix = el.getAttribute('data-i18n-alt-suffix') || '';
    el.setAttribute('alt', t[lang][key] + suffix);
  });

  // Update glitch data-text
  const glitchEl = document.querySelector('.glitch');
  if (glitchEl) {
    const heroTitleKey = 'hero.title';
    if (t[lang][heroTitleKey]) {
      const plain = t[lang][heroTitleKey].replace(/\n/g, ' ');
      glitchEl.setAttribute('data-text', plain);
    }
  }

  // Update lang toggle button text
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
  }

  // Update document lang
  document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';

  // Update page title
  const titleKey = 'meta.title';
  if (t[lang][titleKey]) {
    document.title = t[lang][titleKey];
  }

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  const descKey = 'meta.description';
  if (metaDesc && t[lang][descKey]) {
    metaDesc.setAttribute('content', t[lang][descKey]);
  }

  // Update OG meta
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && t[lang][titleKey]) ogTitle.setAttribute('content', t[lang][titleKey]);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && t[lang][descKey]) ogDesc.setAttribute('content', t[lang][descKey]);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle && t[lang][titleKey]) twTitle.setAttribute('content', t[lang][titleKey]);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && t[lang][descKey]) twDesc.setAttribute('content', t[lang][descKey]);

  // Save preference
  localStorage.setItem('ugk-lang', lang);
}

function initI18n(): void {
  const saved = localStorage.getItem('ugk-lang') as Lang | null;
  const lang: Lang = (saved === 'en' || saved === 'ru') ? saved : 'ru';

  // Apply on load
  applyLang(lang);

  // Toggle handler
  const langBtn = document.getElementById('lang-toggle');
  langBtn?.addEventListener('click', () => {
    const current = localStorage.getItem('ugk-lang') as Lang || 'ru';
    const next: Lang = current === 'ru' ? 'en' : 'ru';
    applyLang(next);
  });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
