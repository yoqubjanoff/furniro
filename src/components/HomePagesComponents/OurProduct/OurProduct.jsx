import React from "react";
import { OurStyle } from "./style";
import our1 from "../../../assets/images/our1.svg";
import Button from "../../Button/Button";
import share from "../../../assets/icons/share.svg";
import share1 from "../../../assets/icons/share2.svg";
import heart from "../../../assets/icons/whiteHeart.svg";
import stul from "../../../assets/images/stul.svg";
import divan from "../../../assets/images/divan.svg";
import mehmonhona from "../../../assets/images/mehmonhona.svg";
import svetilnik from "../../../assets/images/swetilnik.svg";
import damolish from "../../../assets/images/damolish.svg";
import damolish2 from "../../../assets/images/damolish2.svg";
import divan2 from "../../../assets/images/divan2.svg";

const OurProduct = () => {
  return (
    <OurStyle>
      <OurStyle.Container>
        <OurStyle.Wrapper>
          <OurStyle.Title>Our Products</OurStyle.Title>
          <OurStyle.ImageContainer>
            <OurStyle.ImageTitleWrap>
              <OurStyle.DiscoutBox>
                <OurStyle.Element>-30%</OurStyle.Element>
              </OurStyle.DiscoutBox>
              <OurStyle.MainImg src={our1} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Syltherine</OurStyle.DescTitle>
                <OurStyle.Desc>Stylish cafe chair</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 2.500.000</OurStyle.MainPrice>
                  <OurStyle.OldPrice>Rp 3.500.000</OurStyle.OldPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
            <OurStyle.ImageTitleWrap> 
              <OurStyle.MainImg src={stul} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Leviosa</OurStyle.DescTitle>
                <OurStyle.Desc>Stylish cafe chair</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 2.500.000</OurStyle.MainPrice>
                  <OurStyle.OldPrice></OurStyle.OldPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
            <OurStyle.ImageTitleWrap>
              <OurStyle.DiscoutBox>
                <OurStyle.Element>-50%</OurStyle.Element>
              </OurStyle.DiscoutBox>
              <OurStyle.MainImg src={divan} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Lolito</OurStyle.DescTitle>
                <OurStyle.Desc>Luxury big sofa</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 7.00.000</OurStyle.MainPrice>
                  <OurStyle.OldPrice>Rp 14.00.000</OurStyle.OldPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
            <OurStyle.ImageTitleWrap>
              <OurStyle.DiscoutBox2>
                <OurStyle.Element>New</OurStyle.Element>
              </OurStyle.DiscoutBox2>
              <OurStyle.MainImg src={mehmonhona} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Respira</OurStyle.DescTitle>
                <OurStyle.Desc>Outdoor bar table and stool</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 500.000</OurStyle.MainPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
            <OurStyle.ImageTitleWrap>
              <OurStyle.MainImg src={svetilnik} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Grifo</OurStyle.DescTitle>
                <OurStyle.Desc>Night lamp</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 1.500.000</OurStyle.MainPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
            <OurStyle.ImageTitleWrap>
              <OurStyle.DiscoutBox2>
                <OurStyle.Element>New</OurStyle.Element>
              </OurStyle.DiscoutBox2>
              <OurStyle.MainImg src={damolish} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Muggo</OurStyle.DescTitle>
                <OurStyle.Desc>Small mug</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 150.000</OurStyle.MainPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
            <OurStyle.ImageTitleWrap>
              <OurStyle.DiscoutBox>
                <OurStyle.Element>-30%</OurStyle.Element>
              </OurStyle.DiscoutBox>
              <OurStyle.MainImg src={damolish2} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Pingky</OurStyle.DescTitle>
                <OurStyle.Desc>Cute bed set</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 2.500.000</OurStyle.MainPrice>
                  <OurStyle.OldPrice>Rp 3.500.000</OurStyle.OldPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
            <OurStyle.ImageTitleWrap>
              <OurStyle.DiscoutBox2>
                <OurStyle.Element>New</OurStyle.Element>
              </OurStyle.DiscoutBox2>
              <OurStyle.MainImg src={divan2} />
              <OurStyle.DescBox>
                <OurStyle.DescTitle>Potty</OurStyle.DescTitle>
                <OurStyle.Desc>Minimalist flower pot</OurStyle.Desc>
                <OurStyle.PriceBox>
                  <OurStyle.MainPrice>Rp 5000.000</OurStyle.MainPrice>
                </OurStyle.PriceBox>
              </OurStyle.DescBox>
              <OurStyle.PositionBox>
                <Button
                  backgroundcolor="#fff"
                  width="202px"
                  allpadding="12px 52px 12px 52px"
                  text="Add to cart"
                  color="#B88E2F"
                  fontweight="600"
                />
                <OurStyle.PositionIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share} />
                    <OurStyle.PositionTitle>Share</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={share1} />
                    <OurStyle.PositionTitle>Compare</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                  <OurStyle.PositionTitleIconsBox>
                    <OurStyle.PositionIcon src={heart} />
                    <OurStyle.PositionTitle>Like</OurStyle.PositionTitle>
                  </OurStyle.PositionTitleIconsBox>
                </OurStyle.PositionIconsBox>
              </OurStyle.PositionBox>
            </OurStyle.ImageTitleWrap>
          </OurStyle.ImageContainer>
          <Button
            width="245px"
            border="1px solid #B88E2F"
            allpadding="12px 74px 12px 80px"
            text="Show More"
            allmargin="32px 0 0 0"
            color="#B88E2F"
            fontweight="600"
          />
        </OurStyle.Wrapper>
      </OurStyle.Container>
    </OurStyle>
  );
};

export default OurProduct;
