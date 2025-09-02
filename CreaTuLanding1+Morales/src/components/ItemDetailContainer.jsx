import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        const found = res.find((p) => p.id === id);
        setProduct(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <h2>Cargando...</h2>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;