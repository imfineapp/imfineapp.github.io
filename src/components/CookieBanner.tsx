import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { X, Cookie, Settings } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export const CookieBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const parsedConsent = JSON.parse(consent);
      setAnalyticsEnabled(parsedConsent.analytics || false);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setAnalyticsEnabled(true);
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setAnalyticsEnabled(false);
    setShowBanner(false);
  };

  const savePreferences = () => {
    const consent = {
      necessary: true,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };


  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">
                {t('cookies.title')}
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                {t('cookies.description')}
              </p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={acceptAll} size="sm">
                  {t('cookies.acceptAll')}
                </Button>
                <Button onClick={acceptNecessary} variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  {t('cookies.necessaryOnly')}
                </Button>
                <Dialog open={showSettings} onOpenChange={setShowSettings}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                      <Settings className="h-4 w-4" />
                      {t('cookies.settings')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{t('cookies.settings')}</DialogTitle>
                      <DialogDescription>
                        {t('cookies.settingsDescription')}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="necessary-cookies" className="text-sm font-medium">
                            {t('cookies.necessaryTitle')}
                          </Label>
                          <p className="text-xs text-gray-500">
                            {t('cookies.necessaryDescription')}
                          </p>
                        </div>
                        <Switch
                          id="necessary-cookies"
                          checked={true}
                          disabled
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="analytics-cookies" className="text-sm font-medium">
                            {t('cookies.analyticsTitle')}
                          </Label>
                          <p className="text-xs text-gray-500">
                            {t('cookies.analyticsDescription')}
                          </p>
                        </div>
                        <Switch
                          id="analytics-cookies"
                          checked={analyticsEnabled}
                          onCheckedChange={setAnalyticsEnabled}
                        />
                      </div>
                      <div className="flex justify-end gap-2 pt-4">
                        <Button variant="outline" onClick={() => setShowSettings(false)}>
                          {t('cookies.cancel')}
                        </Button>
                        <Button onClick={savePreferences}>
                          {t('cookies.savePreferences')}
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowBanner(false)}
            className="flex-shrink-0 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
