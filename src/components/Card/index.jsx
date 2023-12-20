import React from "react";
import { Container } from "./style";
import bug from "../../assets/icons/bug.svg";
import delet from '../../assets/icons/delet.png';
import product from '../../assets/icons/cardimg.png';

const Card = () => {
  return (
    <Container>
      <Container.Wrapper>
        <Container.Header>
          <Container.Title>Shopping Cart</Container.Title>
          <Container.IconBug src={bug} />
        </Container.Header>
        <Container.ImageTitleBox>
          <Container.ImageBox>
            <Container.Image src={product} />
          </Container.ImageBox>
          <Container.TitleDescBox>
            <Container.NameProduct>Asgaard sofa</Container.NameProduct>
            <Container.NumNameBox >
                <Container.Num>1</Container.Num>
                <Container.Eks >x</Container.Eks>
                <Container.Price>Rs. 250,000.00</Container.Price>
            </Container.NumNameBox>
          </Container.TitleDescBox>
          <ontainer.IconDelet src={delet}/>
        </Container.ImageTitleBox>
      </Container.Wrapper>
    </Container>
  );
};

export default Card;


