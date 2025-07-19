import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Users, 
  BookOpen, 
  Target, 
  Quote,
  Calendar,
  MapPin,
  ExternalLink,
  Github,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, label: 'Students Taught', value: '50K+' },
    { icon: BookOpen, label: 'Courses Created', value: '25+' },
    { icon: Trophy, label: 'Years Experience', value: '8+' },
    { icon: Target, label: 'Success Rate', value: '95%' }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Started Programming Journey',
      description: 'Began learning programming during college, fascinated by the potential of technology to solve real-world problems.'
    },
    {
      year: '2018',
      title: 'First Industry Job',
      description: 'Joined as a Software Engineer at a startup, working on full-stack development and gaining hands-on experience.'
    },
    {
      year: '2020',
      title: 'Started Teaching',
      description: 'Began creating educational content on YouTube, helping students understand complex programming concepts.'
    },
    {
      year: '2022',
      title: 'Founded 100xDevs',
      description: 'Launched the first cohort-based course, revolutionizing how programming is taught in India.'
    },
    {
      year: '2024',
      title: 'Scaled to 50K+ Students',
      description: 'Built a community of over 50,000 developers and helped hundreds land their dream jobs in tech.'
    }
  ];

  const testimonials = [
    {
      name: 'Ankit Sharma',
      role: 'SDE at Amazon',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      content: "Harkirat's teaching style is unmatched. The practical approach and real-world projects prepared me for my Amazon interview."
    },
    {
      name: 'Priya Patel',
      role: 'Full Stack Developer at Microsoft',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b613905c?w=80&h=80&fit=crop&crop=face',
      content: "From zero to hero! The cohort program gave me the confidence and skills to transition into tech successfully."
    },
    {
      name: 'Rohit Kumar',
      role: 'Startup Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      content: "The system design course was a game-changer. I built and scaled my startup using the concepts I learned."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                alt="Harkirat Singh"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-brand-primary shadow-glow mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 bg-brand-accent text-black rounded-full p-2">
                <Trophy className="h-6 w-6" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Harkirat Singh
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Software Engineer turned Educator, helping developers build careers 
              through practical programming education and mentorship.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <MapPin className="h-4 w-4 mr-2" />
                Bangalore, India
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Teaching since 2020
              </Badge>
            </div>

            <div className="flex justify-center gap-4">
              <a href="https://github.com/hkirat" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://twitter.com/kirat_tw" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </Button>
              </a>
              <a href="https://youtube.com/@harkirat1" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Youtube className="h-5 w-5 mr-2" />
                  YouTube
                </Button>
              </a>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <achievement.icon className="h-8 w-8 mx-auto mb-4 text-brand-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My Story
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    My journey into programming started during college when I was fascinated by 
                    how a few lines of code could solve complex problems. What began as curiosity 
                    soon turned into a passion that would shape my entire career.
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    After working in the industry for several years, I realized that traditional 
                    education wasn't preparing students for real-world challenges. That's when I 
                    decided to bridge this gap through practical, hands-on teaching.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, 100xDevs has become a movement that's transforming how programming 
                    is taught in India. We focus on practical skills, real projects, and 
                    preparing students for successful careers in tech.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-brand-primary" />
                        Mission
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        To make quality programming education accessible to everyone and 
                        help students build successful careers in technology.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-brand-primary" />
                        Vision
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        To create a world where anyone with determination can learn 
                        programming and build amazing things that matter.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Journey Timeline
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full border-4 border-background shadow-glow">
                        <span className="text-sm font-bold text-white">{item.year}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <Card className="bg-gradient-card border-border/50">
                          <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Students Say
            </h2>
            
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
                  </CardHeader>
                  <CardContent>
                    <Quote className="h-8 w-8 text-brand-primary mb-4" />
                    <p className="text-muted-foreground italic">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-card rounded-2xl p-12 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers through 
                practical programming education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary">
                  View Courses
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Visit YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;