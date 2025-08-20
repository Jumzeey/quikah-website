'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Container } from './Container'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { FullLogo } from '@/assets'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'For Businesses', href: '/for-businesses' },
    { name: 'For Customers', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQs', href: '#' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation Group */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="h-8 w-auto flex items-center relative" style={{ width: '120px' }}>
                  <Image 
                    src={FullLogo} 
                    alt="Quikah Logo" 
                    width={120}
                    height={32}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-8">
              <div className="flex items-baseline space-x-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                        isActive 
                          ? 'text-blue-600' 
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                          isActive 
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary-9 hover:bg-primary-9 rounded-full">
              Join Quikah for Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/pricing" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
