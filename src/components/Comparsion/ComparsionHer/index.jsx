import React from "react";
import { ComparsionStyleHeader } from "./style";
import { Link } from "react-router-dom";
import arrowright from '../../../assets/icons/shopArrow.svg'
import logotip from '../../../assets/icons/logotip.png'

const ComparsionHeader = () => {


  return (
    <ComparsionStyleHeader>
      <ComparsionStyleHeader.Container>
        <ComparsionStyleHeader.Wrapper>
          <ComparsionStyleHeader.Logotip src={logotip}/>
          <ComparsionStyleHeader.Title >Product Comparison</ComparsionStyleHeader.Title>
          <ComparsionStyleHeader.Navigation>
            <Link to="/" className="homelink" >
              Home
            </Link>
            <ComparsionStyleHeader.ArrowRigt src={arrowright} />
            <Link to="/comparsion" className="shoplink" >
            Comparison
            </Link>
          </ComparsionStyleHeader.Navigation>
        </ComparsionStyleHeader.Wrapper>
      </ComparsionStyleHeader.Container>
    </ComparsionStyleHeader>
  );
};

export default ComparsionHeader;
