import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/layout/Container'
import Link from 'next/link'
import { Check, X } from 'lucide-react'

export const metadata = {
  title: 'Pricing - Quikah',
  description: 'Choose the perfect plan for your business or personal needs. Transparent pricing with no hidden fees.',
}

export default function PricingPage() {
  const businessPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Up to 10 customer connections per month',
        'Basic profile customization',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      limitations: [
        'No priority matching',
        'Limited customer insights',
        'No dedicated support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses that need more connections',
      features: [
        'Up to 50 customer connections per month',
        'Advanced profile customization',
        'Priority customer matching',
        'Detailed analytics and insights',
        'Phone & email support',
        'Customer review management',
        'Integration with CRM tools'
      ],
      limitations: [
        'No dedicated account manager'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large businesses with high-volume needs',
      features: [
        'Unlimited customer connections',
        'Custom profile design',
        'Priority matching & support',
        'Advanced analytics & reporting',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'API access',
        '24/7 phone support'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const customerPlan = {
    name: 'For Customers',
    price: 'Free',
    period: 'forever',
    description: 'Always free for customers looking for businesses',
    features: [
      'Unlimited business searches',
      'Verified business profiles',
      'Direct messaging with businesses',
      'Review and rating system',
      'Mobile app access',
      'Customer support'
    ]
  }

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All business plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Is customer access really free?',
      answer: 'Yes, it\'s completely free for customers to use our platform to find and connect with businesses.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. No questions asked.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent{' '}
              <span className="text-purple-600">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees, no surprises. Always free for customers.
            </p>
          </div>
        </Container>
      </section>

      {/* Customer Plan */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-green-800">
                  {customerPlan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-green-600">{customerPlan.price}</span>
                  <span className="text-green-600 ml-2">{customerPlan.period}</span>
                </div>
                <CardDescription className="text-green-700 mt-2">
                  {customerPlan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {customerPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/for-customers">Get Started Free</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Business Plans */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Business Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Grow your business with our flexible pricing options
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {businessPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-2 border-purple-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-center">
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
                    <Link href={plan.cta === 'Contact Sales' ? '/contact' : '/for-businesses'}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses and customers already using Quikah to create meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/for-businesses">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-purple-600">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
