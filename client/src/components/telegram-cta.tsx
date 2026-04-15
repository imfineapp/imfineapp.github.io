import { useTranslation } from 'react-i18next';
import { useAttribution, generateTelegramLink } from '@/hooks/useAttribution';
import { getSourceLabel } from '@/lib/attribution';
import { Loader2 } from 'lucide-react';

interface TelegramCTAProps {
  botUsername?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function TelegramCTA({
  botUsername = 'menhausen_app_bot',
  variant = 'default',
  size = 'default',
  className = '',
  children,
}: TelegramCTAProps) {
  const { t } = useTranslation();
  const { attribution } = useAttribution();

  const link = generateTelegramLink(attribution, botUsername);
  const source = getSourceLabel(attribution);

  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm rounded-md',
    default: 'h-10 px-6 py-2 rounded-lg',
    lg: 'h-12 px-8 text-lg rounded-xl',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      data-attribution-source={source}
    >
      {children || (
        <>
          <TelegramIcon />
          {t('nav.open_telegram')}
        </>
      )}
    </a>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
