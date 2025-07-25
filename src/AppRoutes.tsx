import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator } from '@/components/ui/command';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation, useNavigationType, Routes, Route } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const AppRoutes = () => {
  const [openCommand, setOpenCommand] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navigationType = useNavigationType();
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  // Keyboard shortcut: Ctrl+K or Cmd+K
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      setOpenCommand((open) => !open);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Animate progress bar on route change
  useEffect(() => {
    setShowProgress(true);
    setProgress(30);
    const inc = setTimeout(() => setProgress(70), 200);
    const finish = setTimeout(() => setProgress(100), 600);
    const hide = setTimeout(() => {
      setShowProgress(false);
      setProgress(0);
    }, 1000);
    return () => {
      clearTimeout(inc);
      clearTimeout(finish);
      clearTimeout(hide);
    };
  }, [location, navigationType]);

  const navActions = [
    { label: 'Home', shortcut: 'G H', to: '/' },
    { label: 'Products', shortcut: 'G P', to: '/products' },
    { label: 'About', shortcut: 'G A', to: '/about' },
    { label: 'Login', shortcut: 'G L', to: '/auth' },
  ];

  const handleCommandSelect = (to: string) => {
    setOpenCommand(false);
    navigate(to);
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {showProgress && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
          <Progress value={progress} className="h-1 bg-transparent" />
        </div>
      )}
      <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navActions.map((action) => (
              <CommandItem key={action.to} onSelect={() => handleCommandSelect(action.to)}>
                {action.label}
                <CommandShortcut>{action.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Shortcuts">
            <CommandItem disabled>
              <span>Open Command Palette</span>
              <CommandShortcut>Ctrl+K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  );
};

export default AppRoutes; 