import type { FaqItem } from "@/components/page-faq";

type TFunction = (key: string, options?: { returnObjects?: boolean }) => unknown;

export function getFaqFromI18n(t: TFunction, key: string): FaqItem[] {
  const items = t(key, { returnObjects: true });
  if (!Array.isArray(items)) {
    return [];
  }

  return items.filter(
    (item): item is FaqItem =>
      Boolean(item) &&
      typeof item === "object" &&
      "question" in item &&
      "answer" in item &&
      typeof (item as FaqItem).question === "string" &&
      typeof (item as FaqItem).answer === "string",
  );
}
