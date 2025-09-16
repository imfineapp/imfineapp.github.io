/**
 * Utility functions for managing icons and favicons
 */

export interface IconFile {
  path: string;
  exists: boolean;
  lastModified?: number;
}

export const ICON_FILES = [
  '/favicon.ico',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/favicon-96x96.png',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
  '/site.webmanifest',
] as const;

/**
 * Check if an icon file exists by attempting to fetch it
 */
export async function checkIconExists(iconPath: string): Promise<boolean> {
  try {
    const response = await fetch(iconPath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get icon URL with cache busting parameter
 */
export function getIconUrl(iconPath: string, cacheBust: boolean = true): string {
  if (!cacheBust) return iconPath;
  
  const timestamp = Date.now();
  const separator = iconPath.includes('?') ? '&' : '?';
  return `${iconPath}${separator}v=${timestamp}`;
}

/**
 * Check all icon files existence
 */
export async function checkAllIcons(): Promise<IconFile[]> {
  const results = await Promise.all(
    ICON_FILES.map(async (path) => ({
      path,
      exists: await checkIconExists(path),
      lastModified: Date.now(),
    }))
  );
  
  return results;
}

/**
 * Update favicon links in document head with cache busting
 */
export function updateFaviconLinks(cacheBust: boolean = false): void {
  const head = document.head;
  
  // Remove existing favicon links
  const existingLinks = head.querySelectorAll('link[rel*="icon"], link[rel="manifest"]');
  existingLinks.forEach(link => link.remove());
  
  // Add updated favicon links
  const faviconLinks = [
    { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'icon', href: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ];
  
  faviconLinks.forEach(({ rel, href, sizes, type }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = getIconUrl(href, cacheBust);
    if (sizes) link.setAttribute('sizes', sizes);
    if (type) link.type = type;
    head.appendChild(link);
  });
}

/**
 * Monitor for changes in icon files and update accordingly
 */
export function startIconMonitoring(intervalMs: number = 60000): () => void {
  const lastCheck: { [key: string]: boolean } = {};
  
  const checkForChanges = async () => {
    const currentIcons = await checkAllIcons();
    
    for (const icon of currentIcons) {
      if (lastCheck[icon.path] !== undefined && lastCheck[icon.path] !== icon.exists) {
        console.log(`Icon file ${icon.path} status changed:`, icon.exists ? 'available' : 'missing');
        
        // Update favicon links if any changes detected
        updateFaviconLinks(true);
        break;
      }
      lastCheck[icon.path] = icon.exists;
    }
  };
  
  // Initial check
  checkForChanges();
  
  // Set up interval
  const interval = setInterval(checkForChanges, intervalMs);
  
  // Return cleanup function
  return () => clearInterval(interval);
}

/**
 * Preload all icon files to ensure they're cached
 */
export function preloadIcons(): void {
  ICON_FILES.forEach(iconPath => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = iconPath;
    link.as = 'image';
    document.head.appendChild(link);
  });
} 