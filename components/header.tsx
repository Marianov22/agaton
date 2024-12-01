'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#4CD964]">
            Pipón
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              For Consumers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              For Businesses
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Career
            </Link>
            
            <Button variant="outline" className="border-[#4CD964] text-[#4CD964] hover:bg-[#4CD964] hover:text-white">
              UNIRSE COMO TIENDA
            </Button>
            <Button className="bg-[#4CD964] text-white hover:bg-[#3cb751]">
              OBTENER LA APP
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

