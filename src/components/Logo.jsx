import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

// Mostra a logo da loja. Se receber footer, usa a versão branca.
function Logo({ footer = false }) {
  return (
    <img
      src={footer ? logoFooter : logoHeader}
      alt="Digital Store"
      width="253"
      height="44"
    />
  );
}

export default Logo;    
