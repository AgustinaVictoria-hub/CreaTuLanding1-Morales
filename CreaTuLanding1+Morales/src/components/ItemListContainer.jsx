import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"; // componente de presentación
import { getProducts } from "../asyncMock"; // tu mock de productos

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); // para filtrar por categoría

  useEffect(() => {
    getProducts()
      .then((res) => {
        // si hay categoryId, filtramos
        if (categoryId) {
          setProducts(res.filter((prod) => prod.category === categoryId));
        } else {
          setProducts(res);
        }
      })
      .catch((err) => console.error(err));
  }, [categoryId]);

  return (
    <div style={{ padding: "20px" }}>
      {mensaje && <h2>{mensaje}</h2>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;