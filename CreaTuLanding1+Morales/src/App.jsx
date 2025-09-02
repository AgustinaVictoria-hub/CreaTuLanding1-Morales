import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Ruta principal: catálogo completo */}
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenidos a Blühend Online!" />} />

        {/* Ruta por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Ruta detalle de producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Ruta 404 */}
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;