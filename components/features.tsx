'use client'

import { ShoppingBag, Leaf, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-[#4CD964]" />,
      title: "Compra comida de calidad",
      description: "Accede a alimentos premium de restaurantes y tiendas locales a precios increíbles con Pipón."
    },
    {
      icon: <Leaf className="h-10 w-10 text-[#4CD964]" />,
      title: "Salva el planeta",
      description: "Ayuda a reducir el desperdicio de alimentos y combate el cambio climático con cada comida en Pipón."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#4CD964]" />,
      title: "Ahorra dinero",
      description: "Disfruta de descuentos de hasta el 70% en tus restaurantes y tiendas favoritas con Pipón."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#1a2b49] mb-12"
        >
          ¿Para que sirve Pipón?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

