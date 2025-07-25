import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, ArrowRight, Filter } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Cohort' | 'Course' | 'Bootcamp';
  image: string;
  popular?: boolean;
}

const products: Product[] = [
  {
    id: '1',
    title: '100xDevs Cohort 3.0',
    description: 'Complete full-stack development program covering MERN stack, DevOps, and system design',
    price: 6999,
    originalPrice: 12999,
    rating: 4.9,
    students: 2500,
    duration: '6 months',
    level: 'Intermediate',
    category: 'Cohort',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
    popular: true
  },
  {
    id: '2',
    title: 'System Design Masterclass',
    description: 'Deep dive into system design concepts for tech interviews and real-world applications',
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    students: 1800,
    duration: '3 months',
    level: 'Advanced',
    category: 'Course',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'
  },
  {
    id: '3',
    title: 'DSA Problem Solving',
    description: 'Master data structures and algorithms with hands-on problem solving',
    price: 1999,
    rating: 4.7,
    students: 3200,
    duration: '4 months',
    level: 'Beginner',
    category: 'Course',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop'
  },
  {
    id: '4',
    title: 'Web3 Development Bootcamp',
    description: 'Learn blockchain development, smart contracts, and DeFi applications',
    price: 4999,
    originalPrice: 7999,
    rating: 4.6,
    students: 950,
    duration: '5 months',
    level: 'Advanced',
    category: 'Bootcamp',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop'
  },
  {
    id: '5',
    title: 'DevOps & Cloud Engineering',
    description: 'Master Docker, Kubernetes, AWS, and modern DevOps practices',
    price: 3499,
    rating: 4.8,
    students: 1450,
    duration: '4 months',
    level: 'Intermediate',
    category: 'Course',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop'
  },
  {
    id: '6',
    title: 'React Advanced Patterns',
    description: 'Advanced React concepts, patterns, and best practices for production apps',
    price: 1499,
    rating: 4.9,
    students: 2100,
    duration: '2 months',
    level: 'Advanced',
    category: 'Course',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop'
  }
];

const Products = () => {
  const [filter, setFilter] = useState<'All' | 'Cohort' | 'Course' | 'Bootcamp'>('All');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'students'>('rating');

  const filteredProducts = products
    .filter(product => filter === 'All' || product.category === filter)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'students') return b.students - a.students;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Courses & Programs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your career with hands-on courses designed by industry experts. 
              Join thousands of developers already building their future.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex gap-2">
                {['All', 'Cohort', 'Course', 'Bootcamp'].map((category) => (
                  <Button
                    key={category}
                    variant={filter === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(category as any)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-background border border-border rounded-md px-3 py-2 text-sm"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="students">Sort by Students</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-border/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 bg-brand-accent text-black">
                      Most Popular
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
                  >
                    {product.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs dark:text-black">
                      {product.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-brand-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{product.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{product.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-brand-primary">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <NavLink to={`/products/${product.id}`}>
                      <Button size="sm" className="group/btn bg-white text-black">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-card rounded-2xl p-12 border border-border/50">
              <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                Can't find what you're looking for?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our community and get personalized recommendations. 
                We're constantly adding new courses based on industry demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black">
                  Join Community
                </Button>
                <Button variant="outline" size="lg">
                  Request Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;