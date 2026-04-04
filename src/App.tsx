import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import MallDirectory from "./pages/MallDirectory";
import MallDetail from "./pages/MallDetail";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import PortfolioPage from "./pages/PortfolioPage";
import TermsPage from "./pages/TermsPage";
import LeasingPage from "./pages/LeasingPage";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/malls" element={<MallDirectory />} />
          <Route path="/malls/:id" element={<MallDetail />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/complaints" element={<ComplaintsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/leasing" element={<LeasingPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
