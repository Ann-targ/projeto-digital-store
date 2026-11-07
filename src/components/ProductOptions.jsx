import { useState } from 'react';
import './ProductOptions.css';

// Mostra opções clicáveis (tamanhos ou cores). A escolhida ganha borda rosa.
function ProductOptions({ options, radius, shape = 'square', type = 'text' }) {
  const [selecionada, setSelecionada] = useState(null);

  return (
    <div className="product-options">
      {options.map((opcao) => {
        let classe = 'opcao opcao-' + shape;
        if (selecionada === opcao) {
          classe = classe + ' selecionada';
        }

        const estilo = {};
        if (shape === 'square') {
          estilo.borderRadius = radius;
        }
        if (type === 'color') {
          estilo.backgroundColor = opcao;
        }

        return (
          <button
            key={opcao}
            className={classe}
            style={estilo}
            onClick={() => setSelecionada(opcao)}
          >
            {type === 'text' ? opcao : ''}
          </button>
        );
      })}
    </div>
  );
}

export default ProductOptions;