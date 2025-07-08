import { useEffect, useState, useCallback } from 'react';
import {
  checkAllIcons,
  updateFaviconLinks,
  startIconMonitoring,
  preloadIcons,
  type IconFile,
} from '@/lib/iconUtils';

interface UseIconsOptions {
  enableMonitoring?: boolean;
  monitoringInterval?: number;
  enableCacheBusting?: boolean;
  preloadOnMount?: boolean;
}

interface UseIconsReturn {
  icons: IconFile[];
  loading: boolean;
  error: string | null;
  checkIcons: () => Promise<void>;
  updateIcons: (cacheBust?: boolean) => void;
}

/**
 * React hook for managing icons and favicons
 */
export function useIcons(options: UseIconsOptions = {}): UseIconsReturn {
  const {
    enableMonitoring = true,
    monitoringInterval = 60000,
    enableCacheBusting = true,
    preloadOnMount = true,
  } = options;

  const [icons, setIcons] = useState<IconFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkIcons = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const iconFiles = await checkAllIcons();
      setIcons(iconFiles);
      
      // Log missing icons for debugging
      const missingIcons = iconFiles.filter(icon => !icon.exists);
      if (missingIcons.length > 0) {
        console.warn('Missing icon files:', missingIcons.map(icon => icon.path));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check icons');
      console.error('Error checking icons:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateIcons = useCallback((cacheBust: boolean = enableCacheBusting) => {
    try {
      updateFaviconLinks(cacheBust);
    } catch (err) {
      console.error('Error updating favicon links:', err);
    }
  }, [enableCacheBusting]);

  useEffect(() => {
    // Initial setup
    const initializeIcons = async () => {
      // Preload icons if enabled
      if (preloadOnMount) {
        preloadIcons();
      }

      // Check icons status
      await checkIcons();

      // Update favicon links with cache busting if enabled
      updateIcons();
    };

    initializeIcons();

    // Start monitoring if enabled
    let stopMonitoring: (() => void) | undefined;
    if (enableMonitoring) {
      stopMonitoring = startIconMonitoring(monitoringInterval);
    }

    // Cleanup function
    return () => {
      if (stopMonitoring) {
        stopMonitoring();
      }
    };
  }, [checkIcons, updateIcons, enableMonitoring, monitoringInterval, preloadOnMount]);

  return {
    icons,
    loading,
    error,
    checkIcons,
    updateIcons,
  };
}

/**
 * Hook for getting icon validation status
 */
export function useIconValidation() {
  const { icons, loading, error } = useIcons({
    enableMonitoring: false,
    preloadOnMount: false,
  });

  const allIconsValid = icons.every(icon => icon.exists);
  const missingIcons = icons.filter(icon => !icon.exists);
  const validationStatus = loading 
    ? 'checking' 
    : allIconsValid 
    ? 'valid' 
    : 'invalid';

  return {
    allIconsValid,
    missingIcons,
    validationStatus,
    totalIcons: icons.length,
    validIcons: icons.filter(icon => icon.exists).length,
    loading,
    error,
  };
} 