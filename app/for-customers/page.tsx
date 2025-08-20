import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/layout/Container'
import { TestimonialSlider } from '@/components/ui/TestimonialSlider'
import Link from 'next/link'
import { Search, Shield, Clock, Star, MapPin, Phone } from 'lucide-react'

export const metadata = {
  title: 'For Customers - Quikah',
  description: 'Find trusted businesses and services that match your exact needs with Quikah\'s platform.',
}

export default function ForCustomersPage() {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Smart Matching',
      description: 'Our AI finds businesses that perfectly match your specific needs and preferences.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Verified Businesses',
      description: 'All businesses are thoroughly vetted and verified for quality and reliability.'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: 'Instant Connections',
      description: 'Connect with businesses immediately and get responses within hours.'
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: 'Rated & Reviewed',
      description: 'See real reviews and ratings from other customers before you choose.'
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title: 'Local & Remote',
      description: 'Find businesses in your area or connect with remote service providers.'
    },
    {
      icon: <Phone className="h-8 w-8 text-teal-600" />,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated customer support team.'
    }
  ]

  const industries = [
    'Home Services', 'Professional Services', 'Health & Wellness', 'Technology', 'Education', 'Legal',
    'Financial Services', 'Marketing', 'Design & Creative', 'Consulting', 'Automotive', 'Real Estate'
  ]

  const steps = [
    {
      step: '1',
      title: 'Tell Us What You Need',
      description: 'Describe your requirements and preferences in detail.'
    },
    {
      step: '2',
      title: 'Get Matched',
      description: 'Our AI algorithm finds the best businesses for your needs.'
    },
    {
      step: '3',
      title: 'Connect & Choose',
      description: 'Review matches, connect with businesses, and make your choice.'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find the Perfect{' '}
              <span className="text-green-600">Business</span> for Your Needs
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with verified, high-quality businesses that match your exact requirements. Save time and get the best service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700">
                <Link href="/pricing">Find Businesses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Customers Choose Quikah
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make finding the right business simple, safe, and efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Categories */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Businesses in Any Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From home services to professional consulting, we connect you with the right experts.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <p className="font-medium text-gray-900">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Get Started Steps */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Finding the perfect business has never been easier
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Customers Say About Us
            </h2>
          </div>
          <TestimonialSlider type="customer" />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of customers who have found their ideal business partners through Quikah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/pricing">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/faqs">Have Questions?</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
