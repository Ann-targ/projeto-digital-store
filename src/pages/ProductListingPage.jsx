import { Link } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import './ProductViewPage.css';

const imagens = [
  { src: '/produc-image-1.jpeg' },
  { src: '/produc-image-2.jpeg' },
  { src: '/produc-image-3.jpeg' },
  { src: '/produc-image-4.jpeg' },
  { src: '/produc-image-5.jpeg' },
];

const relacionados = [
  { name: 'Nome do produto 1', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
  { name: 'Nome do produto 2', image: '/product-thumb-2.jpeg', price: 200, priceDiscount: 100 },
  { name: 'Nome do produto 3', image: '/product-thumb-3.jpeg', price: 89.9 },
  { name: 'Nome do produto 4', image: '/product-thumb-4.jpeg', price: 120 },
];

function ProductViewPage() {
  return (
    <Layout>
      <nav className="trilha">
        <Link to="/">Home</Link> / <Link to="/produtos">Produtos</Link> / Tênis / Nike /
        Tênis Nike Revolution 6 Next Nature Masculino
      </nav>

      <div className="produto-topo">
        <Gallery
          images={imagens}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
          className="produto-galeria"
        />

        <BuyBox
          name="Tênis Nike Revolution 6 Next Nature Masculino"
          category="Casual"
          brand="Nike"
          reference="38416711"
          stars={4.7}
          rating={90}
          price={249}
          priceDiscount={219}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        >
          <p className="bb-rotulo">Tamanho</p>
          <ProductOptions
            options={['39', '40', '41', '42', '43']}
            shape="square"
            radius="4px"
            type="text"
            initial="41"
          />

          <p className="bb-rotulo">Cor</p>
          <ProductOptions
            options={['#6FEEFF', '#FF6C6C', '#5E5E5E', '#6D70B7']}
            shape="circle"
            type="color"
            initial="#FF6C6C"
          />
        </BuyBox>
      </div>

      <Section
        title="Produtos Relacionados"
        titleAlign="left"
        link={{ text: 'Ver todos →', href: '/products' }}
      >
        <ProductListing products={relacionados} />
      </Section>
    </Layout>
  );
}

export default ProductViewPage;