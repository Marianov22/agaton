import Image from 'next/image'

export default function Featured() {
  const logos = [
    { name: "South China Morning Post", width: 150 },
    { name: "ST", width: 100 },
    { name: "Now TV", width: 120 },
    { name: "ABC", width: 80 },
    { name: "Inside Retail", width: 130 },
    { name: "Asia Tech Daily", width: 140 },
    { name: "ASEAN NOW", width: 130 },
    { name: "Tech in Asia", width: 120 },
  ]

  return (
    <section className="py-12 bg-[#f8fdf8]">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">Aparecemos en</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={`/placeholder.svg?height=50&width=${logo.width}`}
              alt={logo.name}
              width={logo.width}
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

