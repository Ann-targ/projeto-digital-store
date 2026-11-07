import ProductCard from './ProductCard';
import './ProductListing.css';

// Recebe uma lista de produtos e cria um cartão para cada um
function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map((produto, indice) => (
        <ProductCard
          key={indice}
          image={produto.image}
          name={produto.name}
          price={produto.price}
          priceDiscount={produto.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;