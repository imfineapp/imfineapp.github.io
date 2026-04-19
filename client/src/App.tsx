import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from "@/components/cookie-consent";
import { trackPageView } from "@/lib/analytics";

import Home from "@/pages/home";
import StressCards from "@/pages/stress-cards";
import StressManagement from "@/pages/stress-management";
import StressTest from "@/pages/stress-test";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import Privacy from "@/pages/privacy";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import Terms from "@/pages/terms";
import Techniques from "@/pages/techniques";
import TechniqueDetail from "@/pages/technique-detail";
import Comparisons from "@/pages/comparisons";
import CompareDetail from "@/pages/compare";
import Professions from "@/pages/professions";
import ProfessionDetail from "@/pages/profession";
import NotFound from "@/pages/not-found";

function AnalyticsTracker() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/stress-cards" component={StressCards} />
      <Route path="/stress-management" component={StressManagement} />
      <Route path="/stress-test" component={StressTest} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/techniques" component={Techniques} />
      <Route path="/techniques/:slug" component={TechniqueDetail} />
      <Route path="/compare" component={Comparisons} />
      <Route path="/compare/:slug" component={CompareDetail} />
      <Route path="/professions" component={Professions} />
      <Route path="/professions/:slug" component={ProfessionDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticsTracker />
      <Router />
      <Toaster />
      <CookieConsent />
    </QueryClientProvider>
  );
}

export default App;
