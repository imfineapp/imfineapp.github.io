declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        page_path?: string;
        page_title?: string;
        page_location?: string;
        [key: string]: unknown;
      }
    ) => void;
  }
}

export {};
