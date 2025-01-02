import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, location, business, message } = body;

    const data = await resend.emails.send({
      from: 'Pipon Form <onboarding@resend.dev>',
      to: ['mariano.vallendor@gmail.com'], // Reemplaza con tu email
      subject: 'Nuevo mensaje de contacto de Pipon',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Ubicación:</strong> ${location}</p>
        <p><strong>Negocio:</strong> ${business}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
  }
}