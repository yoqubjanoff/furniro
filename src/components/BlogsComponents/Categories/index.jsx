import React, { useState } from "react";
import BlogGeneretion from "../BlogGeneretion";
import { BlogStyle } from "./style";
import image1 from "../../../assets/images/blogheroimg.jpg";
import image2 from "../../../assets/images/generic2.jpg";
import image3 from "../../../assets/images/generic3.jpg";
import Input from "../../Input/index";
import search from "../../../assets/icons/search.png";
import book from "../../../assets/images/book.jpg";
import book1 from "../../../assets/images/book1.jpg";
import book2 from "../../../assets/images/book2.jpg";
import book3 from "../../../assets/images/book3.jpg";
import book4 from "../../../assets/images/book4.jpg";
import Button from '../../Button/Button'

const BlogCategories = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handlePagination = (pageNumber) => {
    setActiveButton(pageNumber);
  };
  return (
    <BlogStyle>
      <BlogStyle.Container>
        <BlogStyle.Wrapper>
          <BlogStyle.RightLeftWrap>
          <BlogStyle.RightBox>
            <BlogGeneretion
              mainImg={image1}
              mainTitle={"Going all-in with millennial design"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              }
              margin="66px"
            />
            <BlogGeneretion
              mainImg={image2}
              mainTitle={"Exploring new ways of decorating"}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              margin="66px"
            />
            <BlogGeneretion
              mainImg={image3}
              mainTitle={"Handmade pieces that took time to make"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
              }
            />
          </BlogStyle.RightBox>
          <BlogStyle.LeftBox>
            <BlogStyle.LeftTopBox>
              <BlogStyle.LeftBoxItemsInput>
                <Input
                  padding={"0 0 0 10px"}
                  br={"12px"}
                  prefix={search}
                  height={"58px"}
                />
              </BlogStyle.LeftBoxItemsInput>
              <BlogStyle.LeftBoxItems>
                <BlogStyle.ItemsTitle>Categories</BlogStyle.ItemsTitle>
              </BlogStyle.LeftBoxItems>
              <BlogStyle.LeftBoxItems>
                <BlogStyle.ItemsName>Crafts</BlogStyle.ItemsName>
                <BlogStyle.ItemsName>2</BlogStyle.ItemsName>
              </BlogStyle.LeftBoxItems>
              <BlogStyle.LeftBoxItems>
                <BlogStyle.ItemsName>Design</BlogStyle.ItemsName>
                <BlogStyle.ItemsName>8</BlogStyle.ItemsName>
              </BlogStyle.LeftBoxItems>
              <BlogStyle.LeftBoxItems>
                <BlogStyle.ItemsName>Handmade</BlogStyle.ItemsName>
                <BlogStyle.ItemsName>7</BlogStyle.ItemsName>
              </BlogStyle.LeftBoxItems>
              <BlogStyle.LeftBoxItems>
                <BlogStyle.ItemsName>Interior</BlogStyle.ItemsName>
                <BlogStyle.ItemsName>1</BlogStyle.ItemsName>
              </BlogStyle.LeftBoxItems>
              <BlogStyle.LeftBoxItems>
                <BlogStyle.ItemsName>Wood</BlogStyle.ItemsName>
                <BlogStyle.ItemsName>6</BlogStyle.ItemsName>
              </BlogStyle.LeftBoxItems>
            </BlogStyle.LeftTopBox>
            <BlogStyle.LeftBottom>
              <BlogStyle.BottomTitleBox>
                <BlogStyle.BottomTitle>Recent Posts</BlogStyle.BottomTitle>
              </BlogStyle.BottomTitleBox>
              <BlogStyle.BottomTitleBox>
                <BlogStyle.BottomBoxImg src={book} />
                <BlogStyle.BottomBoxTextBox>
                  <BlogStyle.BottomDesc>
                    Going all-in with millennial design
                  </BlogStyle.BottomDesc>
                  <BlogStyle.BottomDate>03 Aug 2022</BlogStyle.BottomDate>
                </BlogStyle.BottomBoxTextBox>
              </BlogStyle.BottomTitleBox>
              <BlogStyle.BottomTitleBox>
                <BlogStyle.BottomBoxImg src={book1} />
                <BlogStyle.BottomBoxTextBox>
                  <BlogStyle.BottomDesc>
                    Exploring new ways of decorating
                  </BlogStyle.BottomDesc>
                  <BlogStyle.BottomDate>03 Aug 2022</BlogStyle.BottomDate>
                </BlogStyle.BottomBoxTextBox>
              </BlogStyle.BottomTitleBox>
              <BlogStyle.BottomTitleBox>
                <BlogStyle.BottomBoxImg src={book2} />
                <BlogStyle.BottomBoxTextBox>
                  <BlogStyle.BottomDesc>
                    Handmade pieces that took time to make
                  </BlogStyle.BottomDesc>
                  <BlogStyle.BottomDate>03 Aug 2022</BlogStyle.BottomDate>
                </BlogStyle.BottomBoxTextBox>
              </BlogStyle.BottomTitleBox>
              <BlogStyle.BottomTitleBox>
                <BlogStyle.BottomBoxImg src={book3} />
                <BlogStyle.BottomBoxTextBox>
                  <BlogStyle.BottomDesc>
                    Modern home in Milan
                  </BlogStyle.BottomDesc>
                  <BlogStyle.BottomDate>03 Aug 2022</BlogStyle.BottomDate>
                </BlogStyle.BottomBoxTextBox>
              </BlogStyle.BottomTitleBox>
              <BlogStyle.BottomTitleBox>
                <BlogStyle.BottomBoxImg src={book4} />
                <BlogStyle.BottomBoxTextBox>
                  <BlogStyle.BottomDesc>
                    Colorful office redesign
                  </BlogStyle.BottomDesc>
                  <BlogStyle.BottomDate>03 Aug 2022</BlogStyle.BottomDate>
                </BlogStyle.BottomBoxTextBox>
              </BlogStyle.BottomTitleBox>
            </BlogStyle.LeftBottom>
          </BlogStyle.LeftBox>
          </BlogStyle.RightLeftWrap>
          <BlogStyle.ButtonBox>
            <Button
              text="1"
              backgroundcolor={activeButton === 1 ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === 1 ? "#FFFFFF" : "#000000"}
              width="60px"
              height="60px"
              allpadding="12px 26px"
              borderradius="10px"
              onClick={() => handlePagination(1)}
            />
            <Button
              text="2"
              backgroundcolor={activeButton === 2 ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === 2 ? "#FFFFFF" : "#000000"}
              width="60px"
              height="60px"
              allpadding="12px 26px"
              borderradius="10px"
              onClick={() => handlePagination(2)}
            />
            <Button
              text="3"
              backgroundcolor={activeButton === 3 ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === 3 ? "#FFFFFF" : "#000000"}
              width="60px"
              height="60px"
              allpadding="12px 26px"
              borderradius="10px"
              onClick={() => handlePagination(3)}
            />
            <Button
              text="Next"
              backgroundcolor={activeButton === "Next" ? "#B88E2F" : "#F9F1E7"}
              color={activeButton === "Next" ? "#FFFFFF" : "#000000"}
              borderradius="10px"
              onClick={() => handlePagination("Next")}
              width={'98px'}
              height={'60px'}
              allpadding={'15px 28px'}
            />
          </BlogStyle.ButtonBox>
        </BlogStyle.Wrapper>
      </BlogStyle.Container>
    </BlogStyle>
  );
};

export default BlogCategories;
