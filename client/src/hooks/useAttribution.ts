import { useState, useEffect } from 'react';
import { Attribution, parseAndStoreAttribution, getAttribution, saveAttribution } from '@/lib/attribution';

export function useAttribution() {
  const [attribution, setAttribution] = useState<Attribution | null>(null);

  useEffect(() => {
    const parsed = parseAndStoreAttribution();
    setAttribution(parsed);
  }, []);

  const updateAttribution = (updates: Partial<Attribution>) => {
    const existing = getAttribution();
    const updated: Attribution = {
      t: Math.floor(Date.now() / 1000),
      v: 1,
      ...existing,
      ...updates,
    };
    saveAttribution(updated);
    setAttribution(updated);
  };

  return { attribution, updateAttribution };
}
