import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileActionBar from "@/components/MobileActionBar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SafariDetail from "./pages/SafariDetail";
import DestinationDetail from "./pages/DestinationDetail";
import Destinations from "./pages/Destinations";
import { KenyaSafaris, TanzaniaSafaris, UgandaSafaris } from "./pages/SafariListing";
import ComboSafaris from "./pages/ComboSafaris";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resources from "./pages/Resources";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Header />
          <main className="min-h-screen pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/kenya-safaris" element={<KenyaSafaris />} />
              <Route path="/kenya-safaris/*" element={<KenyaSafaris />} />
              <Route path="/tanzania-safaris" element={<TanzaniaSafaris />} />
              <Route path="/tanzania-safaris/*" element={<TanzaniaSafaris />} />
              <Route path="/uganda-safaris" element={<UgandaSafaris />} />
              <Route path="/uganda-safaris/*" element={<UgandaSafaris />} />
              <Route path="/combo-safaris" element={<ComboSafaris />} />
              <Route path="/combo-safaris/*" element={<ComboSafaris />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destination/:slug" element={<DestinationDetail />} />
              <Route path="/safari/:slug" element={<SafariDetail />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/*" element={<Resources />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
          <MobileActionBar />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
