# 📘 Proyecto: Consumo de API con React + TypeScript + Vite

Este proyecto consiste en una aplicación web desarrollada con **React**, **TypeScript** y **Vite**, cuyo objetivo es consumir una API REST y mostrar los datos obtenidos en un formato visual agradable y organizado.  
Incluye navegación, tarjetas de elementos, paginación y vista detallada mediante un modal.

DESPLEGADO EN VERCEL: https://036-f-hector-galicia-git-master-kizunas-projects-6386d577.vercel.app 

---

## 🚀 Tecnologías Utilizadas

- **React**  
- **TypeScript**  
- **Vite**  
- **CSS Modules / Estilos personalizados**  
- **React Router DOM**  
- **Fetch API** para consumo de servicios web

---

## 📌 Funcionalidades Principales

### ✔ Página de Inicio
- Presentación del proyecto.
- Información del estudiante.
- Elementos decorativos e imagen institucional.

### ✔ Página "Acerca de"
- Breve descripción del proyecto.
- Tecnologías utilizadas.
- Diseño limpio y responsivo.

### ✔ Página de Consumo de API
- Obtención de datos desde una API REST.
- Visualización de elementos en **tarjetas (cards)**.
- Se muestran **15+ elementos** por página.
- Compatibilidad con diferentes APIs (solo cambia la estructura de datos).
- **Paginación inteligente**.
- Al seleccionar un elemento:
  - Se abre un **modal con información detallada**.
  - Se muestra una imagen, categoría, descripción o instrucciones (dependiendo de la API).

---

## 🧩 Estructura del Proyecto

src/
├── components/
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── AboutSection.tsx
│ └── Catalog.tsx
│
├── Pages/
│ ├── HomePage.tsx
│ ├── AboutPage.tsx
│ └── CatalogPage.tsx
│
├── assets/
│ └── imágenes y recursos
│
├── App.tsx
├── main.tsx
├── styles.css
└── index.css

---

## ⚙️ Instalación y Ejecución en Local

### 1️⃣ Clonar el repositorio

git clone https://github.com/TU-USUARIO/036-F-Hector-Galicia.git

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar en modo desarrollo
npm run dev


El proyecto estará disponible en:
http://localhost:5173


🏗️ Construir para producción
npm run build


☁️ Despliegue
El proyecto está configurado para ser desplegado en plataformas como:

Vercel

Netlify

Solo se debe indicar:

Build Command: npm run build

Output Directory: dist

👨‍🎓 Datos del Estudiante
Nombre: Héctor Rodolfo Galicia Albeño

Carnet: 1790-22-4617

Curso: Desarrollo Web
