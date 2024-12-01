'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const founders = [
  { name: "Mariano", role: "CEO", image: "/images/founders/ana.jpg" },
  { name: "Alejito", role: "CTO", image: "/alejito.png" },
  { name: "Nuki", role: "COO", image: "/nuki.jpg" },
  { name: "Gino", role: "CFO", image: "/gino.jpg" },
  { name: "Gerundia", role: "CMO", image: "/images/founders/laura.jpg" },
  { name: "Claude", role: "CIO", image: "/images/founders/pedro.jpg" }
]

export default function Founders() {
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
          Nuestros Fundadores
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1a2b49]">{founder.name}</h3>
              <p className="text-gray-600">{founder.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

