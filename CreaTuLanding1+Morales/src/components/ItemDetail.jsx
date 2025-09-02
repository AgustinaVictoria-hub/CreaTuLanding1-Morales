import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} unidades al carrito`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;
