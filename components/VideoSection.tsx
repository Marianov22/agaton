import { useState } from 'react';

const VideoSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-gray-100/[0.04] bg-[length:16px_16px]" />
      
      <div className="relative container px-4 mx-auto py-24">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="text-center">
            <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-widest text-gray-900 uppercase rounded-full bg-gray-100">
              Video
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Conocé Agatón en acción
            </h2>
            <p className="text-gray-600 text-lg">
              Descubrí cómo nuestra plataforma puede ayudarte
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video de Agaton"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 