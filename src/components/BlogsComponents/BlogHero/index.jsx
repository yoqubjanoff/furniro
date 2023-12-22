import React from "react";
import { BlogStyle } from "./style";
import { Link } from "react-router-dom";
import arrowright from '../../../assets/icons/shopArrow.svg'
import logotip from '../../../assets/icons/logotip.png'

const BlogHero = () => {


  return (
    <BlogStyle>
      <BlogStyle.Container>
        <BlogStyle.Wrapper>
          <BlogStyle.Logotip src={logotip}/>
          <BlogStyle.Title >Blog</BlogStyle.Title>
          <BlogStyle.Navigation>
            <Link to="/" className="homelink" >
              Home
            </Link>
            <BlogStyle.ArrowRigt src={arrowright} />
            <Link to="/blog" className="shoplink" >
            Blog
            </Link>
          </BlogStyle.Navigation>
        </BlogStyle.Wrapper>
      </BlogStyle.Container>
    </BlogStyle>
  );
};

export default BlogHero;
