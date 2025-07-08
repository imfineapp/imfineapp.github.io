import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useIcons } from "@/hooks/use-icons";
import { FloatingIconStatus } from "@/components/IconStatus";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <FloatingIconStatus />
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
