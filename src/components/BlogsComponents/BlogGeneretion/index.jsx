import React from 'react'
import { GenericStyle } from './style'
import { Link } from 'react-router-dom';


const BlogGeneretion = ({ mainImg, mainTitle, desc, propslink,margin}) => {


  return (
    <GenericStyle margin={margin}>
      <GenericStyle.Wrapper>
        <GenericStyle.ImageBox>
          <GenericStyle.MainImage src={mainImg} />
        </GenericStyle.ImageBox>
        <GenericStyle.WoodBox>
          <GenericStyle.WoodText1>Admin</GenericStyle.WoodText1>
          <GenericStyle.WoodText2>14 Oct 2022</GenericStyle.WoodText2>
          <GenericStyle.WoodText3>Wood</GenericStyle.WoodText3>
        </GenericStyle.WoodBox>
        <GenericStyle.WoodTittle>{mainTitle}</GenericStyle.WoodTittle>
        <GenericStyle.WoodDesc>{desc}</GenericStyle.WoodDesc>
        <Link to='/about' className='generic-link'>Read more</Link>
      </GenericStyle.Wrapper>
    </GenericStyle>
  );
};

export default BlogGeneretion;

