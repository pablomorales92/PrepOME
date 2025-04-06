import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import CalendarPage from "@/pages/CalendarPage";
import MaterialPage from "@/pages/MaterialPage";
import LinksPage from "@/pages/LinksPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// Reemplazamos el enrutamiento estándar por uno basado en hash
// para mejor compatibilidad con GitHub Pages
const useHashLocation = () => {
  const [loc, setLoc] = useState(window.location.hash.replace("#", "") || "/");
  
  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setLoc(hash);
    };
    
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  
  const navigate = (to: string) => {
    window.location.hash = to;
  };
  
  return [loc, navigate];
};

function Router() {
  // Usamos el hook personalizado para la navegación basada en hash
  // @ts-ignore - Ignoramos errores de tipado ya que el formato es compatible con wouter
  useLocation.use = useHashLocation;
  
  return (
    <Switch>
      <Route path="/PrepOME/644e064fd4181786a7db0846f06a3682" component={Home} />
      <Route path="/PrepOME/644e064fd4181786a7db0846f06a3682/que-es" component={AboutPage}/>
      <Route path="/PrepOME/644e064fd4181786a7db0846f06a3682/calendario" component={CalendarPage}/>
      <Route path="/PrepOME/644e064fd4181786a7db0846f06a3682/material" component={MaterialPage}/>
      <Route path="/PrepOME/644e064fd4181786a7db0846f06a3682/enlaces" component={LinksPage}/>
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  // Check if current path is unmatched (NotFound)
  const isNotFound = ![
    "/PrepOME/644e064fd4181786a7db0846f06a3682",
    "/PrepOME/644e064fd4181786a7db0846f06a3682/que-es",
    "/PrepOME/644e064fd4181786a7db0846f06a3682/calendario",
    "/PrepOME/644e064fd4181786a7db0846f06a3682/material",
    "/PrepOME/644e064fd4181786a7db0846f06a3682/enlaces"
  ].includes(location);

  return (
    <QueryClientProvider client={queryClient}>
    {isNotFound ? (
      <main className="flex-grow">
        <Router />
      </main>
    ) : (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Router />
        </main>
        <Footer />
      </div>
    )}
    <Toaster />
  </QueryClientProvider>
  );
}

export default App;
