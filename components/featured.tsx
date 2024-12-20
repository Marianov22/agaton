import Image from 'next/image'

export default function Featured() {
  const logos = [
    { name: "CFOstartup", width: 150, src: "/logos/cfologo.png" },
    { name: "Legalventures", width: 100, src: "/logos/legalventures.png" },
    { name: "Dia", width: 120, src: "/logos/Dia-logo.png" },
    { name: "ABC", width: 80, src: "/logos/pedidosya.png" },
    { name: "CFOstartup", width: 150, src: "/logos/cfologo.png" },
    { name: "Legalventures", width: 100, src: "/logos/legalventures.png" },
    { name: "Dia", width: 120, src: "/logos/Dia-logo.png" },
    { name: "ABC", width: 80, src: "/logos/pedidosya.png" },
  ]

  return (
    <section className="py-12 bg-[#f8fdf8] overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">Partners</p>
        <div className="relative flex overflow-x-hidden hover:[&>*]:pause">
          <div className="animate-marquee flex items-center space-x-4">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={50}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="animate-marquee2 flex items-center space-x-4 absolute top-0">
            {logos.map((logo, index) => (
              <Image
                key={`clone-${index}`}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={50}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

