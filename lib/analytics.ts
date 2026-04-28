declare global {
  interface Window {
    ym: (id: number, action: string, ...args: unknown[]) => void;
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const YM_ID = 103260290;
const GA_ID = 'G-2CDHZ16V7W';

export function trackPageView() {
  const url = window.location.pathname + window.location.search;
  const title = document.title;
  const referrer = document.referrer;

  if (typeof window.ym === 'function') {
    window.ym(YM_ID, 'hit', url, { title, referrer });
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: window.location.href,
    });
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window.ym === 'function') {
    window.ym(YM_ID, 'reachGoal', eventName, params);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function setUserId(userId: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_ID, { user_id: userId });
  }

  if (typeof window.ym === 'function') {
    window.ym(YM_ID, 'setUserID', userId);
  }
}
