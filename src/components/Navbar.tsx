import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2, Github, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border dark:bg-background/90 dark:border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-primary dark:bg-gradient-to-r dark:from-primary dark:to-primary/80">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-primary dark:to-primary/80">
              Harkirat Singh
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-brand-primary dark:hover:text-primary ${
                    isActive 
                      ? 'text-brand-primary dark:text-primary font-medium' 
                      : 'text-muted-foreground hover:text-foreground dark:hover:text-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Social Links & Auth */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="https://github.com/hkirat" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/kirat_tw" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@harkirat1" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
              <Youtube className="h-5 w-5" />
            </a>
            <div className="px-2">
              <ThemeToggle />
            </div>
            <NavLink to="/auth">
              <Button variant="outline" size="sm" className="ml-2">
                Login
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border dark:border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors hover:text-brand-primary dark:hover:text-primary px-2 py-1 rounded ${
                      isActive 
                        ? 'text-brand-primary dark:text-primary font-medium bg-accent/50' 
                        : 'text-muted-foreground hover:text-foreground dark:hover:text-foreground'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/hkirat" target="_blank" rel="noopener noreferrer" 
                   className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/kirat_tw" target="_blank" rel="noopener noreferrer"
                   className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@harkirat1" target="_blank" rel="noopener noreferrer"
                   className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <div className="pt-2">
                <NavLink to="/auth" className="w-full">
                  <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                    Login
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;