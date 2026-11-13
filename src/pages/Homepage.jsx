import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import './HomePage.css';

const slides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

const produtosEmAlta = [
  { name: 'Nike 1', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
  { name: 'Nike 2', image: '/product-thumb-2.jpeg', price: 49.9 },
  { name: 'K-swiss 1', image: '/product-thumb-3.jpeg', price: 89.9 },
  { name: 'K-swiss 2', image: '/product-thumb-4.jpeg', price: 120, priceDiscount: 99.9 },
  { name: 'Nike 3', image: '/product-thumb-5.jpeg', price: 59.9 },
  { name: 'Nike 4', image: '/product-thumb-1.jpeg', price: 230, priceDiscount: 189.9 },
  { name: 'Nike 5', image: '/product-thumb-2.jpeg', price: 74.9 },
  { name: 'Calenciaga 1', image: '/product-thumb-3.jpeg', price: 99.9 },
];

function HomePage() {
  return (
    <Layout>
      <Gallery images={slides} width="1440px" height="681px" />

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="colecoes">
          <img src="/collection-1.png" alt="Coleção 1" />
          <img src="/collection-2.png" alt="Coleção 2" />
          <img src="/collection-3.png" alt="Coleção 3" />
        </div>
      </Section>

      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={produtosEmAlta} />
      </Section>
    </Layout>
  );
}

export default HomePage;