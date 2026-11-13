import star from '../assets/star-icon.svg';
import './BuyBox.css';

function formatar(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function BuyBox({ name, category, brand, reference, stars, rating, price, priceDiscount, description, children }) {
  // Monta as 5 estrelas: as cheias (★) e as vazias (☆)
  const cheias = Math.floor(stars);
  const estrelas = '★'.repeat(cheias) + '☆'.repeat(5 - cheias);

  // Se existe preço com desconto, ele é o preço atual
  const precoAtual = priceDiscount ? priceDiscount : price;

  return (
    <div className="buy-box">
      <h1 className="bb-nome">{name}</h1>
      <p className="bb-info">
        {category} | {brand} | REF:{reference}
      </p>

      <div className="bb-avaliacao">
        <span className="bb-estrelas-texto">{estrelas}</span>
        <span className="bb-nota">
          {stars} <img src={star} alt="" />
        </span>
        <span className="bb-total">({rating} avaliações)</span>
      </div>

      <div className="bb-precos">
        <span className="bb-preco">{formatar(precoAtual)}</span>
        {priceDiscount && <span className="bb-preco-antigo">{formatar(price)}</span>}
      </div>

      <div className="bb-descricao">
        <h3>Descrição do produto</h3>
        <p>{description}</p>
      </div>

      {children}

      <button className="bb-comprar">COMPRAR</button>
    </div>
  );
}

export default BuyBox;