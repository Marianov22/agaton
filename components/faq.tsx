'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "¿Cómo funciona Pipón en el día a día?",
    answer: "Pipón es muy simple y solo toma 5 minutos por día:\n1. Cuando tengas excedentes de comida, actualizas tu stock de 'Bolsas Sorpresa'. La actualización puede ser manual o automática. La promoción de liquidación es del 50% mínimo.\n2. Los clientes buscan Bolsas Sorpresa y pagan a través de la app.\n3. En el horario que establezcas como 'horario feliz', los clientes retiran sus Bolsas Sorpresa de tu negocio. Empaca en el último momento cualquier producto excedente que necesite venderse.\n4. Recuperas costos hundidos, atraes nuevos clientes a tu negocio y ayudas al planeta."
  },
  {
    id: "02",
    question: "¿Qué debo poner en la bolsa sorpresa de mi negocio?",
    answer: "Puedes incluir cualquier producto alimenticio que esté en buen estado pero que preveas que no podrás vender al precio regular. La clave es mantener una buena calidad mientras ofreces un valor excepcional a los clientes."
  },
  {
    id: "03",
    question: "¿Cómo recibirán los clientes sus pedidos?",
    answer: "Los clientes retirarán sus pedidos directamente en tu local durante el 'horario feliz' que hayas establecido. Esto te permite entregar los productos en el momento óptimo y conocer a tus nuevos clientes."
  },
  {
    id: "04",
    question: "¿Qué pasa si no tengo excedentes un día específico?",
    answer: "¡No hay problema! Puedes actualizar tu disponibilidad diariamente. Si un día no tienes excedentes, simplemente no publicas bolsas sorpresa para ese día."
  },
  {
    id: "05",
    question: "¿El negocio debe pagar o gestionar el servicio de entrega?",
    answer: "No, todos los pedidos son con retiro en el local. No necesitas gestionar entregas ni pagar servicios de delivery."
  }
]

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="faq" className="py-20 bg-[#f8fdf8]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full flex items-start p-4 bg-[#e1f7e1] rounded-lg hover:bg-[#d0f3d0] transition-colors duration-200"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#c0eec0] rounded-lg mr-4">
                  <span className="text-2xl font-bold">{faq.id}</span>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-600 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 