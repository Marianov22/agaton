'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#4CD964]">
            Pipón
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              Para que sirve Pipón?
            </Link>
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              Preguntas frecuentes
            </Link>
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              Equipo
            </Link>
            
            <Button
          variant="outline"
             className="border-[#4CD964] text-[#4CD964] hover:bg-[#4CD964] hover:text-white"
    onClick={() => {
             document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Registra tu Negocio
  </Button>
            <Button className="bg-[#4CD964] text-white hover:bg-[#3cb751]">
              Descarga la app!
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        <nav 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Para que sirve Pipón?
            </Link>
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Preguntas frecuentes
            </Link>
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Equipo
            </Link>
            
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-600 hover:text-gray-900"
            >
              Registra tu Negocio
            </Link>
            
            <Button className="w-full bg-[#4CD964] text-white hover:bg-[#3cb751]">
              Descarga la app!
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

