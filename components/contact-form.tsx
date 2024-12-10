'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    business: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      if (!formData.email || !formData.message) {
        throw new Error('Por favor completa todos los campos');
      }
      // ... resto del código
    } catch (error) {
      // Manejar el error
    }
  }

  return (
    <section id="contactForm" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-[#1a2b49] mb-8">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="w-full"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono Celular
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full"
                placeholder="Tu teléfono"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Localidad
              </label>
              <Input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full"
                placeholder="Tu localidad"
              />
            </div>

            <div>
              <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Negocio
              </label>
              <Input
                type="text"
                id="business"
                name="business"
                required
                value={formData.business}
                onChange={(e) => setFormData({...formData, business: e.target.value})}
                className="w-full"
                placeholder="Nombre de tu negocio"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full"
                placeholder="Tu mensaje"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4CD964] hover:bg-[#3cb751] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

