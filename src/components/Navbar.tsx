import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo-circle">
    <img
      src="/umg.png"
      alt="Logo UMG"
      className="navbar-logo-img"
    />
  </div>
        <div className="navbar-title">
          <span className="navbar-title-main">Consumo de API</span>
        </div>
      </div>

      <nav className="navbar-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/acerca"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Acerca De
        </NavLink>

        <NavLink
          to="/consumo"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Consumo de API
        </NavLink>
      </nav>
    </header>
  )
}
