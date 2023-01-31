import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
// import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethods";
// import { addProduct } from "../redux/cartRedux";
// import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/products/find/" + id);
  //       setProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);

  // const handleQuantity = (type) => {
  //   if (type === "dec") {
  //     quantity > 1 && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1);
  //   }
  // };

  // const handleClick = () => {
  //   dispatch(
  //     addProduct({ ...product, quantity, color, size })
  //   );
  // };
  const color = ['#123', '#567', '#456']
  const size = ['xl', 'xxl', 'xxxl']
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src='https://media.istockphoto.com/id/636739634/photo/banana.jpg?s=612x612&w=0&k=20&c=pO0985tQi1LpWRlWqpRvbab8S5yxgnEOVcs5CHIlcDE=' />
        </ImgContainer>
        <InfoContainer>
          <Title>Banana</Title>
          <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut mollitia sequi velit laudantium ea culpa accusantium.</Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {color?.map((c) => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>{quantity}</Amount>
              <Add />
            </AmountContainer>
            <Button >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
