import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './components/context/CartContext'

function App() {
  let titulo = "Bienvenido/a!"
  let texto = "¡Tu destino para encontrar todo lo que necesitas en tecnología e informática! Aquí ofrecemos una amplia selección de artículos informáticos de alta calidad, desde componentes para PC y accesorios hasta equipos completos diseñados para tus necesidades. Ya seas un profesional, un gamer o simplemente alguien que ama la tecnología, aquí encontrarás productos de confianza y precios competitivos."
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer tituloBienvenida={titulo} textoBienvenida={texto} />} />
            <Route exact path="/category/:catId" element={<ItemListContainer />} />
            <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="*" element={<ItemListContainer tituloBienvenida={"Error 404"} textoBienvenida={"Página no encontrada"} />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
