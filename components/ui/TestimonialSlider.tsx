'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

interface TestimonialSliderProps {
  type: 'business' | 'customer'
}

const businessTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Solutions',
    content: 'Quikah has transformed how we connect with customers. Our lead quality has improved by 300% and we\'ve seen a 150% increase in conversions.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthCorp',
    content: 'The platform is incredibly intuitive. We went from struggling to find customers to having a steady stream of qualified leads within weeks.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Creative Agency Plus',
    content: 'What I love most is the quality of matches. Every customer we connect with through Quikah is genuinely interested in our services.',
    rating: 5
  }
]

const customerTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'David Thompson',
    role: 'Small Business Owner',
    company: 'Local Restaurant',
    content: 'Finding the right marketing agency was so easy with Quikah. They matched me with exactly what I needed, and the results speak for themselves.',
    rating: 5
  },
  {
    id: 2,
    name: 'Lisa Park',
    role: 'Homeowner',
    company: '',
    content: 'I needed a reliable contractor for my home renovation. Quikah connected me with verified professionals who delivered exceptional work.',
    rating: 5
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Startup Founder',
    company: 'InnovateTech',
    content: 'The legal services I found through Quikah were exactly what my startup needed. Professional, affordable, and perfectly matched to our requirements.',
    rating: 5
  }
]

export function TestimonialSlider({ type }: TestimonialSliderProps) {
  const testimonials = type === 'business' ? businessTestimonials : customerTestimonials
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <Card className="p-8 lg:p-12">
        <CardContent className="text-center">
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-lg lg:text-xl text-gray-700 mb-8 italic">
            "{testimonials[currentIndex].content}"
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 font-semibold text-lg">
                {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">
                {testimonials[currentIndex].role}
                {testimonials[currentIndex].company && ` at ${testimonials[currentIndex].company}`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
