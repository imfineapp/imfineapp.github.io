import { cn } from "@/lib/utils";

interface AnchorIconProps {
  className?: string;
}

export function AnchorIcon({ className }: AnchorIconProps) {
  return (
    <img 
      src="/anchor_menhausen_symbol.svg" 
      alt="Menhausen anchor symbol" 
      className={cn("object-contain", className)}
    />
  );
}

