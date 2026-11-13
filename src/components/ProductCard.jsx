import './ProductCard.css';

function formatar(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ProductCard({ image, name, price, priceDiscount, category }) {
 
  let desconto = null;
  if (priceDiscount && priceDiscount < price) {
    desconto = Math.round((1 - priceDiscount / price) * 100) + '% OFF';
  }

  return (
    <div className="product-card">
      <div className="product-card-imagem">
        {desconto && <span className="product-card-selo">{desconto}</span>}
        <img src={image} alt={name} />
      </div>

      {category && <p className="product-card-categoria">{category}</p>}
      <h3>{name}</h3>

      <div className="product-card-precos">
        {priceDiscount ? (
          <>
            <span className="preco-antigo">{formatar(price)}</span>
            <span className="preco">{formatar(priceDiscount)}</span>
          </>
        ) : (
          <span className="preco">{formatar(price)}</span>
        )}
      </div>
    </div>
  );
}

export default ProductCard;