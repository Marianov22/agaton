'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      role: "Usuario frecuente",
      content: "Pipón ha cambiado la forma en que como fuera. Ahorro dinero y ayudo al medio ambiente al mismo tiempo. ¡Es increíble!",
      avatar: "/placeholder.svg?height=64&width=64"
    },
    {
      name: "Carlos Rodríguez",
      role: "Dueño de restaurante",
      content: "Como propietario de un restaurante, Pipón nos ha ayudado a reducir el desperdicio de alimentos y a llegar a nuevos clientes. Una plataforma fantástica.",
      avatar: "/placeholder.svg?height=64&width=64"
    },
    {
      name: "Laura Martínez",
      role: "Activista ambiental",
      content: "Pipón está haciendo una diferencia real en la lucha contra el desperdicio de alimentos. Es una solución innovadora para un problema global.",
      avatar: "/placeholder.svg?height=64&width=64"
    }
  ]

  return (
    <section className="py-20 bg-[#f8fdf8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2b49] mb-12">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
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

