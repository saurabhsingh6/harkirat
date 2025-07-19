import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2, Github, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
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
                  `transition-colors hover:text-brand-primary ${
                    isActive ? 'text-brand-primary font-medium' : 'text-muted-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Social Links & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/hkirat" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/kirat_tw" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@harkirat1" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <NavLink to="/auth">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors hover:text-brand-primary ${
                      isActive ? 'text-brand-primary font-medium' : 'text-muted-foreground'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://github.com/hkirat" target="_blank" rel="noopener noreferrer" 
                   className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/kirat_tw" target="_blank" rel="noopener noreferrer"
                   className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@harkirat1" target="_blank" rel="noopener noreferrer"
                   className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <NavLink to="/auth">
                  <Button variant="outline" size="sm">
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