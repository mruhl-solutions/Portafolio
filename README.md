# Portafolio — Matías Agustín Ruhl

Portafolio personal construido con Next.js (App Router), React, Tailwind CSS y Framer Motion.

## Empezar

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Configurar el formulario de contacto

El formulario de contacto envía los mensajes vía POST a un endpoint externo (sin backend propio).

1. Creá una cuenta gratuita en [Formspree](https://formspree.io) y un formulario nuevo (u otro servicio compatible como EmailJS/Resend/Basin que acepte `POST` con `FormData`).
2. Copiá el endpoint que te da el servicio (por ejemplo `https://formspree.io/f/xxxxxxx`).
3. Copiá `.env.local.example` a `.env.local` y pegá el endpoint en `NEXT_PUBLIC_FORM_ENDPOINT`.
4. Reiniciá el servidor de desarrollo.

Los mensajes enviados desde el formulario llegarán directamente a tu email configurado en el servicio elegido.

## Editar el contenido

Toda la información (perfil, educación, experiencia y proyectos) vive en [`src/data/profile.ts`](./src/data/profile.ts). Los proyectos actuales son placeholders — reemplazalos con tus proyectos reales, incluyendo enlaces a GitHub y demos en vivo.

## Estructura

```
src/
  app/            # Layout y página principal (App Router)
  components/
    sections/     # Hero, Sobre mí, Experiencia, Proyectos, Contacto
    ui/           # Componentes reutilizables (Container, SectionHeading)
  data/           # Datos del portafolio (profile.ts)
```
