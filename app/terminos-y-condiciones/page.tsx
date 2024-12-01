import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TerminosYCondiciones() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
      <div className="prose max-w-none">
        <p>Bienvenido a Pipón. Al utilizar nuestra aplicación, usted acepta los siguientes términos y condiciones:</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Uso de la Aplicación</h2>
        <p>Pipón es una plataforma que conecta a usuarios con restaurantes y tiendas locales para comprar alimentos no vendidos a precios reducidos. Al usar Pipón, usted se compromete a utilizar la aplicación de manera responsable y de acuerdo con todas las leyes aplicables.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Registro de Cuenta</h2>
        <p>Para utilizar Pipón, es necesario crear una cuenta. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Contenido del Usuario</h2>
        <p>Al publicar contenido en Pipón, usted garantiza que tiene los derechos necesarios para hacerlo y que dicho contenido no infringe los derechos de terceros.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitación de Responsabilidad</h2>
        <p>Pipón no se hace responsable de la calidad de los alimentos ofrecidos por los restaurantes y tiendas en la plataforma. Los usuarios deben usar su propio juicio al comprar y consumir alimentos.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Modificaciones</h2>
        <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la aplicación.</p>
        
        <p className="mt-8">Para cualquier pregunta o inquietud sobre estos términos y condiciones, por favor contáctenos a través de la aplicación.</p>
      </div>
      <Button asChild className="mt-8">
        <Link href="/">Volver a la página principal</Link>
      </Button>
    </div>
  )
}

