'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  
  const testimonials = [
    {
      name: "Mama de Mariano",
      role: "Usuario frecuente",
      content: "Pipón ha cambiado la forma en que como fuera. Ahorro dinero y ayudo al medio ambiente al mismo tiempo. ¡Es increíble!",
      avatar: "/gisel.png",
      rating: 5
    },
    {
      name: "Alejo",
      role: "Alejito pero con bigotes",
      content: "Como propietario de un restaurante, Pipón nos ha ayudado a reducir el desperdicio de alimentos y a llegar a nuevos clientes. Una plataforma fantástica.",
      avatar: "/alejobigote.jpg",
      rating: 5
    },
    {
      name: "Laura Martínez",
      role: "Persona creada con IA, ah re",
      content: "Pipón está haciendo una diferencia real en la lucha contra el desperdicio de alimentos. Es una solución innovadora para un problema global.",
      avatar: "/fotoIA.jpg",
      rating: 5
    },
    // Agrega más testimonios aquí...
        // Segundo grupo (duplicados)
        {
          name: "Mama de Mariano",
          role: "Usuario frecuente",
          content: "Pipón ha cambiado la forma en que como fuera. Ahorro dinero y ayudo al medio ambiente al mismo tiempo. ¡Es increíble!",
          avatar: "/gisel.png",
          rating: 5
        },
        {
          name: "Alejo",
          role: "Alejito pero con bigotes",
          content: "Como propietario de un restaurante, Pipón nos ha ayudado a reducir el desperdicio de alimentos y a llegar a nuevos clientes. Una plataforma fantástica.",
          avatar: "/alejobigote.jpg",
          rating: 5
        },
        {
          name: "Laura Martínez",
          role: "Persona creada con IA, ah re",
          content: "Pipón está haciendo una diferencia real en la lucha contra el desperdicio de alimentos. Es una solución innovadora para un problema global.",
          avatar: "/fotoIA.jpg",
          rating: 5
        }
    ]
  

  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-20 bg-[#f8fdf8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2b49] mb-12">
          Lo que dicen nuestros usuarios 100% reales
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Botón Anterior */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carrusel */}
          <div className="overflow-hidden">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentPage}
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -1000, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-3 gap-8"
              >
                {testimonials
                  .slice(
                    currentPage * testimonialsPerPage,
                    (currentPage + 1) * testimonialsPerPage
                  )
                  .map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center space-x-2 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-red-500">★</span>
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                      <div className="flex items-center space-x-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={120}
                          height={120}
                          className="rounded-full object-cover w-[100px] h-[100px]"
                        />
                        <div>
                          <p className="font-semibold text-[#1a2b49]">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}