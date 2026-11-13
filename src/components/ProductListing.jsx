import ProductCard from './ProductCard';
import './ProductListing.css';

// Recebe uma lista de produtos 
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
          category={produto.category || 'TENIS'}

        />
      ))}
    </div>
  );
}

export default ProductListing;