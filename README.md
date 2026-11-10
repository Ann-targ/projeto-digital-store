# Digital Store

Loja virtual desenvolvida em **React** como projeto final do curso de Front-end.

## Equipe

- Anne Caroline da Silva Oliveira

## Páginas

| Listagem de produtos | `/produtos` ou `/products` |
| Visualização do produto | `/product/:id` (exemplo: `/product/1`) |

## Tecnologias

- React 19
- Vite
- React Router (`react-router-dom`)
- ESLint
- CSS puro

## Como rodar o projeto

**Pré-requisito:** ter o [Node.js](https://nodejs.org) instalado (versão LTS).

1. Clone o repositório:

   ```
   git clone https://github.com/Ann-targ/projeto-digital-store
   ```

2. Entre na pasta do projeto:

   ```
   cd projeto-digital-store
   ```

3. Instale as dependências:

   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```
   npm run dev
   ```

5. Abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Estrutura do projeto

```
src/
├── assets/        ícones e logos (SVG)
├── components/    componentes reutilizáveis
│   ├── Logo
│   ├── Header
│   ├── Footer
│   ├── FooterInfo
│   ├── Section
│   ├── Gallery
│   ├── ProductCard
│   ├── ProductListing
│   ├── ProductOptions
│   ├── BuyBox
│   └── FilterGroup
├── pages/         páginas do site
│   ├── Layout
│   ├── HomePage
│   ├── ProductListingPage
│   └── ProductViewPage
├── App.jsx        rotas da aplicação
└── main.jsx       ponto de entrada
public/            imagens dos produtos, coleções e slides
```

## Observações

- Os produtos exibidos são dados de exemplo, escritos diretamente no código (sem API).
- Os filtros e o campo "Ordenar por" da listagem são apenas visuais.
- A busca do cabeçalho leva para `/products?filter=texto` e mostra o termo no título da listagem.
- O enunciado original da atividade está no arquivo `ORIGINAL.md`.