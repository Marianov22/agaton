import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Vultur Techlab SA. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-600">
              Pipón es una marca registrada de Vultur Techlab SA.
            </p>
          </div>
          <nav className="flex space-x-4">
            <Link href="/terminos-y-condiciones" className="hover:text-gray-300">
              Términos y condiciones
            </Link>
            <Link href="/privacidad" className="hover:text-gray-400">
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </div>
      <div className="footer">
</div>
    </footer>
  )
}

