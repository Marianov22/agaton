'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Underline } from '@/components/Underline'

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
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b49] leading-tight">
                Salva el planeta haciendo lo que más amas. Comer con Pipón.
              </h1>
              <div className="absolute -bottom-4 w-full">
                <Underline />
              </div>
            </div>
            
            <p className="text-lg text-gray-600">
              Compra comida premium y deliciosa no vendida a precios imbatibles en Pipón, y ayuda a revertir el cambio climático, ¡una comida a la vez!
            </p>
            
        
            
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
                  src="/appoftheday.png"
                  alt="App del Día"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                <span className="text-sm text-gray-600">APP DEL DIA (ah re mentiroso)</span>
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
            className="relative -ml-8"
          >
            <Image
              src="/iPhone.jpg"
              alt="iphone"
              width={300}
              height={400}
              className="hidden md:block object-cover rounded-lg ml-auto mr-2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

