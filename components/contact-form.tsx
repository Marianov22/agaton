'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!formData.email || !formData.message) {
        throw new Error('Por favor completa todos los campos requeridos');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        business: '',
        message: ''
      });

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Hubo un error al enviar el mensaje",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactForm" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold text-[#1a2b49] mb-4 relative">
            Vende tu <span className="relative inline-block">
              comida excedente
            </span>, ¡no la desperdicies!
          </h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span>
              Regístrate ahora y comienza a vender tu comida no vendida.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span>
              Sé visto como una marca sostenible y ecológica.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span>
              Accede a una nueva base de clientes.
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-[#1a2b49] mb-8">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#4CD964]"
                placeholder="Tu nombre"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <Input
                type="text"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#4CD964]"
                placeholder="Tu teléfono"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#4CD964]"
                placeholder="Tu correo electrónico"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                Negocio
              </label>
              <Input
                type="text"
                id="business"
                name="business"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#4CD964]"
                placeholder="Tu negocio"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#4CD964]"
                placeholder="Tu mensaje"
                onChange={handleChange}
              />
            </div>
            <div className="md:col-span-2 text-center">
              <Button
                type="submit"
                className="bg-[#4CD964] text-white px-4 py-2 rounded-md hover:bg-[#3cb751] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CD964]"
              >
                Enviar
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

