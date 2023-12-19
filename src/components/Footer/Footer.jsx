import React from "react";
import { FooterStyle } from "./style";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterStyle.Container>
        <FooterStyle.Wrapper>
          <FooterStyle.TopBox>
            <FooterStyle.FirstBox>
              <FooterStyle.FooterTitle>Funiro.</FooterStyle.FooterTitle>
              <FooterStyle.Adress>
                400 University Drive Suite 200 Coral Gables, FL 33134 USAА
              </FooterStyle.Adress>
            </FooterStyle.FirstBox>
            <FooterStyle.SecondBox>
              <FooterStyle.SecondBoxTitle>Links</FooterStyle.SecondBoxTitle>
              <FooterStyle.FooterLink>
                <Link className="footer-link" to="/">
                  Home
                </Link>
                <Link className="footer-link" to="/">
                  Shop
                </Link>
                <Link className="footer-link" to="/">
                  About
                </Link>
                <Link className="footer-link" to="/">
                  Contact
                </Link>
              </FooterStyle.FooterLink>
            </FooterStyle.SecondBox>
            <FooterStyle.ThrethsBox>
              <FooterStyle.Help>Help</FooterStyle.Help>
              <FooterStyle.ThrethLink>
                <Link className="footer-link" to="/">
                  Payment Options
                </Link>
                <Link className="footer-link" to="/">
                  Returns
                </Link>
                <Link className="footer-link" to="/">
                  Privacy Policies
                </Link>
              </FooterStyle.ThrethLink>
            </FooterStyle.ThrethsBox>
            <FooterStyle.FourthBox>
              <FooterStyle.FourthBoxTitle>
                Newsletter
              </FooterStyle.FourthBoxTitle>
              <FooterStyle.FourthInputBox>
                <FooterStyle.FourthInput placeholder="Enter Your Email Address" />
                <FooterStyle.FourthButton>SUBSCRIBE</FooterStyle.FourthButton>
              </FooterStyle.FourthInputBox>
            </FooterStyle.FourthBox>
          </FooterStyle.TopBox>
          <FooterStyle.BottomBox>
            <FooterStyle.DescBottom>
              2023 furino. All rights reverved
            </FooterStyle.DescBottom>
          </FooterStyle.BottomBox>
        </FooterStyle.Wrapper>
      </FooterStyle.Container>
    </FooterStyle>
  );
};

export default Footer;
