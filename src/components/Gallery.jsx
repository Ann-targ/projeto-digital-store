import { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import './Gallery.css';

// Aceita 700, "700" ou "700px" e devolve sempre "700px"
function emPixels(valor) {
  if (!valor) return undefined;
  return String(valor).endsWith('px') ? valor : valor + 'px';
}

function Gallery({ images, width, height, radius, showThumbs, className = '' }) {
  // "atual" guarda qual imagem está aparecendo (0 é a primeira)
  const [atual, setAtual] = useState(0);
  const ultima = images.length - 1;

  const estiloPalco = {
    width: emPixels(width),
    height: emPixels(height),
    borderRadius: radius,
  };

  return (
    <div className={'gallery ' + className}>
      <div className="gallery-palco" style={estiloPalco}>
        <div
          className="gallery-faixa"
          style={{ transform: 'translateX(-' + atual * 100 + '%)' }}
        >
          {images.map((imagem, indice) => (
            <img key={indice} src={imagem.src} alt={'Imagem ' + (indice + 1)} />
          ))}
        </div>

        <button
          className="gallery-seta gallery-seta-esquerda"
          onClick={() => setAtual(atual - 1)}
          disabled={atual === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          className="gallery-seta gallery-seta-direita"
          onClick={() => setAtual(atual + 1)}
          disabled={atual === ultima}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-miniaturas">
          {images.map((imagem, indice) => (
            <img
              key={indice}
              src={imagem.src}
              alt={'Miniatura ' + (indice + 1)}
              className={indice === atual ? 'miniatura ativa' : 'miniatura'}
              style={{ borderRadius: radius }}
              onClick={() => setAtual(indice)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;