import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import CatalogPage from "./Pages/CatalogPage"

export default function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="/consumo" element={<CatalogPage />} />
        </Routes>
      </div>
    </div>
  )
}
