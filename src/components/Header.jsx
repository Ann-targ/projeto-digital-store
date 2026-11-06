import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import miniCart from '../assets/mini-cart.svg';
import './Header.css';

function Header() {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  // Roda ao clicar na lupa ou apertar Enter
  function pesquisar(evento) {
    evento.preventDefault();
    navigate(`/products?filter=${encodeURIComponent(busca)}`);
  }

  return (
    <header className="header">
      <div className="header-topo">
        <Link to="/">
          <Logo />
        </Link>

        <form className="header-busca" onSubmit={pesquisar}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        <div className="header-acesso">
          <Link to="/cadastro" className="link-cadastro">Cadastre-se</Link>
          <Link to="/login" className="botao-entrar">Entrar</Link>
          <img src={miniCart} alt="Carrinho de compras" />
        </div>
      </div>

      <nav className="header-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/pedidos">Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}

export default Header;