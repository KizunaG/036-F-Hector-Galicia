import { useEffect, useState } from "react"
interface Drink {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
  strCategory?: string
  strInstructions?: string
}

type PageItem = number | "..."
export default function Catalog() {
  const [drinks, setDrinks] = useState<Drink[]>([])
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null)

  const [page, setPage] = useState(1)
  const perPage = 15

  const API_URL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks) 
      })
      .catch((err) => console.error("Error cargando bebidas", err))
  }, [])

  const totalPages = Math.ceil(drinks.length / perPage)
  const start = (page - 1) * perPage
  const shown = drinks.slice(start, start + perPage)

  const goToPage = (n: number) => {
    if (n < 1 || n > totalPages) return
    setPage(n)
  }

  const getPageItems = (current: number, total: number): PageItem[] => {
    const items: PageItem[] = []

    if (total <= 5) {
      for (let i = 1; i <= total; i++) items.push(i)
      return items
    }

    const add = (val: PageItem) => {
      if (items[items.length - 1] !== val) items.push(val)
    }

    for (let i = 1; i <= total; i++) {
      const isFirst = i === 1
      const isLast = i === total
      const nearCurrent = Math.abs(i - current) <= 1
      const nearStart = current <= 3 && i <= 4
      const nearEnd = current >= total - 2 && i >= total - 3

      if (isFirst || isLast || nearCurrent || nearStart || nearEnd) {
        add(i)
      } else {
        add("...")
      }
    }

    return items
  }

  const pageItems = getPageItems(page, totalPages)
  const openModal = (id: string) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedDrink(data.drinks[0])
      })
  }

  const closeModal = () => setSelectedDrink(null)

  return (
    <section>
      <h1 className="catalog-title">Catálogo de Bebidas</h1>
      <p className="catalog-text">
        Seleccione una bebida para ver su imagen, categoría e instrucciones de preparación.
      </p>

      <div className="products-grid">
        {shown.map((d) => (
          <div
            key={d.idDrink}
            className="product-card"
            onClick={() => openModal(d.idDrink)}
          >
            <div className="product-image-wrapper">
              <img src={d.strDrinkThumb} alt={d.strDrink} />
            </div>

            <div className="product-info">
              <h3 className="product-title">{d.strDrink}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => goToPage(page - 1)} disabled={page === 1}>
          Anterior
        </button>

        {pageItems.map((item, i) =>
          item === "..." ? (
            <span key={`dots-${i}`} className="pagination-dots">
              ...
            </span>
          ) : (
            <button
              key={item}
              className={page === item ? "active" : ""}
              onClick={() => goToPage(item)}
            >
              {item}
            </button>
          )
        )}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>

      {selectedDrink && (
        <div className="modal-bg" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <img
              src={selectedDrink.strDrinkThumb}
              alt={selectedDrink.strDrink}
              className="modal-image"
            />

            <h2 className="modal-title">{selectedDrink.strDrink}</h2>

            <p>
              <b>Categoría:</b> {selectedDrink.strCategory}
            </p>

            <p>
              <b>Instrucciones:</b> {selectedDrink.strInstructions}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
