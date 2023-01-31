import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "./../data/data";
import Product from "./Product";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  return (
    <Container>
      {popularProducts.map(product =>(
        <Product item={product} />
      ))}
    </Container>
  );
};

export default Products;
