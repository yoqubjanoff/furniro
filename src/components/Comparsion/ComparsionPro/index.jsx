import React from "react";
import { ComparsionproStyle } from "./style";
import { Link } from "react-router-dom";
import product1 from "../../../assets/images/comparsionImg.png";
import product2 from "../../../assets/images/comparsionIm2.png";
import star from "../../../assets/icons/star.png";

const ComparsionPro = () => {
  return (
    <ComparsionproStyle>
      <ComparsionproStyle.Container>
        <ComparsionproStyle.Wrapper>
          <ComparsionproStyle.FirstBox>
            <ComparsionproStyle.FirstBoxTitle>
              Go to Product page for more Products
            </ComparsionproStyle.FirstBoxTitle>
            <Link to="" className="comparsionlink">View More</Link>
          </ComparsionproStyle.FirstBox>
          <ComparsionproStyle.SecondBox>
            <ComparsionproStyle.ImgBox>
              <img src={product2} alt="product image" className="productimg"/>
            </ComparsionproStyle.ImgBox>
            <ComparsionproStyle.Name>Asgaard Sofa</ComparsionproStyle.Name>
            <ComparsionproStyle.Price>Rs. 250,000.00</ComparsionproStyle.Price>
            <ComparsionproStyle.ReviewBox>
              <ComparsionproStyle.Baho>4.7</ComparsionproStyle.Baho>
              <img src={star} alt="price image" className="star" width={'124px'}/>
              <ComparsionproStyle.ContView>
                204 Review
              </ComparsionproStyle.ContView>
            </ComparsionproStyle.ReviewBox>
          </ComparsionproStyle.SecondBox>
          <ComparsionproStyle.SecondBox>
            <ComparsionproStyle.ImgBox>
              <img src={product1} alt="product image" className="productimg"/>
            </ComparsionproStyle.ImgBox>
            <ComparsionproStyle.Name>Asgaard Sofa</ComparsionproStyle.Name>
            <ComparsionproStyle.Price>Rs. 250,000.00</ComparsionproStyle.Price>
            <ComparsionproStyle.ReviewBox>
              <ComparsionproStyle.Baho>4.2</ComparsionproStyle.Baho>
              <img src={star} alt="price image" className="star" width={'124px'}/>
              <ComparsionproStyle.ContView>
                145 Review
              </ComparsionproStyle.ContView>
            </ComparsionproStyle.ReviewBox>
          </ComparsionproStyle.SecondBox>
          <ComparsionproStyle.FourthBox>
            <ComparsionproStyle.FourthBoxTitle>
              Add A Product
            </ComparsionproStyle.FourthBoxTitle>
            <ComparsionproStyle.Select>
              <option value="coffe-table">Coffee Table</option>
              <option value="bed">Bed</option>
              <option value="cupboard">Cupboard</option>
              <option value="armchair">Armchair</option>
            </ComparsionproStyle.Select>
          </ComparsionproStyle.FourthBox>
        </ComparsionproStyle.Wrapper>
      </ComparsionproStyle.Container>
    </ComparsionproStyle>
  );
};

export default ComparsionPro;
