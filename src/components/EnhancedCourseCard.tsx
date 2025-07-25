import { motion } from 'framer-motion';
import { Star, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Course = {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  students: string;
  rating: number;
  popular?: boolean;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  skills?: string[];
};

interface EnhancedCourseCardProps {
  course: Course;
}

export function EnhancedCourseCard({ course }: EnhancedCourseCardProps) {
  const {
    title,
    description,
    price,
    originalPrice,
    students,
    rating,
    popular = false,
    duration = '8 weeks',
    level = 'Intermediate',
    skills = ['React', 'Node.js', 'TypeScript', 'MongoDB']
  } = course;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="h-40 bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              {title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
          {popular && (
            <div className="absolute top-4 right-4 z-20">
              <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold px-3 py-1 rounded-full shadow-md">
                Most Popular
              </Badge>
            </div>
          )}
        </div>

        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {level}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          <CardTitle className="group-hover:text-brand-primary dark:group-hover:text-primary transition-colors line-clamp-2 h-14">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 h-12">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="space-y-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>{duration} • {students} students</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {skills.slice(0, 3).map((skill, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{skills.length - 3} more
                </Badge>
              )}
            </div>

            <div className="pt-2">
              <ul className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {i === 1 && 'Hands-on projects with real-world applications'}
                      {i === 2 && 'Mentor support and code reviews'}
                      {i === 3 && 'Certificate of completion'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-start border-t pt-4">
          <div className="w-full flex justify-between items-center mb-4">
            <div>
              <span className="text-xl font-bold text-brand-primary dark:text-primary">
                {price}
              </span>
              {originalPrice && (
                <span className="ml-2 text-sm text-muted-foreground line-through">
                  {originalPrice}
                </span>
              )}
            </div>
            <Button size="sm" variant="no-hover">
              Enroll Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="w-full">
            <div className="text-xs text-muted-foreground flex items-center">
              <Award className="h-3 w-3 mr-1" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
