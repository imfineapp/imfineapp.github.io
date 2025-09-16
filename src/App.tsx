import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useIcons } from "@/hooks/use-icons";
// import { FloatingIconStatus } from "@/components/IconStatus";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookieBanner } from "./components/CookieBanner";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    // Track page view when location changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-2CDHZ16V7W', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const AppContent = () => {
  // Initialize icon management with automatic monitoring and cache busting
  const { icons, loading, error } = useIcons({
    enableMonitoring: true,
    monitoringInterval: 30000, // Check every 30 seconds
    enableCacheBusting: true,
    preloadOnMount: true,
  });

  // Log icon status in development
  if (process.env.NODE_ENV === 'development') {
    if (!loading && icons.length > 0) {
      const missingIcons = icons.filter(icon => !icon.exists);
      if (missingIcons.length === 0) {
        console.log('✅ All favicons and icons are properly loaded');
      } else {
        console.warn('⚠️ Missing icons:', missingIcons.map(icon => icon.path));
      }
    }
    
    if (error) {
      console.error('❌ Icon loading error:', error);
    }
  }

  return (
    <>
      <BrowserRouter>
        <PageTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
      {/* <FloatingIconStatus /> */}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
