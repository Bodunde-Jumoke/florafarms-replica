import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const LiveBirds = lazy(() => import("./pages/products/LiveBirds"));
const TableEggs = lazy(() => import("./pages/products/TableEggs"));
const Swine = lazy(() => import("./pages/products/Swine"));
const ExoticBirds = lazy(() => import("./pages/products/ExoticBirds"));
const PointOfLay = lazy(() => import("./pages/products/PointOfLay"));
const Rams = lazy(() => import("./pages/products/Rams"));
const Goats = lazy(() => import("./pages/products/Goats"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
