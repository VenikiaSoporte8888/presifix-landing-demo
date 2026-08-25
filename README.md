# Landing de PresiFix

Proyecto independiente React + Vite, preparado para Vercel. No utiliza backend, autenticación, base de datos ni Supabase.

## Uso local

1. `npm install`
2. `npm run dev`

## Build

`npm run build`

La salida se genera en `dist/`.

## Pendiente antes del despliegue

- Sustituir `TU-DOMINIO-VERCEL` en `index.html`, `public/robots.txt` y `public/sitemap.xml` por el dominio final.
- Sustituir los seis placeholders de la sección «Mira PresiFix por dentro» por capturas reales equivalentes.
- Conectar «Solicitar demostración» cuando exista un canal de contacto real. El botón lleva por ahora al bloque informativo de contacto.
- Los eventos `click_ver_demo`, `click_solicitar_demostracion`, `view_pricing` y `view_demo_section` se emiten como eventos del navegador, sin conectar analítica externa.
