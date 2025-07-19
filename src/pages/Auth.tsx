import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Github, 
  Chrome,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const benefits = [
    'Access to all premium courses',
    'Join exclusive community',
    'Get 1-on-1 mentorship',
    'Download course materials',
    'Certificate of completion',
    'Lifetime access to updates'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </NavLink>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="order-2 lg:order-1">
              <div className="max-w-md mx-auto lg:mx-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Join 100xDevs
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Get access to premium courses and join a community of 50,000+ developers 
                  building their careers in tech.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-brand-primary/20">
                        <CheckCircle className="h-4 w-4 text-brand-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-card rounded-xl border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      <img 
                        className="w-8 h-8 rounded-full border-2 border-background" 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" 
                        alt="Student 1" 
                      />
                      <img 
                        className="w-8 h-8 rounded-full border-2 border-background" 
                        src="https://images.unsplash.com/photo-1494790108755-2616b613905c?w=32&h=32&fit=crop&crop=face" 
                        alt="Student 2" 
                      />
                      <img 
                        className="w-8 h-8 rounded-full border-2 border-background" 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                        alt="Student 3" 
                      />
                    </div>
                    <div>
                      <p className="font-medium">Join 50K+ developers</p>
                      <p className="text-sm text-muted-foreground">Already building their careers</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "The best investment I made for my career. Got my dream job within 6 months!" 
                    - Priya, SDE at Microsoft
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="order-1 lg:order-2">
              <Card className="w-full max-w-md mx-auto bg-gradient-card border-border/50 shadow-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Welcome Back</CardTitle>
                  <CardDescription>
                    Sign in to your account or create a new one
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="login">Sign In</TabsTrigger>
                      <TabsTrigger value="register">Sign Up</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="login" className="space-y-4">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="your.email@example.com"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="password" 
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-10 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-border" />
                            <span className="text-muted-foreground">Remember me</span>
                          </label>
                          <a href="#" className="text-brand-primary hover:underline">
                            Forgot password?
                          </a>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-primary" 
                          disabled={isLoading}
                        >
                          {isLoading ? 'Signing in...' : 'Sign In'}
                        </Button>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="register" className="space-y-4">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="name" 
                              type="text" 
                              placeholder="Your full name"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="register-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="register-email" 
                              type="email" 
                              placeholder="your.email@example.com"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="register-password">Password</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input 
                              id="register-password" 
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a strong password"
                              className="pl-10 pr-10"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2 text-sm">
                          <input type="checkbox" className="rounded border-border mt-1" required />
                          <span className="text-muted-foreground">
                            I agree to the{' '}
                            <a href="#" className="text-brand-primary hover:underline">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-brand-primary hover:underline">
                              Privacy Policy
                            </a>
                          </span>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-primary" 
                          disabled={isLoading}
                        >
                          {isLoading ? 'Creating account...' : 'Create Account'}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <Button variant="outline" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Chrome className="h-4 w-4 mr-2" />
                        Google
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;