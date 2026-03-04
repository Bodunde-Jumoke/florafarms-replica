import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import LiveBirds from "./pages/products/LiveBirds";
import TableEggs from "./pages/products/TableEggs";
import Swine from "./pages/products/Swine";
import ExoticBirds from "./pages/products/ExoticBirds";
import PointOfLay from "./pages/products/PointOfLay";
import Rams from "./pages/products/Rams";
import Goats from "./pages/products/Goats";
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
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/live-birds" element={<LiveBirds />} />
          <Route path="/products/table-eggs" element={<TableEggs />} />
          <Route path="/products/swine" element={<Swine />} />
          <Route path="/products/exotic-birds" element={<ExoticBirds />} />
          <Route path="/products/point-of-lay" element={<PointOfLay />} />
          <Route path="/products/rams" element={<Rams />} />
          <Route path="/products/goats" element={<Goats />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
