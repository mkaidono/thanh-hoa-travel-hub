import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DestinationsPage from "./pages/DestinationsPage";
import ToursPage from "./pages/ToursPage";
import HotelsPage from "./pages/HotelsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diem-den" element={<DestinationsPage />} />
          <Route path="/tour" element={<ToursPage />} />
          <Route path="/khach-san" element={<HotelsPage />} />
          <Route path="/tin-tuc" element={<NewsPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
