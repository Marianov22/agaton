'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mama de Mariano",
      role: "Usuario frecuente",
      content: "Pipón ha cambiado la forma en que como fuera. Ahorro dinero y ayudo al medio ambiente al mismo tiempo. ¡Es increíble!",
      avatar: "/gisel.png"
    },
    {
      name: "Alejo",
      role: "Alejito pero con bigotes",
      content: "Como propietario de un restaurante, Pipón nos ha ayudado a reducir el desperdicio de alimentos y a llegar a nuevos clientes. Una plataforma fantástica.",
      avatar: "/alejobigote.jpg"
    },
    {
      name: "Laura Martínez",
      role: "Persona creada con IA, ah re",
      content: "Pipón está haciendo una diferencia real en la lucha contra el desperdicio de alimentos. Es una solución innovadora para un problema global.",
      avatar: "/fotoIA.jpg"
    }
  ]

  return (
    <section className="py-20 bg-[#f8fdf8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2b49] mb-12">
          Lo que dicen nuestros usuarios 100% reales
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

