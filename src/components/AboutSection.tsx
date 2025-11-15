export default function AboutSection() {
  const technologies = [
    {
      titulo: "Front-end",
      items: ["React", " TypeScript", " Vite"],
    },

    {
      titulo: "Navegación",
      items: ["React Router DOM (rutas /, /acerca de, /consumo de API)"],
    },

    {
      titulo: "Estilos",
      items: ["CSS3 puro", " Diseño responsivo", " Paleta morado + verde"],
    },

    {
      titulo: "Consumo de datos",
      items: ["Fetch API", " API REST"],
    },

    {
      titulo: "Herramientas de ejecución",
      items: ["Node.js", " npm", " Servidor de desarrollo de Vite"],
    },
  ]

  return (
    <section className="about-section">
      <div className="about-header">
        <span className="hero-pill">
          Información del proyecto
        </span>
        <h1 className="about-title">Acerca del Proyecto</h1>
        <p className="about-text">
          Este proyecto forma parte del <strong>examen de consumo de API</strong>
          del curso de <strong>Desarrollo Web</strong>. El objetivo es construir
          una aplicación de una sola página (SPA) que consuma una API de
          productos, muestre un catálogo paginado y permita ver el detalle de
          cada elemento.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h2 className="about-card-title">Características principales</h2>
          <ul className="about-list">
            <li>División en páginas: Inicio, Acerca y Consumo de API.</li>
            <li>Catálogo de productos obtenido desde una API REST.</li>
            <li>Paginación para navegar entre distintos grupos de productos.</li>
            <li>Modal de detalle al seleccionar un producto.</li>
            <li>Diseño responsivo, pensado para escritorio y pantallas pequeñas.</li>
          </ul>
        </div>

        <div className="about-card">
          <h2 className="about-card-title">Stack de tecnologías utilizadas</h2>

          {technologies.map((grupo) => (
            <div key={grupo.titulo} className="about-tech-group">
              <p className="about-tech-title">{grupo.titulo}</p>
              <div className="about-tech-chips">
                {grupo.items.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
