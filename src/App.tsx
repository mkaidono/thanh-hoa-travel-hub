import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import DestinationsPage from "./pages/DestinationsPage";
import ToursPage from "./pages/ToursPage";
import HotelsPage from "./pages/HotelsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diem-den" element={<DestinationsPage />} />
            <Route path="/tour" element={<ToursPage />} />
            <Route path="/khach-san" element={<HotelsPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/dang-nhap" element={<LoginPage />} />
            <Route path="/dang-ky" element={<SignupPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
