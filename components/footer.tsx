'use client'

import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#4CD964] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Título */}
          <h2 className="text-3xl font-bold text-center">
            Ready to become a Food Hero?
          </h2>

          {/* Botón */}
          <button className="bg-white text-[#4CD964] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Descarga Pipón
          </button>

          {/* Redes Sociales */}
          <div className="flex space-x-6">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-8 h-8" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-8 h-8" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-8 h-8" />
            </Link>
          </div>

          {/* Copyright y Links */}
          <div className="text-center space-y-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Vultur Techlab SA. Todos los derechos reservados.
            </p>
            <nav className="flex justify-center space-x-4 text-sm">
              <Link href="/terminos-y-condiciones" className="hover:underline">
                Términos y condiciones
              </Link>
              <Link href="/privacidad" className="hover:underline">
                Política de Privacidad
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

