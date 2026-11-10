import { useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import './ProductListingPage.css';

const produtos = [
  { name: 'Nome do produto 1', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 149.9 },
  { name: 'Nome do produto 2', image: '/product-thumb-2.jpeg', price: 49.9 },
  { name: 'Nome do produto 3', image: '/product-thumb-3.jpeg', price: 89.9 },
  { name: 'Nome do produto 4', image: '/product-thumb-4.jpeg', price: 120, priceDiscount: 99.9 },
  { name: 'Nome do produto 5', image: '/product-thumb-5.jpeg', price: 59.9 },
  { name: 'Nome do produto 6', image: '/product-thumb-1.jpeg', price: 230, priceDiscount: 189.9 },
];

const marcas = [
  { text: 'Adidas', value: 'adidas' },
  { text: 'Nike', value: 'nike' },
  { text: 'Puma', value: 'puma' },
  { text: 'Calçados', value: 'calcados' },
];

const categorias = [
  { text: 'Esporte e lazer', value: 'esporte' },
  { text: 'Casual', value: 'casual' },
  { text: 'Utilitário', value: 'utilitario' },
  { text: 'Corrida', value: 'corrida' },
];

const generos = [
  { text: 'Masculino', value: 'masculino' },
  { text: 'Feminino', value: 'feminino' },
  { text: 'Unisex', value: 'unisex' },
];

const estados = [
  { text: 'Novo', value: 'novo' },
  { text: 'Usado', value: 'usado' },
];

function ProductListingPage() {
  // Lê o texto digitado na busca do cabeçalho (/products?filter=texto)
  const [parametros] = useSearchParams();
  const termo = parametros.get('filter');

  let titulo = 'Todos os produtos';
  if (termo) {
    titulo = 'Resultados para "' + termo + '"';
  }

  return (
    <Layout>
      <div className="listagem-topo">
        <h2>
          {titulo} <span>- {produtos.length} produtos</span>
        </h2>

        <select className="listagem-ordenar">
          <option value="relevantes">Ordenar por: mais relevantes</option>
          <option value="menor">Ordenar por: menor preço</option>
          <option value="maior">Ordenar por: maior preço</option>
        </select>
      </div>

      <div className="listagem-corpo">
        <aside className="listagem-filtros">
          <h3 className="filtros-titulo">Filtrar por</h3>
          <hr />
          <FilterGroup title="Marca" inputType="checkbox" options={marcas} />
          <FilterGroup title="Categoria" inputType="checkbox" options={categorias} />
          <FilterGroup title="Gênero" inputType="checkbox" options={generos} />
          <FilterGroup title="Estado" inputType="radio" options={estados} />
        </aside>

        <ProductListing products={produtos} />
      </div>
    </Layout>
  );
}

export default ProductListingPage;