# ⚡ HACKER UI LAB

[![React](https://img.shields.io/badge/React-19.2.7-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.1.0-646CFF?style=flat-square&logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-emerald?style=flat-square&logo=github)](https://yitomx.github.io/hacker-ui-lab/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**HACKER UI LAB** es un entorno de desarrollo base (boilerplate) premium, comercial y de alto rendimiento diseñado para servir como plantilla inicial para landing pages, paneles de administración (dashboards), pasarelas de acceso (logins), catálogos y plataformas de e-commerce.

Este proyecto actúa como un laboratorio de referencias de interfaz de usuario, optimizado para cargas instantáneas, división de código (code-splitting), y total adaptabilidad en móviles, tablets y computadoras de escritorio.

---

## 🔗 Demo en Vivo

Puedes explorar y probar la versión optimizada en vivo aquí:
👉 **[https://yitomx.github.io/hacker-ui-lab/](https://yitomx.github.io/hacker-ui-lab/)**

---

## 📸 Preview (Screenshots Pending)

> [!NOTE]
> Las capturas visuales oficiales se encuentran pendientes de generación local. Puedes capturarlas tú mismo siguiendo estos pasos:
> 1. Levanta el servidor local con `pnpm dev`.
> 2. Toma capturas de pantalla de la interfaz en los tamaños indicados abajo.
> 3. Guarda las imágenes en `public/screenshots/` con los nombres correspondientes.
>
> * **Escritorio (1440px):** `public/screenshots/desktop-dashboard.webp`
> * **Tablet (768px):** `public/screenshots/tablet-dashboard.webp`
> * **Móvil (390px):** `public/screenshots/mobile-dashboard.webp`
> * **Quick View Modal:** `public/screenshots/quick-view-modal.webp`
> * **Tabla Responsive:** `public/screenshots/responsive-table.webp`

---

## ✨ Características Principales

1. **Optimización Extrema de Bundle:** El bundle principal se redujo de **573.72 kB a solo 7.97 kB** gracias a la segmentación de código y carga perezosa de vistas secundarias.
2. **Carga Perezosa (Lazy Loading):** Los widgets y componentes interactivos pesados (`LoginForm`, `DemoTable`, `ProductCard`) se importan de forma diferida (`React.lazy` + `Suspense`) evitando bloquear el renderizado inicial.
3. **Esqueletos de Carga (Skeletons):** Todos los componentes asíncronos tienen skeletons integrados que respetan el diseño oscuro para mitigar el Cumulative Layout Shift (CLS).
4. **Diseño Responsivo Real:** Adaptación nativa sin scroll horizontal global, optimizado para móvil pequeño (360px), estándar (390px), móvil grande (430px), tablet vertical (768px), horizontal (1024px) y pantallas ultra-anchas.
5. **Componentes Comerciales Reactivos:**
   * **LoginForm:** Acceso validado con esquemas robustos en tiempo real mediante Zod y React Hook Form.
   * **ProductCard:** Catálogo interactivo con animaciones spring de Framer Motion y diálogo detallado.
   * **DemoTable:** Tabla con ordenamiento, filtrado en vivo y paginación interna impulsada por TanStack Table.

---

## 🛠️ Stack Tecnológico Completo

* **Vite** - Bundler y servidor de desarrollo.
* **React 19 & TypeScript** - Lógica e interfaces estructuradas.
* **Tailwind CSS v3** - Estilos utilitarios rápidos y responsivos.
* **Framer Motion v12** - Animaciones físicas y fluidas.
* **Radix UI & shadcn/ui** - Primitivos de componentes accesibles.
* **TanStack Query v5** - Administración de estados asíncronos.
* **TanStack Table v8** - Gestión de cuadrículas de datos complejas.
* **Lucide React** - Iconografía SVG consistente.

---

## 🚀 Guía de Instalación y Uso

El proyecto está listo para ser clonado y ejecutado con **pnpm**:

### 1. Clonar el repositorio
```bash
git clone https://github.com/YitoMX/hacker-ui-lab.git
cd hacker-ui-lab
```

### 2. Instalar dependencias locales
```bash
pnpm install
```

### 3. Iniciar el servidor de desarrollo
```bash
pnpm dev
```
La consola indicará el enlace de desarrollo local (generalmente [http://localhost:5173/](http://localhost:5173/)).

### 4. Compilar para producción (Build)
Para verificar la compilación y generar el empaquetado optimizado en chunks dentro de `dist/`:
```bash
pnpm build
```

---

## 📂 Estructura del Proyecto

```text
src/
├── assets/         # Recursos globales e ilustraciones estáticas
├── components/     # Componentes modulares
│   ├── ui/         # Componentes atómicos (Button, Card, Input, Dialog)
│   ├── Navbar.tsx      # Barra de navegación superior responsive animada
│   ├── ProductCard.tsx # Tarjetas de productos comerciales con Quick View
│   ├── LoginForm.tsx   # Login validado en tiempo real con Zod
│   └── DemoTable.tsx   # Tabla dinámica con paginación, filtros y ordenación
├── hooks/          # Hooks personalizados
├── layouts/        # Distribución estructural de páginas
├── lib/            # Funciones y clases de soporte (utils.ts)
├── pages/          # Vistas principales (Dashboard.tsx cargado de forma perezosa)
├── styles/         # Estilos globales y variables HSL (globals.css)
├── App.tsx         # Contenedor de proveedores, query client y suspense loader
└── main.tsx        # Punto de entrada de renderizado de React
```

---

## 🏗️ Cómo Usar como Plantilla Base

Este repositorio está configurado como **Repositorio Plantilla** en GitHub. Puedes crear un nuevo proyecto a partir de él siguiendo estos pasos:

1. Haz clic en el botón **"Use this template"** en la parte superior derecha de la página del repositorio en GitHub.
2. Nombra tu nuevo repositorio e inicialízalo.
3. Clona tu nuevo repositorio localmente y ejecuta `pnpm install`.
4. Si quieres reutilizar el sistema visual base para una nueva interfaz (ej. una tienda nueva o una landing page):
   * Conserva las dependencias de `package.json` y la resolución de alias de `vite.config.ts`.
   * Reutiliza los componentes atómicos en `src/components/ui/` para tus propios formularios, botones y modales.
   * Utiliza las variables HSL definidas en `src/styles/globals.css` para mantener la consistencia del modo claro y oscuro.

---

## 🗺️ Roadmap de la Plantilla

- [x] Configuración inicial con React 19 + TypeScript.
- [x] Corrección responsive para móviles y tablets de 360px a 1440px.
- [x] Optimización de bundle de 570kB a 7kB.
- [x] Code Splitting (división manual de dependencias en vendors).
- [x] Configuración de despliegue automático con GitHub Pages.
- [ ] Integración de hooks de traducción de idiomas.
- [ ] Mock de API REST local para simular compras en tiempo real.

---

## ⚠️ Nota Importante

> [!IMPORTANT]
> **ui-lab** es un laboratorio técnico y de diseño que sirve como kit de referencia para componentes y layouts. **No está pensado para usarse directamente como un sitio web comercial final sin personalización previa.** Utilízalo como punto de partida y biblioteca de ejemplos aprobados.

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.
