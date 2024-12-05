'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-[#fff5f0] to-[#fff]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b49] leading-tight">
              Salva el planeta haciendo lo que más amas. Comer con Pipón.
            </h1>
            
            <p className="text-lg text-gray-600">
              Compra comida premium y deliciosa no vendida a precios imbatibles en Pipón, y ayuda a revertir el cambio climático, ¡una comida a la vez!
            </p>
            
            <div className="flex gap-4">
              <Button
                onClick={() => {
                  document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Unirse como negocio
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="#">
                <Image
                  src="/available_appstore.png"
                  alt="Descarga en App Store"
                  width={200}
                  height={60}
                />
              </Link>
              
              <Link href="#">
                <Image
                  src="/available_playstore.png"
                  alt="Descarga en Play Store"
                  width={200}
                  height={60}
                />
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/placeholder.svg?height=100&width=100"
                  alt="App del Día"
                  width={100}
                  height={100}
                />
                <span className="text-sm text-gray-600">APP DEL AÑO (ah re mentiroso)</span>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Disponible solo en Argentina (por ahora)</p>
                <p className="text-sm text-gray-600">✅ +500,000 héroes de la comida en Pipón</p>
                <p className="text-sm text-gray-600">⭐ 4.8 calificación en las tiendas de aplicaciones</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Persona con bolsa de Pipón"
              width={500}
              height={600}
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

