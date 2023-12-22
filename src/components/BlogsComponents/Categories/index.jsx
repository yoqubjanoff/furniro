import React from "react";
import BlogGeneretion from "../BlogGeneretion";
import { BlogStyle } from "./style";
import image1 from "../../../assets/images/blogheroimg.jpg";
import image2 from "../../../assets/images/generic2.jpg";

const BlogCategories = () => {
  return (
    <BlogStyle>
      <BlogStyle.Container>
        <BlogStyle.Wrapper>
          <BlogStyle.RightBox>
            <BlogGeneretion
              mainImg={image1}
              mainTitle={"Going all-in with millennial design"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              }
              margin='54px'
            />
            <BlogGeneretion mainImg={image2} />
            <BlogGeneretion />
          </BlogStyle.RightBox>
        </BlogStyle.Wrapper>
      </BlogStyle.Container>
    </BlogStyle>
  );
};

export default BlogCategories;
