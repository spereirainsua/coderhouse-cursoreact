import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  let titulo = "Bienvenido a ANUBIS!"
  let texto = "¡Tu destino para encontrar todo lo que necesitas en tecnología e informática! Aquí ofrecemos una amplia selección de artículos informáticos de alta calidad, desde componentes para PC y accesorios hasta equipos completos diseñados para tus necesidades. Ya seas un profesional, un gamer o simplemente alguien que ama la tecnología, aquí encontrarás productos de confianza y precios competitivos."
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer tituloBienvenida={titulo} textoBienvenida={texto} />} />

          <Route exact path="*" element={<ItemListContainer tituloBienvenida={"Error 404"} textoBienvenida={"Página no encontrada"} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
