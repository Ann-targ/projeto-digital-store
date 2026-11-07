import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const produtos = [
  { name: 'Nome do produto 1', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
  { name: 'Nome do produto 2', image: '/product-thumb-2.jpeg', price: 49.9 },
  { name: 'Nome do produto 3', image: '/product-thumb-3.jpeg', price: 89.9 },
];

function ProductListingPage() {
  const titulo = produtos.length + ' produtos encontrados';

  return (
    <Layout>
      <Section title={titulo} titleAlign="left">
        <ProductListing products={produtos} />
      </Section>
    </Layout>
  );
}

export default ProductListingPage;