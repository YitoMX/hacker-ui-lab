# HACKER UI LAB - Guía Técnica y de Diseño de Agente

Este archivo sirve como directriz técnica e histórica de diseño para **HACKER UI LAB**. Registra la base visual aprobada y establece las reglas fundamentales que todo agente debe seguir para mantener la consistencia al extender este laboratorio o utilizarlo como plantilla base para interfaces comerciales modernas.

---

## 1. Stack Tecnológico Aprobado

El entorno de desarrollo y producción utiliza de forma estricta las siguientes tecnologías:

* **Bundler & Dev Server:** Vite v8+ (compilación ultra rápida en ESM).
* **Framework & Lenguaje:** React 19 + TypeScript (tipado estricto con `verbatimModuleSyntax` habilitado).
* **Estilos:** Tailwind CSS v3 (v3.4.19) y PostCSS con Autoprefixer.
* **Componentes Base:** Estilo Radix UI y shadcn/ui.
* **Animaciones:** Framer Motion v12.
* **Formularios & Validación:** React Hook Form + Zod (esquemas de datos).
* **Gestión de Datos:** TanStack Query v5 (servidor) y TanStack Table v8 (cliente).
* **Iconografía:** Lucide React.

---

## 2. Sistema y Estilo Visual Aprobado

Cualquier extensión visual debe adherirse a los tokens definidos en [globals.css](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/styles/globals.css) y [tailwind.config.js](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/tailwind.config.js):

### Paleta de Colores (HSL Variables)
* **Primario (Accento):** Azul/Indigo vibrante comercial.
  * *Tema Claro:* `hsl(221.2, 83.2%, 53.3%)`
  * *Tema Oscuro:* `hsl(217.2, 91.2%, 59.8%)`
* **Fondo (Background):**
  * *Tema Claro:* Blanco puro `hsl(0, 0%, 100%)`
  * *Tema Oscuro:* Slate profundo `hsl(222.2, 84%, 4.9%)`
* **Bordes e Inputs:**
  * *Tema Claro:* Gris suave `hsl(214.3, 31.8%, 91.4%)`
  * *Tema Oscuro:* Slate intermedio `hsl(217.2, 32.6%, 17.5%)`

### Bordes y Sombras
* **Borde redondeado estándar (`--radius`):** `0.75rem` (`rounded-xl` para tarjetas y diálogos). Los botones usan un redondeado de `rounded-lg`.
* **Sombras (Shadows):**
  * Tarjetas estáticas: `shadow-sm` con bordes suaves de color `--border`.
  * Efecto Hover: Transición fluida a `shadow-md` con desplazamiento en el eje Y.

### Comportamiento de Animación (Framer Motion)
* **Transición de menús y pestañas activas (Layout Transitions):**
  * Animación spring: `stiffness: 350, damping: 30`.
* **Micro-interacciones en tarjetas (ProductCard):**
  * Desplazamiento Y al hacer hover: `y: -6`.
  * Animación spring en hover: `stiffness: 300, damping: 20`.
* **Paneles Colapsables (Navbar Móvil):**
  * Desvanecimiento y redimensión de altura usando `AnimatePresence`.

---

## 3. Componentes Disponibles y Rutas

* **[Button](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/ui/button.tsx):** Variaciones de color y tamaño utilizando `class-variance-authority`.
* **[Card](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/ui/card.tsx):** Tarjeta con estados hover y estructura semántica (Header, Title, Content, Footer).
* **[Input](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/ui/input.tsx):** Campos de texto con transiciones de foco y soporte para errores de validación.
* **[Dialog](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/ui/dialog.tsx):** Modal con desenfoque de fondo (`backdrop-blur-sm`) y animaciones de zoom/fade adaptadas de Radix UI.
* **[Navbar](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/Navbar.tsx):** Barra superior responsiva con indicador dinámico de pestaña activa y control de modo oscuro.
* **[ProductCard](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/ProductCard.tsx):** Bloque de catálogo comercial con popup integrado de especificaciones técnicas.
* **[LoginForm](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/LoginForm.tsx):** Formulario de acceso con validación en tiempo real por Zod y control de carga.
* **[DemoTable](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/src/components/DemoTable.tsx):** Tabla de transacciones autogestionada (búsqueda, paginación y ordenamiento por cabeceras).

---

## 4. Reglas de Diseño de HACKER UI LAB

1. **Strict No-Global Styles:** No se deben añadir clases arbitrarias en archivos globales. Todo el diseño ad-hoc se gestiona con clases utilitarias de Tailwind o estilos locales por componente.
2. **TypeScript & Verbatim Imports:** Siempre importar tipos explícitamente (`import type { ... }`) para cumplir con `"verbatimModuleSyntax": true`.
3. **No Unused Code:** Dado que `"noUnusedLocals"` está activo, no dejes importaciones o variables sin usar, ya que esto detendrá la compilación del proyecto (`tsc`).
4. **Spring Over Duration:** Para animaciones de interacción física (como botones, hover de tarjetas o pestañas activas), prefiere dinámicas spring en Framer Motion antes que duraciones lineales fijas.
5. **Color HSL Mapping:** Al crear nuevos componentes, mapea los colores de Tailwind usando las clases semánticas (`bg-background`, `text-foreground`, `border-border`, `bg-primary`, etc.) en lugar de colores planos (`bg-blue-500`) para garantizar la total compatibilidad con el modo oscuro.

---

## 5. Cómo Usar Este Proyecto como Plantilla Base

Para crear una nueva interfaz (ej. e-commerce completo, catálogo separado o landing page comercial):

1. **Duplicación o Referencia:** Copia la estructura de directorios y los archivos de configuración (`package.json`, `tsconfig.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js` y `components.json`) en el nuevo directorio del proyecto.
2. **Reutilización de UI:** Copia la carpeta `src/components/ui/` y `src/lib/utils.ts` en el nuevo proyecto. Estos representan los bloques de construcción atómicos aprobados y listos para usar.
3. **Carga de Estilos:** Importa `globals.css` en el punto de entrada de la aplicación para heredar el modo claro/oscuro y las variables HSL homologadas.
4. **Instalación:** Ejecuta `pnpm install` para levantar todas las dependencias con las versiones idénticas y probadas del laboratorio.
