'use client'

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-[#4CD964] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¡Únete a la revolución alimentaria de Pipón hoy!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Descarga la app Pipón ahora y comienza a disfrutar de comida deliciosa mientras ayudas al planeta.
        </p>
        <Button className="bg-white text-[#4CD964] hover:bg-gray-100 text-lg px-8 py-3">
          DESCARGAR PIPÓN
        </Button>
      </div>
    </section>
  )
}

