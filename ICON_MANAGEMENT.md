# Система управления иконками и фавиконами

## Обзор

Реализована автоматическая система управления иконками и фавиконами для предотвращения проблем с кэшированием и обеспечения правильного отображения всех иконок.

## Что было исправлено

### 1. Добавлены отсутствующие ссылки в HTML
В `index.html` добавлены все необходимые мета-теги для фавиконов:
- `favicon.ico` (основной фавикон)
- `favicon.svg` (векторный фавикон)
- `apple-touch-icon.png` (иконка для iOS)
- `favicon-96x96.png` (PNG фавикон)
- `site.webmanifest` (манифест PWA)

### 2. Предотвращение кэширования
- **Vite конфигурация**: Добавлены HTTP заголовки для предотвращения кэширования иконок в development режиме
- **Cache-busting**: Автоматическое добавление timestamp параметров к URL иконок
- **Middleware**: Специальный middleware для установки заголовков `no-cache` для всех файлов иконок

### 3. Автоматическая проверка и мониторинг

#### Утилиты (`src/lib/iconUtils.ts`)
- `checkIconExists()` - проверка существования иконки
- `checkAllIcons()` - проверка всех иконок
- `updateFaviconLinks()` - обновление ссылок с cache-busting
- `startIconMonitoring()` - автоматический мониторинг изменений
- `preloadIcons()` - предзагрузка иконок

#### React хуки (`src/hooks/use-icons.tsx`)
- `useIcons()` - основной хук для управления иконками
- `useIconValidation()` - хук для валидации статуса иконок

#### Компоненты (`src/components/IconStatus.tsx`)
- `IconStatus` - компонент отображения статуса иконок
- `FloatingIconStatus` - плавающий индикатор для разработки

## Настройки по умолчанию

### В режиме разработки:
- Мониторинг каждые 30 секунд
- Cache-busting включен
- Предзагрузка иконок
- Плавающий индикатор статуса
- Логирование в консоль

### В режиме production:
- Мониторинг отключен
- Индикаторы скрыты
- Стандартное кэширование

## Структура файлов иконок

```
public/
├── favicon.ico              # Основной фавикон
├── favicon.svg              # Векторный фавикон
├── apple-touch-icon.png     # Иконка для iOS
├── favicon-96x96.png        # PNG фавикон 96x96
├── web-app-manifest-192x192.png # PWA иконка 192x192
├── web-app-manifest-512x512.png # PWA иконка 512x512
└── site.webmanifest         # Манифест PWA
```

## Использование

### Автоматическое управление
Система запускается автоматически при старте приложения и не требует дополнительной настройки.

### Ручное управление
```typescript
import { useIcons } from '@/hooks/use-icons';

function MyComponent() {
  const { icons, loading, error, checkIcons, updateIcons } = useIcons();
  
  // Принудительная проверка
  const handleCheck = () => checkIcons();
  
  // Обновление с cache-busting
  const handleUpdate = () => updateIcons(true);
  
  return (
    <div>
      {loading && <p>Checking icons...</p>}
      {error && <p>Error: {error}</p>}
      <p>Valid icons: {icons.filter(i => i.exists).length}/{icons.length}</p>
    </div>
  );
}
```

### Отображение статуса
```typescript
import { IconStatus } from '@/components/IconStatus';

// В любом компоненте
<IconStatus showInProduction={false} />
```

## Логирование

В режиме разработки система автоматически логирует:
- ✅ Успешную загрузку всех иконок
- ⚠️ Предупреждения о недостающих файлах
- ❌ Ошибки загрузки

## Кастомизация

### Изменение интервала мониторинга
```typescript
const { icons } = useIcons({
  monitoringInterval: 60000, // 60 секунд
});
```

### Отключение cache-busting
```typescript
const { icons } = useIcons({
  enableCacheBusting: false,
});
```

### Отключение мониторинга
```typescript
const { icons } = useIcons({
  enableMonitoring: false,
});
```

## Troubleshooting

### Иконки не отображаются
1. Проверьте консоль браузера на предупреждения
2. Убедитесь, что файлы существуют в папке `public/`
3. Очистите кэш браузера (`Ctrl+Shift+R`)

### Система мониторинга не работает
1. Проверьте, что приложение запущено в development режиме
2. Убедитесь, что нет ошибок JavaScript в консоли
3. Проверьте настройки в `useIcons()`

### Плавающий индикатор не показывается
Индикатор отображается только в development режиме. В production он автоматически скрывается. 