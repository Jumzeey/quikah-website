'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/layout/Container'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Users, TrendingUp, Shield, Clock, Target, Star, ChevronLeft, ChevronRight, ArrowRight, Plus, Minus } from 'lucide-react'
import {
  GooglePlayBadge,
  Hero,
  Gradients,
  ctoGradients,
  ServiceList1,
  Product1,
  Product2,
  ProductDetails,
  ServiceList2,
  teamMember,
  Invoice1,
  Invoice2,
  Invoice3,
  Invoice4,
  bookingNotification,
  bookingNotification2,
  Chat1,
  Chat2,
  Chat3,
  Chat4,
  membership1,
  membership2,
  membership3,
  Review1,
  Review2,
  Review3,
  restaurant,
  hotel,
  salon,
  clinic,
  event,
  cleaning,
  fork,
  glow,
  clip,
  serene,
  stayzen,
  tidynest,
  quickmed,
  freshfit,
  Phones,
} from '@/assets/images'
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function ForBusinessesContent() {
  // Animation variants
  const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay: 1.2 + (index * 0.3),
        ease: "easeOut"
      }
    })
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay: index * 0.4,
        ease: "easeOut"
      }
    })
  }

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Customer Discovery',
      description: 'Find and connect with customers who are actively looking for your services.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Growth Analytics',
      description: 'Track your performance and optimize your customer acquisition strategy.'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: 'Verified Leads',
      description: 'All customer leads are verified to ensure quality and reduce spam.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'Real-time Matching',
      description: 'Get matched with customers instantly when they need your services.'
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: 'Targeted Reach',
      description: 'Reach customers in your specific industry and location.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-600" />,
      title: 'Easy Management',
      description: 'Manage all your customer interactions from one simple dashboard.'
    }
  ]

  const featureList = [
    {
      title: 'Set up and get running fast',
      description: 'Easily list your business, manage your services, and allow customers to discover and book anytime. With Quikah, everything from listing to communication and scheduling happens in one place, no website needed.',
      buttonText: 'Join Quikah for Free',
      imagePosition: 'right',
      images: {
        type: 'single',
        main: ServiceList1
      }
    },
    {
      title: 'Add & manage products and services',
      description: 'Keep your service offerings and product catalog organized and up to date, so customers always see what\'s available. Never miss a request. Customers can book your services anytime, even while you\'re away.',
      buttonText: 'Join Quikah for Free',
      imagePosition: 'left',
      images: {
        type: 'multiple',
        main: ServiceList1, // Main mobile app interface
        overlays: [
          { src: Product1, position: 'top-right', size: 'medium' },
          { src: Product2, position: 'middle-right', size: 'medium' },
          { src: ProductDetails, position: 'bottom-left', size: 'large' }
        ]
      }
    },
    {
      title: 'Grow your customer base',
      description: 'Reach new customers through our platform, get reviews and ratings, and build your reputation. Our marketing tools help you expand your business reach.',
      buttonText: 'Start Growing',
      imagePosition: 'right',
      images: {
        type: 'single',
        main: null
      }
    }
  ]

  const industries = [
    'Healthcare', 'Technology', 'Finance', 'Retail', 'Education', 'Real Estate',
    'Food & Beverage', 'Automotive', 'Legal Services', 'Marketing', 'Construction', 'Consulting'
  ]

  const steps = [
    {
      step: '1',
      title: 'Create Your Profile',
      description: 'Set up your business profile with services, location, and expertise.'
    },
    {
      step: '2',
      title: 'Get Matched',
      description: 'Our AI algorithm matches you with customers looking for your services.'
    },
    {
      step: '3',
      title: 'Start Growing',
      description: 'Connect with customers and grow your business with quality leads.'
    }
  ]

  const businessCategories = [
    {
      title: 'Restaurants & Cafés',
      description: 'Accept reservations, manage peak hours, and showcase your menu.',
      image: restaurant,
    },
    {
      title: 'Hotels & Short-Stays',
      description: 'Simplify your guest bookings and communication from one app.',
      image: hotel,
    },
    {
      title: 'Barbershops & Salons',
      description: 'Fill your calendar, reduce no-shows, and stay in touch with your clients.',
      image: salon,
    },
    {
      title: 'Clinics & Wellness Providers',
      description: 'Make it easier for clients to schedule and review appointments securely.',
      image: clinic,
    },
    {
      title: 'Event Planners & Vendors',
      description: 'Handle bookings, chats, and payments—all in one place.',
      image: event,
    },
    {
      title: 'Home & Cleaning Services',
      description: 'Let customers book your services on the go with real-time availability.',
      image: cleaning,
    },
  ];

  const getStartedSteps = [
    {
      number: '1',
      title: 'Create a free business profile',
      description: 'Add your services, location, hours, and images right from your phone.'
    },
    {
      number: '2',
      title: 'Start receiving and delighting customers',
      description: 'Set your availability, receive bookings 24/7 and get paid with ease.'
    },
    {
      number: '3',
      title: 'Engage customers & build loyalty',
      description: 'Chat directly, collect reviews, and turn new customers into regulars.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Since joining Quikah, our bookings have doubled. It's easy to use, and our customers love the convenience.",
      author: "Dami Ayodele",
      title: "CEO, Studio Luxe Hair Salon, Victoria Island",
      rating: 4,
      image: "/api/placeholder/300/400" // Placeholder for now
    },
    {
      id: 2,
      quote: "Quikah has transformed how we manage our appointments. The automated reminders have reduced no-shows by 80%.",
      author: "Sarah Johnson",
      title: "Owner, Glow & Shear Studio, Lekki",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      quote: "Our revenue increased by 150% within 3 months of using Quikah. The customer management features are incredible.",
      author: "Michael Chen",
      title: "Manager, Clip Kings Barbershop, Ikoyi",
      rating: 5,
      image: "/api/placeholder/300/400"
    },
    {
      id: 4,
      quote: "The best decision we made for our spa. Quikah handles everything from bookings to payments seamlessly.",
      author: "Aisha Rahman",
      title: "Director, Serene Moments Spa, Victoria Island",
      rating: 4,
      image: "/api/placeholder/300/400"
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  const businessLogos = [
    { name: 'Fork & Flame', logo: fork, category: 'BISTRO' },
    { name: 'Glow & Shear', logo: glow, category: 'STUDIO' },
    { name: 'Clip Kings', logo: clip, category: 'BARBERSHOP' },
    { name: 'Serene Moments', logo: serene, category: 'SPA' },
    { name: 'StayZen', logo: stayzen, category: 'RETREATS' },
    { name: 'TidyNest', logo: tidynest, category: 'SOLUTIONS' },
    { name: 'QuickMeds', logo: quickmed, category: 'WELLNESS' },
    { name: 'FreshFit', logo: freshfit, category: 'MEALS' },
  ];

  const faqItems = [
    {
      id: 1,
      question: "How much does it cost to use Quikah as a business?",
      answer: "Quikah offers a free tier for businesses to get started. You can list your services, manage bookings, and communicate with customers without any subscription fees. For advanced features and dedicated support, we offer premium plans starting at $29/month."
    },
    {
      id: 2,
      question: "What types of businesses can register on Quikah?",
      answer: "Quikah is designed for service-based businesses including restaurants, hotels, salons, spas, clinics, event planners, cleaning services, and more. If you provide services that customers can book in advance, Quikah is perfect for you."
    },
    {
      id: 3,
      question: "Can I manage multiple locations or staff members from one account?",
      answer: "Yes! Quikah supports multi-location businesses and team management. You can add multiple branches, assign staff members to different locations, and manage all operations from one unified dashboard."
    },
    {
      id: 4,
      question: "How do customers find my business on Quikah?",
      answer: "Customers can discover your business through location-based search, category browsing, and our recommendation algorithm. Your business profile appears in search results when customers look for services in your area or category."
    },
    {
      id: 5,
      question: "What kind of support does Quikah offer business users?",
      answer: "We provide comprehensive support including 24/7 chat support, email assistance, video tutorials, and dedicated account managers for premium users. Our support team is always ready to help you succeed with Quikah."
    },
  ];

  return (
    <div className="bg-primary-2 -mt-16 pt-16 font-heading">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative h-screen">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-20">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center p-0.5 rounded-full bg-border-gradient"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white backdrop-blur-sm rounded-full text-sm font-medium text-blue-700">
                  Quikah for Businesses
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-5xl font-heading font-medium text-gray-12 leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
                >
                  Deliver Remarkable <br /> Customer Experiences. <br />
                  Every Time.
                </motion.h1>

                <motion.p
                  className="text-lg lg:text-xl font-light text-gray-400 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  Whether you&apos;re running a salon, restaurant, or clinic, Quikah helps you deliver 5-star service that keep customers coming back.
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="lg" className="text-lg px-8 py-4 bg-primary-9 hover:bg-primary-9 rounded-full w-[207px] h-[56px] gap-2 pr-[30px] pl-[30px]">
                    Join Quikah for Free
                  </Button>
                </motion.div>

                {/* Google Play Badge */}
                <motion.div
                  className="flex items-center gap-3 text-sm text-gray-600"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <Image src={GooglePlayBadge} className="h-6 w-auto" alt='playstore' />
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Mobile Mockups */}
            <motion.div
              className="relative lg:pl-8 z-10 overflow-visible"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="absolute -top-56 -right-10"
                initial={{ opacity: 0, y: 60, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Image
                  src={Hero}
                  alt='hero-image'
                  width={700}
                  height={500}
                  className="h-auto max-w-none"
                />
              </motion.div>
            </motion.div>
          </div>
        </Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
        >
          <Image src={Gradients} alt='gradient-bg' className='absolute bottom-0 z-12' />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, ease: "easeOut" }
                }
              }}
            >
              All the Tools to Deliver Great Experiences,
              <br />
              Built Into One App
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              Quikah simplifies your day-to-day so you can focus on delighting your customers.
            </motion.p>
          </div>

          {/* Feature List */}
          <div className="space-y-20">
            {/* Feature 1: Set up and get running fast */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={0}
                >
                  Set up and get running fast
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={1}
                >
                  Easily list your business, manage your services, and allow customers to discover and book anytime. With Quikah, everything from listing to communication and scheduling happens in one place, no website needed.
                </motion.p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={2}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-9 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium"
                  >
                    <Link href="/signup">Join Quikah for Free</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Image Area */}
              <div className="flex-1 relative">
                <div className="relative w-full max-w-xl mx-auto">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden p-8 min-h-[400px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={backgroundVariants}
                  >
                    <Image
                      src={ctoGradients}
                      alt="gradient background"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <motion.div
                        className="relative max-w-[280px] w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={imageVariants}
                      >
                        <Image
                          src={ServiceList1}
                          alt="Service List Interface"
                          className="w-full h-auto -mb-10"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Feature 2: Add & manage products and services */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={0}
                >
                  Add & manage products and services
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={1}
                >
                  Keep your service offerings and product catalog organized and up to date, so customers always see what's available. Never miss a request. Customers can book your services anytime, even while you're away.
                </motion.p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={2}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-9 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium"
                  >
                    <Link href="/signup">Join Quikah for Free</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Custom Image Layout */}
              <div className="flex-1 relative">
                <div className="relative w-full max-w-xl mx-auto">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden p-8 min-h-[500px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={backgroundVariants}
                  >
                    <Image
                      src={ctoGradients}
                      alt="gradient background"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    />

                    {/* Main Mobile App Interface */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <motion.div
                        className="absolute max-w-[280px] w-full top-20 left-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={imageVariants}
                      >
                        <Image
                          src={ServiceList1}
                          alt="Service List Interface"
                          className="w-full h-auto"
                        />
                      </motion.div>
                      <motion.div className="absolute top-28 right-4 z-30 flex flex-col">
                        {/* Product 1 Overlay - Top Right, stacked above main image */}
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ amount: 0.3 }}
                          variants={overlayVariants}
                          custom={0}
                        >
                          <Image
                            src={Product1}
                            alt="Product 1"
                            className="w-full h-auto"
                          />
                        </motion.div>

                        {/* Product 2 Overlay - Below Product 1, stacked above main image */}
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ amount: 0.3 }}
                          variants={overlayVariants}
                          custom={1}
                        >
                          <Image
                            src={Product2}
                            alt="Product 2"
                            className="w-full h-auto"
                          />
                        </motion.div>
                      </motion.div>

                      {/* Product Details Overlay - To the side, below the first two overlays */}
                      <motion.div
                        className="absolute top-64 right-5 z-30"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={overlayVariants}
                        custom={2}
                      >
                        <Image
                          src={ProductDetails}
                          alt="Product Details"
                          className="w-full h-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Feature 3: Grow your customer base */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={0}
                >
                  Manage multiple branches and team members
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={1}
                >
                  Run your operations smoothly across different locations. Add multiple branches, assign team members, and track activities all within the app.
                </motion.p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={2}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-9 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium"
                  >
                    <Link href="/signup">Join Quikah for Free</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Custom Image Layout */}
              <div className="flex-1 relative">
                <div className="relative w-full max-w-xl mx-auto">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden p-8 min-h-[500px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={backgroundVariants}
                  >
                    <Image
                      src={ctoGradients}
                      alt="gradient background"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    />

                    {/* Main Mobile App Interface */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <motion.div
                        className="absolute max-w-[280px] w-full top-28"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={imageVariants}
                      >
                        <Image
                          src={ServiceList2}
                          alt="Service List Interface"
                          className="w-full h-auto"
                        />
                      </motion.div>

                      {/* Team Members Overlay - On top of main image */}
                      <motion.div
                        className="absolute top-8 z-30"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={overlayVariants}
                        custom={0}
                      >
                        <Image
                          src={teamMember}
                          alt="Team Members"
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Feature 4: Generate invoices in seconds */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={0}
                >
                  Generate invoices in seconds
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={1}
                >
                  Create and send professional invoices right from your phone using the built-in invoice maker. Quick, clear, and trackable.
                </motion.p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={textVariants}
                  custom={2}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary-9 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium"
                  >
                    <Link href="/signup">Join Quikah for Free</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Custom Image Layout */}
              <div className="flex-1 relative">
                <div className="relative w-full max-w-xl mx-auto">
                  <motion.div
                    className="relative z-10 rounded-3xl overflow-hidden p-8 min-h-[500px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={backgroundVariants}
                  >
                    <Image
                      src={ctoGradients}
                      alt="gradient background"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    />

                    {/* Invoice Images Layout */}
                    <div className="relative h-full flex items-center justify-center">
                      {/* Main Invoice (Invoice1) - Centered */}
                      <motion.div
                        className="absolute max-w-[280px] w-full -top-8 -left-8  z-30 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={imageVariants}
                      >
                        <Image
                          src={Invoice1}
                          alt="Main Invoice"
                          className="w-full h-auto"
                        />
                      </motion.div>

                      {/* Invoice 2 - Top Right */}
                      <motion.div
                        className="absolute -top-8 right-2 z-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={overlayVariants}
                        custom={0}
                      >
                        <Image
                          src={Invoice2}
                          alt="Invoice 2"
                          className="w-full h-auto"
                        />
                      </motion.div>

                      {/* Invoice 3 - Bottom Right */}
                      <motion.div
                        className="absolute top-64 right-8 z-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={overlayVariants}
                        custom={1}
                      >
                        <Image
                          src={Invoice3}
                          alt="Invoice 3"
                          className="w-full h-auto"
                        />
                      </motion.div>

                      {/* Invoice 4 - Bottom Left */}
                      <motion.div
                        className="absolute top-28 -left-8 z-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={overlayVariants}
                        custom={2}
                      >
                        <Image
                          src={Invoice4}
                          alt="Invoice 4"
                          className="w-full h-auto"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-primary-3 relative">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-primary-11 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, ease: "easeOut" }
                }
              }}
            >
              <p className="text-primary-11 leading-[50px]">Smarter Tools for Stronger Customer Relationships</p>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-11 leading-relaxed font-heading font-light"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              Build trust, reduce no-shows, reward loyalty, and stay in sync with your customers.
            </motion.p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Reduce no-shows with upfront payments */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2, delay: 0.1, ease: "easeOut" }
                }
              }}
            >
              <div className="text-left">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.2, ease: "easeOut" }
                    }
                  }}
                >
                  Reduce no-shows with upfront payments
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.2, delay: 0.4, ease: "easeOut" }
                    }
                  }}
                >
                  Quikah's in-app payment system lets you secure reservations and reduce cancellations.
                </motion.p>

                {/* booking notification */}
                <motion.div
                  className="bg-gray-50 rounded-xl p-4 relative mx-auto h-96"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 1.4, delay: 0.8, ease: "easeOut" }
                    }
                  }}
                >
                  <motion.div
                    className="mb-4 z-20 absolute"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 1.2, delay: 1.2, ease: "easeOut" }
                      }
                    }}
                  >
                    <Image
                      src={bookingNotification}
                      alt="Booking Notification"
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* booking notification 2 */}
                  <motion.div
                    className="absolute top-8 left-16 z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 1.2, delay: 1.6, ease: "easeOut" }
                      }
                    }}
                  >
                    <Image
                      src={bookingNotification2}
                      alt="Booking Confirmation"
                      className="w-80 h-auto mx-auto"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2: Chat directly with customers */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chat directly with customers</h3>
                <p className="text-gray-600 mb-6">Answer questions, confirm details, and build loyalty with real-time messaging.</p>

                {/* Chat Interface */}
                <div className="bg-gray-50 rounded-xl px-12 pt-4">
                  <div className="bg-white rounded-t-2xl p-6 border-t border-l border-r border-gray-200">
                    <div className="space-y-4 flex flex-col items-center">
                      {/* Chat Message 1 */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={{
                          hidden: { opacity: 0, x: -30, scale: 0.9 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                          }
                        }}
                      >
                        <Image
                          src={Chat1}
                          alt="Chat Message 1"
                          className="w-64 h-auto"
                        />
                      </motion.div>

                      {/* Chat Message 2 */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={{
                          hidden: { opacity: 0, x: 30, scale: 0.9 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { duration: 1.0, delay: 0.6, ease: "easeOut" }
                          }
                        }}
                      >
                        <Image
                          src={Chat2}
                          alt="Chat Message 2"
                          className="w-64 h-auto"
                        />
                      </motion.div>

                      {/* Chat Message 3 */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={{
                          hidden: { opacity: 0, x: -30, scale: 0.9 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { duration: 1.0, delay: 1.0, ease: "easeOut" }
                          }
                        }}
                      >
                        <Image
                          src={Chat3}
                          alt="Chat Message 3"
                          className="w-64 h-auto"
                        />
                      </motion.div>

                      {/* Chat Message 4 */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={{
                          hidden: { opacity: 0, x: 30, scale: 0.9 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            transition: { duration: 1.0, delay: 1.4, ease: "easeOut" }
                          }
                        }}
                      >
                        <Image
                          src={Chat4}
                          alt="Chat Message 4"
                          className="w-64 h-auto"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Create loyalty membership plans */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
                }
              }}
            >
              <div className="text-left">
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.0, ease: "easeOut" }
                    }
                  }}
                >Create loyalty membership plans</motion.h3>
                <motion.p
                  className="text-gray-600 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                    }
                  }}
                >Reward loyal customers with exclusive membership plans offering discounts, priority booking, and perks tailored to your business.</motion.p>

                {/* Membership Plans */}
                <div className="bg-gray-50 rounded-xl p-4 relative h-96">
                  {/* Background Layer: Two Membership Plan Cards */}
                  <div className="grid grid-cols-2 gap-1 mb-6 relative z-10">
                    {/* Regular Plan Card */}
                    <motion.div
                      className="relative"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3 }}
                      variants={{
                        hidden: { opacity: 0, x: -30, scale: 0.9 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: { duration: 1.0, delay: 0.4, ease: "easeOut" }
                        }
                      }}
                    >
                      <Image
                        src={membership1}
                        alt="Regular Membership Plan"
                        className="w-full h-auto"
                      />
                    </motion.div>

                    {/* VIP Plan Card */}
                    <motion.div
                      className="relative"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3 }}
                      variants={{
                        hidden: { opacity: 0, x: 30, scale: 0.9 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: { duration: 1.0, delay: 0.6, ease: "easeOut" }
                        }
                      }}
                    >
                      <Image
                        src={membership2}
                        alt="VIP Membership Plan"
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>

                  {/* Foreground Layer: Active Members Card - Overlapping both plan cards */}
                  <motion.div
                    className="absolute top-40 left-1/2 transform -translate-x-1/2 z-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 1.0, delay: 0.8, ease: "easeOut" }
                      }
                    }}
                  >
                    <Image
                      src={membership3}
                      alt="Active Members"
                      className="w-auto h-auto top-40 left-1/2 transform -translate-x-1/2 z-20"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Track customer reviews and build trust */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
                }
              }}
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Track customer reviews and build trust</h3>
                <p className="text-gray-600 mb-6">Collect ratings and reviews to strengthen your reputation and win repeat customers.</p>

                {/* Review Card */}
                <div className="bg-gray-50 rounded-xl p-4 relative h-96">
                  {/* Backmost Card (Review 1) - Very back, slightly offset top-left */}
                  <motion.div
                    className="absolute top-2 left-36 transform -translate-x-1/2 z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                      }
                    }}
                  >
                    <Image
                      src={Review1}
                      alt="Review 1 - Background"
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* Middle Card (Review 2) - Most prominent, larger size */}
                  <motion.div
                    className="absolute top-8 left-28 transform -translate-x-1/2 z-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 1.0, delay: 0.6, ease: "easeOut" }
                      }
                    }}
                  >
                    <Image
                      src={Review2}
                      alt="Review 2 - Main Review"
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* Frontmost Card (Review 3) - Smallest, overlapping right side */}
                  <motion.div
                    className="absolute top-40 right-8 z-30"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 1.0, delay: 1.0, ease: "easeOut" }
                      }
                    }}
                  >
                    <Image
                      src={Review3}
                      alt="Review 3 - Reply Interface"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Business Categories Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, ease: "easeOut" }
                }
              }}
            >
              Perfect for Service-First Businesses
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              Whether you run a solo barbershop or manage a busy hotel, Quikah helps you get discovered, stay booked, and keep customers coming back.
            </motion.p>
          </div>

          {/* Business Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.1 * (index + 1), ease: "easeOut" }
                  }
                }}
              >
                <Card className="border border-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>


      {/* Get Started Steps Section */}
      <section className="py-20 bg-dark-blue-gradient">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, ease: "easeOut" }
                }
              }}
            >
              Get Started in 3 Simple Steps
            </motion.h2>
            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              List your business, customise your services, and start building real connections with your customers, all in minutes.
            </motion.p>
          </div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getStartedSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.3 + (index * 0.2), ease: "easeOut" }
                  }
                }}
              >
                <Card className="bg-[#2D3B63] border border-[#3A4A7A] rounded-xl p-8 text-center h-full">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-white mb-4 bg-step-number-gradient bg-clip-text text-transparent">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 1.0, delay: 0.9, ease: "easeOut" }
                }
              }}
            >
              <Button
                size="lg"
                className="bg-primary-9 hover:bg-primary-9 text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg"
              >
                Join Quikah for Free
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Meet Businesses Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, ease: "easeOut" }
                }
              }}
            >
              Meet Businesses Thriving with Quikah
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              From neighborhood favorites to rising brands, here are a few of the businesses growing with Quikah.
            </motion.p>
          </div>

          {/* Business Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {businessLogos.slice(0, 5).map((business, index) => (
              <motion.div
                key={business.name}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.1 * (index + 1), ease: "easeOut" }
                  }
                }}
              >
                <div className="mb-4">
                  <Image
                    src={business.logo}
                    className="w-full mx-auto mb-3"
                    alt={business.name}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 3 Centered Logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto mt-12">
            {businessLogos.slice(5).map((business, index) => (
              <motion.div
                key={business.name}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.6 + (0.1 * (index + 1)), ease: "easeOut" }
                  }
                }}
              >
                <div className="mb-4">
                  <Image
                    src={business.logo}
                    className="w-full mx-auto mb-3"
                    alt={business.name}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-testimonial-gradient relative">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, ease: "easeOut" }
                }
              }}
            >
              What Business Owners Are Saying
            </motion.h2>
            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                }
              }}
            >
              Real stories from businesses using Quikah to manage bookings, grow faster, and serve customers better.
            </motion.p>
          </div>

          {/* Testimonial Card */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={previousTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Testimonial Content */}
            <motion.div
              key={currentTestimonial.id}
              className="bg-[#2D3B63] rounded-2xl p-8 md:p-12 shadow-xl border border-[#3A4A7A]"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Section - Text */}
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${star <= currentTestimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="text-xl font-bold text-white mb-1">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-gray-300">
                      {currentTestimonial.title}
                    </div>
                  </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-64 h-80 rounded-xl overflow-hidden bg-gray-200">
                      {/* Placeholder for testimonial image */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Testimonial Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonialIndex
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text and CTA */}
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.0, ease: "easeOut" }
                  }
                }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Got Questions? We've Got Answers.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Find everything you need to know about getting started and growing your business with Quikah.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                  }
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full"
                >
                  See All FAQs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Right Side - FAQ Accordion */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.0, delay: 0.3, ease: "easeOut" }
                }
              }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.8,
                          delay: 0.3 + (index * 0.2),
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    <AccordionItem
                      value={`item-${item.id}`}
                      className="border border-gray-200 rounded-lg px-6 py-4 hover:border-gray-300 transition-colors"
                    >
                      <AccordionTrigger className="text-left text-gray-900 font-medium hover:no-underline group [&>svg]:hidden">
                        <span className="flex-1">{item.question}</span>
                        <div className="ml-4 flex-shrink-0">
                          <Plus className="w-5 h-5 text-gray-500 group-data-[state=open]:hidden transition-all" />
                          <Minus className="w-5 h-5 text-gray-500 hidden group-data-[state=open]:block transition-all" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <Container>
          {/* Gradient Container - Not Full Width */}
          <div className="bg-final-cta-gradient rounded-3xl pt-12 px-12 md:pt-16 md:px-16 relative max-w-6xl mx-auto">
            {/* Centered Content */}
            <div className="text-center mb-16 relative z-10">
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.0, ease: "easeOut" }
                  }
                }}
              >
                Deliver Better Service.
                <br />
                Keep Customers Coming Back.
              </motion.h2>

              <motion.p
                className="text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.0, delay: 0.2, ease: "easeOut" }
                  }
                }}
              >
                From bookings to communication, Quikah helps you stay organised while giving customers the seamless experience they expect.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.0, delay: 0.4, ease: "easeOut" }
                  }
                }}
              >
                <Button
                  size="lg"
                  className="bg-primary-9 hover:bg-primary-9 text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg mb-4"
                >
                  Join Quikah for Free
                </Button>

                <div className="text-white">
                  <p className="text-sm mb-2">Available on</p>
                  <Image src={GooglePlayBadge} alt="Google Play" className="h-8 mx-auto" />
                </div>
              </motion.div>
            </div>

            {/* Phone Mockups - Overlapping the gradient container */}
            <motion.div
              className="flex justify-center items-end space-x-8 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.0, delay: 0.6, ease: "easeOut" }
                }
              }}
            >
              <div className="relative">
                <Image
                  src={Phones}
                  alt="Quikah For Business App Screens"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
