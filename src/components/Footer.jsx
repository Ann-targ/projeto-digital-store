import Logo from './Logo';
import FooterInfo from './FooterInfo';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import './Footer.css';

const informacoes = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/orders' },
];

const categorias = [
  { text: 'Camisetas', link: '/produtos' },
  { text: 'Calças', link: '/produtos' },
  { text: 'Bonés', link: '/produtos' },
  { text: 'Headphones', link: '/produtos' },
  { text: 'Tênis', link: '/produtos' },
];

const contato = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
  { text: '(85) 3051-3411' },
];

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-topo">
        <div className="footer-marca">
          <Logo footer />
          <p>
            O melhor da moda urbana você encontra aqui na Digital Store. Compre online e receba no conforto da sua casa.
          </p>
          <div className="footer-redes">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <FooterInfo title="Informações" informations={informacoes} />
        <FooterInfo title="Categorias" informations={categorias} />
        <FooterInfo title="Contato" informations={contato} />
      </div>

      <hr />
      <p className="footer-direitos">© {ano} Digital Store</p>
    </footer>
  );
}

export default Footer;