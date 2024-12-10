'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const founders = [
  { name: "Mariano", role: "CEO", image: "/mariano.jpg" },
  { name: "Alejito", role: "CTO", image: "/alejito.png" },
  { name: "Nuki", role: "COO", image: "/Nuki.jpg" },
  { name: "Gino", role: "CFO", image: "/gino.jpg" },
  { name: "Gerundia", role: "CMO", image: "/gerundia.jpg" },
  { name: "Claude", role: "CIO", image: "/claude.jpg" }
]

export default function Founders() {
  return (
    <section id="founders" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#1a2b49] mb-12"
        >
          Los Amigos
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
              <div className="w-[200px] h-[200px] relative mb-4">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a2b49]">{founder.name}</h3>
              <p className="text-gray-600">{founder.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

