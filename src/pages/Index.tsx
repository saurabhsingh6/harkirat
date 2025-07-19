import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  BookOpen, 
  Trophy,
  Code2,
  Zap,
  Target,
  CheckCircle,
  Github,
  Twitter,
  Youtube,
  ExternalLink
} from 'lucide-react';

const Index = () => {
  const [showVideo, setShowVideo] = useState(false);
  const stats = [
    { icon: Users, label: 'Students', value: '50K+' },
    { icon: BookOpen, label: 'Courses', value: '25+' },
    { icon: Trophy, label: 'Success Rate', value: '95%' },
    { icon: Star, label: 'Rating', value: '4.9/5' }
  ];

  const features = [
    {
      icon: Code2,
      title: 'Hands-on Projects',
      description: 'Build real-world applications that showcase your skills to employers.'
    },
    {
      icon: Users,
      title: 'Live Mentorship',
      description: 'Get guidance from industry experts and 1-on-1 sessions.'
    },
    {
      icon: Zap,
      title: 'Job-Ready Skills',
      description: 'Learn the latest technologies and frameworks used in the industry.'
    },
    {
      icon: Target,
      title: 'Career Support',
      description: 'Resume reviews, interview prep, and job placement assistance.'
    }
  ];

  const testimonials = [
    {
      name: 'Ankit Sharma',
      role: 'SDE at Amazon',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      content: 'The practical approach and real-world projects prepared me perfectly for my Amazon interview.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b613905c?w=80&h=80&fit=crop&crop=face',
      content: 'From zero coding knowledge to landing my dream job in 6 months. Absolutely worth it!',
      rating: 5
    },
    {
      name: 'Rohit Kumar',
      role: 'Tech Entrepreneur',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      content: 'The system design concepts helped me scale my startup to millions of users.',
      rating: 5
    }
  ];

  const courses = [
    {
      title: '100xDevs Cohort 3.0',
      description: 'Complete full-stack development program',
      price: '₹6,999',
      originalPrice: '₹12,999',
      students: '2.5K+',
      rating: 4.9,
      popular: true
    },
    {
      title: 'System Design Masterclass',
      description: 'Advanced system design for interviews',
      price: '₹2,999',
      originalPrice: '₹4,999',
      students: '1.8K+',
      rating: 4.8
    },
    {
      title: 'DSA Problem Solving',
      description: 'Master algorithms and data structures',
      price: '₹1,999',
      students: '3.2K+',
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-6 px-4 py-2 bg-brand-primary/10 text-brand-primary border-brand-primary/20">
              🚀 Join 50K+ developers already building their careers
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Master Programming
            </span>
            <br />
            <span className="text-foreground">Build Your Career</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn full-stack development, system design, and get job-ready with hands-on projects. 
            Taught by industry experts who've been there.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <NavLink to="/products">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary shadow-glow">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
            <div className="relative">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onMouseEnter={() => setShowVideo(true)}
                onMouseLeave={() => setShowVideo(false)}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              
              {/* Video Overlay */}
              {showVideo && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 bg-black rounded-lg overflow-hidden shadow-2xl border border-border/50">
                  <iframe
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/r9Y35xwNPiI?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
                    title="Harkirat Singh Coding Demo"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="block"
                  />
                  <div className="p-3 bg-background">
                    <p className="text-sm font-medium">Live Coding a Gambling Strategy</p>
                    <p className="text-xs text-muted-foreground">by Harkirat Singh</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-brand-primary" />
                <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">100xDevs</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We focus on practical skills that actually matter in the real world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-full bg-brand-primary/10 w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular courses designed to get you job-ready fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {course.popular && (
                      <Badge className="bg-brand-accent text-black">Most Popular</Badge>
                    )}
                    <div className="flex items-center gap-1 ml-auto">
                      <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-brand-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-brand-primary">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" variant="outline" className="group/btn">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <NavLink to="/products">
              <Button size="lg" variant="outline" className="px-8">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our students transformed their careers and landed their dream jobs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-2xl p-12 border border-border/50 shadow-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Latest Tech Trends
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get weekly insights, coding tips, and career advice delivered to your inbox. 
              Join 25K+ developers already subscribed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-gradient-primary">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-brand-primary" />
              <span>Free weekly newsletter • Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Harkirat Singh</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering developers worldwide with practical programming education 
                and career guidance. Building the next generation of tech talent.
              </p>
              <div className="flex gap-4">
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
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <NavLink to="/products" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  Courses
                </NavLink>
                <NavLink to="/about" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  About
                </NavLink>
                <a href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  Community
                </a>
                <a href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  Blog
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-brand-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Harkirat Singh. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ for the developer community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
