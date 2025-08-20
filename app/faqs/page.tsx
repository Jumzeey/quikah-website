import { Container } from '@/components/layout/Container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'FAQs - Quikah',
  description: 'Find answers to frequently asked questions about Quikah\'s platform, pricing, and services.',
}

export default function FAQsPage() {
  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What is Quikah?',
          answer: 'Quikah is a platform that connects businesses with their ideal customers. We use advanced AI matching to ensure businesses find customers who are genuinely interested in their services, and customers find businesses that perfectly match their needs.'
        },
        {
          question: 'How does Quikah work?',
          answer: 'Businesses create profiles showcasing their services, expertise, and location. Customers describe what they\'re looking for. Our AI algorithm matches them based on compatibility, location, budget, and specific requirements. Both parties can then connect directly through our platform.'
        },
        {
          question: 'Is Quikah available in my area?',
          answer: 'Quikah is currently available in major cities across the United States and Canada, with plans to expand internationally. We support both local and remote service connections, so geography isn\'t always a limitation.'
        },
        {
          question: 'How is Quikah different from other platforms?',
          answer: 'Unlike directory-based platforms, Quikah uses intelligent matching to create quality connections. We verify all businesses, provide detailed analytics, and focus on creating meaningful relationships rather than just leads.'
        }
      ]
    },
    {
      title: 'For Businesses',
      faqs: [
        {
          question: 'How much does it cost for businesses?',
          answer: 'We offer three business plans: Starter ($29/month), Professional ($79/month), and Enterprise ($199/month). All plans include a 14-day free trial with no credit card required.'
        },
        {
          question: 'How do I get verified as a business?',
          answer: 'Our verification process includes business license verification, background checks, insurance verification (where applicable), and reference checks. The process typically takes 2-3 business days.'
        },
        {
          question: 'What types of businesses can join?',
          answer: 'We welcome businesses from all industries including professional services, home services, healthcare, technology, legal, financial services, and more. Both B2B and B2C businesses can benefit from our platform.'
        },
        {
          question: 'How many customers can I connect with?',
          answer: 'This depends on your plan. Starter allows up to 10 connections per month, Professional allows up to 50, and Enterprise offers unlimited connections.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and we offer a 30-day money-back guarantee.'
        }
      ]
    },
    {
      title: 'For Customers',
      faqs: [
        {
          question: 'Is it really free for customers?',
          answer: 'Yes, absolutely! Customers can use Quikah completely free forever. This includes searching for businesses, viewing profiles, connecting with businesses, and using our mobile app.'
        },
        {
          question: 'How do I know businesses are trustworthy?',
          answer: 'All businesses on Quikah go through our rigorous verification process. We check business licenses, insurance, references, and conduct background checks. Plus, you can see reviews and ratings from other customers.'
        },
        {
          question: 'How quickly will I hear back from businesses?',
          answer: 'Most businesses respond within 2-4 hours during business hours. Our platform encourages quick response times, and we track response rates as part of business performance metrics.'
        },
        {
          question: 'Can I connect with businesses outside my area?',
          answer: 'Yes! Many services can be provided remotely. You can specify whether you need local services or are open to remote providers when creating your request.'
        },
        {
          question: 'What if I\'m not satisfied with a business?',
          answer: 'We have a comprehensive review system and customer support team. If you have issues with a business, you can report them through our platform, and we take all complaints seriously.'
        }
      ]
    },
    {
      title: 'Technical & Support',
      faqs: [
        {
          question: 'Is there a mobile app?',
          answer: 'Yes! We have mobile apps for both iOS and Android. You can download them from the App Store or Google Play Store. All features are available on mobile.'
        },
        {
          question: 'How do I contact customer support?',
          answer: 'You can reach our support team via email, live chat (available 24/7), or phone during business hours. Enterprise customers get dedicated account managers.'
        },
        {
          question: 'Do you integrate with other tools?',
          answer: 'Yes, we integrate with popular CRM systems, calendar applications, and communication tools. Professional and Enterprise plans include integration support.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use enterprise-grade security measures including SSL encryption, secure data centers, and regular security audits. We\'re GDPR compliant and take privacy seriously.'
        },
        {
          question: 'Can I export my data?',
          answer: 'Yes, you can export your connection history, messages, and analytics data at any time. We believe your data belongs to you.'
        }
      ]
    },
    {
      title: 'Billing & Payments',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us within 30 days for a full refund.'
        },
        {
          question: 'Do you offer discounts for annual payments?',
          answer: 'Yes! Annual subscriptions receive a 20% discount compared to monthly billing. This discount is automatically applied when you choose annual billing.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.'
        },
        {
          question: 'Do you offer enterprise or volume discounts?',
          answer: 'Yes, we offer custom pricing for large organizations or multiple business locations. Contact our sales team to discuss enterprise options.'
        }
      ]
    }
  ]

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="text-indigo-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about Quikah. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-semibold text-gray-900">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">For Businesses</h3>
                <p className="mb-6 opacity-90">
                  Connect with customers who need your services
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/for-businesses">Get Started</Link>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">For Customers</h3>
                <p className="mb-6 opacity-90">
                  Find trusted businesses for your needs
                </p>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  <Link href="/for-customers">Find Businesses</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
