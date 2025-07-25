import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import ParticleBackground from '@/components/ParticleBackground';
import MagneticButton from '@/components/MagneticButton';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import InteractiveCursor from '@/components/InteractiveCursor';
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
  ExternalLink,
  Sparkles,
  Rocket,
  Brain
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <InteractiveCursor />
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="relative z-10">
        <Navbar />
      
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollAnimationWrapper animation="fadeIn" delay={200}>
              <div className="mb-8">
                <MagneticButton>
                  <Badge className="mb-6 px-6 py-3 bg-gradient-aurora text-black border-white/30 backdrop-blur-sm animate-pulse-glow">
                    <Sparkles className="w-4 h-4 mr-2" />
                    🚀 Join 50K+ developers already building their careers
                  </Badge>
                </MagneticButton>
              </div>
            </ScrollAnimationWrapper>
          
            <ScrollAnimationWrapper animation="slideUp" delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative">
                <div className="absolute inset-0 bg-gradient-primary bg-clip-text text-transparent blur-sm animate-pulse-glow" />
                <span className="relative bg-gradient-hero bg-clip-text text-transparent animate-float">
                  Master Programming
                </span>
                <br />
                <span className="relative text-foreground animate-shimmer bg-gradient-to-r from-foreground via-white to-foreground bg-clip-text bg-[length:200%_100%]">
                  Build Your Career
                </span>
              </h1>
            </ScrollAnimationWrapper>
          
            <ScrollAnimationWrapper animation="slideUp" delay={600}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Learn full-stack development, system design, and get job-ready with hands-on projects. 
                Taught by industry experts who've been there.
              </p>
            </ScrollAnimationWrapper>
          
            <ScrollAnimationWrapper animation="scaleIn" delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <MagneticButton magnetStrength={0.2}>
                  <NavLink to="/products">
                    <Button size="lg" className="text-lg px-8 py-6 bg-gradient-primary shadow-dramatic hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </NavLink>
                </MagneticButton>
                <div className="relative">
                  <MagneticButton magnetStrength={0.15}>
                    <GlassmorphismCard intensity="medium" className="p-0">
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        className="text-lg px-8 py-6 bg-transparent hover:bg-white/10 border-0"
                        onMouseEnter={() => setShowVideo(true)}
                        onMouseLeave={() => setShowVideo(false)}
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Demo
                      </Button>
                    </GlassmorphismCard>
                  </MagneticButton>
              
                  {/* Video Overlay */}
                  {showVideo && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 animate-scale-in">
                      <GlassmorphismCard intensity="strong" className="overflow-hidden shadow-dramatic">
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
                        <div className="p-3 backdrop-blur-md">
                          <p className="text-sm font-medium text-white">Live Coding a Gambling Strategy</p>
                          <p className="text-xs text-white/70">by Harkirat Singh</p>
                        </div>
                      </GlassmorphismCard>
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimationWrapper>
          
            {/* Stats */}
            <ScrollAnimationWrapper animation="slideUp" delay={1000}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <MagneticButton key={index} magnetStrength={0.1}>
                    <GlassmorphismCard intensity="light" className="text-center p-6 group hover:scale-110 transition-all duration-500 cursor-pointer">
                      <div className="relative">
                        <stat.icon className="h-10 w-10 mx-auto mb-3 text-brand-primary group-hover:animate-float animate-morph" />
                        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1 group-hover:text-white transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">{stat.label}</div>
                    </GlassmorphismCard>
                  </MagneticButton>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-aurora opacity-50" />
          <div className="max-w-7xl mx-auto relative z-10">
            <ScrollAnimationWrapper animation="fadeIn" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">100xDevs</span>?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We focus on practical skills that actually matter in the real world.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimationWrapper key={index} animation="slideUp" delay={300 + index * 100}>
                  <MagneticButton magnetStrength={0.1}>
                    <GlassmorphismCard intensity="medium" className="text-center h-full group hover:scale-105 transition-all duration-500 cursor-pointer">
                      <div className="p-6">
                        <div className="relative mb-6">
                          <div className="p-4 rounded-full bg-gradient-primary/20 w-fit mx-auto mb-4 group-hover:bg-gradient-primary/30 transition-all duration-500">
                            <feature.icon className="h-8 w-8 text-brand-primary group-hover:animate-pulse-glow" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </GlassmorphismCard>
                  </MagneticButton>
                </ScrollAnimationWrapper>
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
    </div>
  );
};

export default Index;
