import React from "react";
import { Contacther } from "./style";
import { Link } from "react-router-dom";
import arrowright from '../../../assets/icons/shopArrow.svg'
import logotip from '../../../assets/icons/logotip.png'

const ContactHero = () => {


  return (
    <Contacther>
      <Contacther.Container>
        <Contacther.Wrapper>
          <Contacther.Logotip src={logotip}/>
          <Contacther.Title >Contact</Contacther.Title>
          <Contacther.Navigation>
            <Link to="/" className="homelink" >
              Home
            </Link>
            <Contacther.ArrowRigt src={arrowright} />
            <Link to="/contact" className="shoplink" >
            Contact
            </Link>
          </Contacther.Navigation>
        </Contacther.Wrapper>
      </Contacther.Container>
    </Contacther>
  );
};

export default ContactHero;
