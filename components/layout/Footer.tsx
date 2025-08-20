import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
import { FullLogo, QRCode, GooglePlayBadge } from '@/assets/images'
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/assets/icons'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section - Company Information and Socials */}
            <div className="col-span-1">
              <div className="flex items-center mb-8">
                <Image src={FullLogo} alt="Quikah" width={108} height={38} />
              </div>
              <p className="text-gray-700 text-sm mb-12 max-w-xs">
                Quikah connects people to trusted services and gives businesses the tools to grow. Book, plan, message, and manage it all, right from your phone.
              </p>

              <div className="space-y-2 mb-12">
                <p className="text-gray-700 text-sm">hello@quikah.com</p>
                <p className="text-gray-700 text-sm">+234 801 234 5678</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-6">
                  FOLLOW US ON SOCIALS
                </h4>
                <div className="flex gap-2">
                  <Link href="#" className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Image src={LinkedInIcon} alt="LinkedIn" width={20} height={20} className="invert" />
                  </Link>
                  <Link href="#" className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Image src={InstagramIcon} alt="Instagram" width={20} height={20} className="invert" />
                  </Link>
                  <Link href="#" className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Image src={FacebookIcon} alt="Facebook" width={20} height={20} className="invert" />
                  </Link>
                  <Link href="#" className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Image src={XIcon} alt="X" width={20} height={20} className="invert" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Middle Section - Quick Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-6">
                QUICK LINKS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Link href="/for-businesses" className="block text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    For Businesses
                  </Link>
                  <Link href="/for-customers" className="block text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    For Customers
                  </Link>
                  <Link href="/pricing" className="block text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    Pricing
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link href="/faqs" className="block text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    Frequently Asked Questions
                  </Link>
                  <Link href="/help" className="block text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    Help Centre
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - App Download */}
            <div className="col-span-1">
              <div className="text-left">
                <div className="ml-32">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Supercharge your
                </h3>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  business today.
                </h3>
                <Link href="/download" className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-bold">
                  Download the app.
                </Link>
                </div>
                

                <div className="mt-6 mb-4">
                  <Image src={QRCode} alt="QR Code" width={120} height={120} className="mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">
                © Quikah {new Date().getFullYear()}. All Rights Reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/cookies" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Cookie Policy
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
