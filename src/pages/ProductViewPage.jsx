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

const recomendados = [
  { name: 'Nome do produto 1', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
  { name: 'Nome do produto 2', image: '/product-thumb-2.jpeg', price: 49.9 },
  { name: 'Nome do produto 3', image: '/product-thumb-3.jpeg', price: 89.9 },
  { name: 'Nome do produto 4', image: '/product-thumb-4.jpeg', price: 120, priceDiscount: 99.9 },
];

function ProductViewPage() {
  return (
    <Layout>
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
          reference="38416711"
          stars={4.7}
          rating={90}
          price={219}
          priceDiscount={219}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <p className="bb-rotulo">Tamanho</p>
          <ProductOptions options={['39', '40', '41', '42', '43']} shape="square" radius="4px" type="text" />

          <p className="bb-rotulo">Cor</p>
          <ProductOptions options={['#6FEEFF', '#FF6C6C', '#FEF076', '#E4E4E4']} shape="circle" type="color" />
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={recomendados} />
      </Section>
    </Layout>
  );
}

export default ProductViewPage;