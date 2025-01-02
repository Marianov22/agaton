import Image from 'next/image'

export default function Featured() {
  const logos = [
    { name: "CFOstartup", width: 120, height: 40, src: "/Logos/cfologo.png" },
    { name: "Legalventures", width: 120, height: 40, src: "/Logos/legalventures.png" },
    { name: "Dia", width: 120, height: 40, src: "/Logos/Dia-Logo.png" },
    { name: "ABC", width: 120, height: 40, src: "/Logos/pedidosya.png" }
  ]

  return (
    <section className="py-12 bg-[#f8fdf8] overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">Partners</p>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite] md:animate-[marquee_45s_linear_infinite] space-x-8">
            {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="opacity-70 hover:opacity-100 transition-opacity object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
