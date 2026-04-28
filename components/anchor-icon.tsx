import { cn } from "@/lib/utils";

interface AnchorIconProps {
  className?: string;
  /** Natural SVG dimensions (277×471); CSS `className` scales display size. */
  loading?: "lazy" | "eager";
  title?: string;
}

export function AnchorIcon({ className, loading = "eager", title = "Menhausen anchor symbol" }: AnchorIconProps) {
  return (
    <img 
      src="/anchor_menhausen_symbol.svg" 
      alt="Menhausen anchor symbol" 
      title={title}
      width={277}
      height={471}
      loading={loading}
      className={cn("object-contain", className)}
    />
  );
}
