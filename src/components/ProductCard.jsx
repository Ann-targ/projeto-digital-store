import './ProductCard.css';

// Transforma 149.9 em R$ 149,90
function formatar(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ProductCard({ image, name, price, priceDiscount }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} width="292" height="321" />
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