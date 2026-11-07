import star from '../assets/star-icon.svg';
import './BuyBox.css';

function formatar(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  return (
    <div className="buy-box">
      <h1 className="bb-nome">{name}</h1>
      <p className="bb-referencia">Ref: {reference}</p>

      <div className="bb-avaliacao">
        <span className="bb-estrelas">
          {stars} <img src={star} alt="estrelas" />
        </span>
        <span className="bb-total">({rating} avaliações)</span>
      </div>

      <div className="bb-precos">
        {priceDiscount ? (
          <>
            <span className="bb-preco-antigo">{formatar(price)}</span>
            <span className="bb-preco">{formatar(priceDiscount)}</span>
          </>
        ) : (
          <span className="bb-preco">{formatar(price)}</span>
        )}
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