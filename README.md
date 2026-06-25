# hacker-ui-lab - HACKER UI LAB

`hacker-ui-lab` es un kit de desarrollo base (boilerplate) moderno, comercial y altamente escalable para la creación de interfaces de usuario premium. Está preparado para servir como plantilla inicial para landing pages, paneles de administración (dashboards), pasarelas de autenticación (logins), catálogos y e-commerce.

Este entorno está configurado con las mejores tecnologías del ecosistema de React, optimizado para compilaciones rápidas, tipado estricto y total responsividad.

---

## ⚡ Características Principales

* **Diseño Responsivo Real:** Todos los componentes y vistas (Dashboard, Navbar, Catálogos, Tablas y Formularios) están diseñados para adaptarse fluidamente a pantallas de **Móviles, Tablets y Escritorios (PC)**.
* **Micro-interacciones Fluidas:** Animaciones basadas en físicas de resortes (*springs*) con Framer Motion para botones, tarjetas y navegación.
* **Componentes Listos para Usar:** Integración directa con Radix UI adaptada al estilo de shadcn/ui.
* **Formularios con Validación:** Validación estricta basada en esquemas de datos con Zod y React Hook Form.
* **Tablas de Datos Dinámicas:** Ordenación, paginación y búsqueda en tablas con TanStack Table.
* **Modo Oscuro Integrado:** Mapeo de variables HSL de CSS para cambio instantáneo de tema.

---

## 🛠️ Stack Tecnológico

* **Vite** - Bundler de última generación.
* **React 19 & TypeScript** - Desarrollo ágil y tipado estricto.
* **Tailwind CSS v3** - Estilos rápidos basados en utilidades.
* **Radix UI & shadcn/ui** - Primitivos de componentes accesibles.
* **Framer Motion** - Motor de animaciones de alto rendimiento.
* **React Hook Form & Zod** - Manejo de formularios y esquemas de validación.
* **TanStack Query (v5)** - Sincronización del estado del servidor.
* **TanStack Table (v8)** - Tablas dinámicas y cuadrículas de datos.
* **Lucide React** - Iconografía moderna y consistente.

---

## 📁 Estructura de Directorios

```text
src/
├── assets/         # Recursos estáticos globales (imágenes, SVGs)
├── components/     # Componentes de la interfaz
│   ├── ui/         # Componentes atómicos (Button, Card, Input, Dialog)
│   ├── Navbar.tsx      # Barra de navegación responsive y animada
│   ├── ProductCard.tsx # Tarjetas de catálogo interactivo con Quick View
│   ├── LoginForm.tsx   # Login con validación Zod en tiempo real
│   └── DemoTable.tsx   # Tabla interactiva con búsqueda, ordenación y paginación
├── hooks/          # Hooks personalizados reutilizables
├── layouts/        # Componentes de distribución de layouts
├── lib/            # Utilidades generales (utils.ts con función cn)
├── pages/          # Vistas completas de la app (Dashboard.tsx)
├── styles/         # Estilos globales y variables HSL (globals.css)
├── App.tsx         # Proveedores de estado, query client y enrutamiento
└── main.tsx        # Punto de entrada y montaje en el DOM
```

---

## 🚀 Guía de Inicio Rápido

El proyecto utiliza **pnpm** para la administración de paquetes.

### 1. Clonar e Instalar Dependencias
```bash
git clone https://github.com/acroni608/hacker-ui-lab.git
cd hacker-ui-lab
pnpm install
```

### 2. Iniciar Servidor de Desarrollo
Para arrancar el proyecto localmente con recarga rápida (HMR):
```bash
pnpm dev
```
Abre tu navegador en: [http://localhost:5173](http://localhost:5173)

### 3. Compilar para Producción
Para verificar tipos y compilar el código optimizado:
```bash
pnpm build
```

---

## 🎨 Compatibilidad de Vistas

El código está diseñado para verse perfecto en cualquier dispositivo:
* **Escritorio / PC:** Layout de cuadrícula de 3 columnas para productos y paneles side-by-side.
* **Tablets:** Cuadrícula de 2 columnas y redimensionamiento automático de la barra de navegación.
* **Móviles:** Menú colapsable con hamburguesa animada, scroll horizontal seguro para tablas de datos y apilamiento vertical adaptado para formularios y tarjetas de métricas.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](file:///C:/ANTIGRAVITY-WORK/projects/ui-lab/LICENSE) para más detalles.
