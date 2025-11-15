const NAME = "Héctor Rodolfo Galicia Albeño"
const CARNET = "1790-22-4617"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <span className="hero-pill">
            Desarrollo Web
          </span>

          <h1 className="hero-title">
            Consumo de API
          </h1>

          <p className="hero-text">
            Aplicación desarrollada con <strong>React</strong> y <strong>TypeScript</strong> para consumir una API REST y mostrar un catálogo de productos con 
            navegación por páginas y vista de detalle.
          </p>

          <div className="hero-info">
            <div className="hero-info-card">
              <span className="hero-info-label">Estudiante</span>
              <span className="hero-info-value">{NAME}</span>
            </div>
            <div className="hero-info-card">
              <span className="hero-info-label">Carnet</span>
              <span className="hero-info-value">{CARNET}</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-inner">
              <img
                src="/umg.png"
                alt="Logo UMG"
                className="hero-logo"
              />
              <p className="hero-card-title">
                Universidad Mariano Gálvez
              </p>
              <p className="hero-card-sub">
                Centro Universitario
              </p>
              <p className="hero-card-footer">
                Facultad de Ingeniería en Sistemas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
