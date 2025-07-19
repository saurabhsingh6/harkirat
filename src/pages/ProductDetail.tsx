import { useParams, NavLink } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  Clock, 
  Users, 
  CheckCircle, 
  Play, 
  Download, 
  Trophy,
  ArrowLeft,
  Heart,
  Share2
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data (in real app, this would come from API/database)
  const product = {
    id: '1',
    title: '100xDevs Cohort 3.0',
    description: 'Complete full-stack development program covering MERN stack, DevOps, and system design. This comprehensive program is designed to take you from beginner to industry-ready developer.',
    longDescription: `Join the most comprehensive full-stack development program that has already transformed the careers of thousands of developers. This cohort-based course provides hands-on experience with real-world projects, live sessions with industry experts, and a supportive community of learners.

    What makes this program special:
    • Live weekly sessions with Harkirat Singh
    • Real-world projects for your portfolio
    • 1-on-1 mentorship sessions
    • Job placement assistance
    • Lifetime access to course materials
    • Active community support`,
    price: 6999,
    originalPrice: 12999,
    rating: 4.9,
    students: 2500,
    duration: '6 months',
    level: 'Intermediate',
    category: 'Cohort',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
    popular: true,
    startDate: 'January 15, 2025',
    endDate: 'July 15, 2025',
    totalLessons: 120,
    totalProjects: 15,
    certificateIncluded: true
  };

  const curriculum = [
    {
      module: 'Module 1: Fundamentals',
      lessons: 15,
      topics: ['HTML/CSS Basics', 'JavaScript ES6+', 'Git & GitHub', 'Web Development Basics']
    },
    {
      module: 'Module 2: Frontend Development',
      lessons: 25,
      topics: ['React.js', 'State Management', 'Component Patterns', 'Responsive Design']
    },
    {
      module: 'Module 3: Backend Development',
      lessons: 30,
      topics: ['Node.js', 'Express.js', 'Database Design', 'API Development']
    },
    {
      module: 'Module 4: Full-Stack Projects',
      lessons: 25,
      topics: ['MERN Stack', 'Authentication', 'Payment Integration', 'Deployment']
    },
    {
      module: 'Module 5: DevOps & System Design',
      lessons: 15,
      topics: ['Docker', 'AWS Deployment', 'System Design', 'Scaling Applications']
    },
    {
      module: 'Module 6: Career Preparation',
      lessons: 10,
      topics: ['Interview Prep', 'Portfolio Building', 'Resume Review', 'Job Search Strategy']
    }
  ];

  const benefits = [
    'Live weekly sessions with Q&A',
    'Hands-on projects for portfolio',
    '1-on-1 mentorship sessions',
    'Job placement assistance',
    'Lifetime access to materials',
    'Certificate of completion',
    'Access to exclusive community',
    'Regular code reviews',
    'Industry expert guest sessions',
    'Mock interview sessions'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <NavLink 
            to="/products" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </NavLink>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{product.category}</Badge>
                  <Badge variant="outline">{product.level}</Badge>
                  {product.popular && (
                    <Badge className="bg-brand-accent text-black">Most Popular</Badge>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {product.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {product.description}
                </p>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-brand-accent text-brand-accent" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.students} students)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>{product.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>{product.students.toLocaleString()} enrolled</span>
                  </div>
                </div>
              </div>

              {/* Course Image */}
              <div className="mb-8">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-card"
                />
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">About This Program</h2>
                <div className="prose prose-invert max-w-none">
                  {product.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {curriculum.map((module, index) => (
                    <Card key={index} className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{module.module}</CardTitle>
                          <Badge variant="outline">{module.lessons} lessons</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-brand-primary" />
                              <span className="text-sm text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What You'll Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-brand-primary">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Save ₹{((product.originalPrice || 0) - product.price).toLocaleString()}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <Button size="lg" className="w-full bg-gradient-primary">
                      Enroll Now
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Preview Course
                    </Button>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Start Date</span>
                        <span className="text-sm font-medium">{product.startDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Duration</span>
                        <span className="text-sm font-medium">{product.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Total Lessons</span>
                        <span className="text-sm font-medium">{product.totalLessons}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Projects</span>
                        <span className="text-sm font-medium">{product.totalProjects}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Certificate</span>
                        <div className="flex items-center gap-1">
                          <Trophy className="h-4 w-4 text-brand-accent" />
                          <span className="text-sm font-medium">Included</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>

                    <div className="bg-accent/20 rounded-lg p-4 border border-brand-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="h-5 w-5 text-brand-accent" />
                        <span className="font-medium text-sm">Money Back Guarantee</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        30-day money back guarantee if you're not satisfied
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;