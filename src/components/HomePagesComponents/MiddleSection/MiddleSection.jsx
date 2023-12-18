import React, { useRef } from "react";
import Button from "../../Button/Button";
import { MiddleStyle } from "./style";
import arrow from "../../../assets/icons/arrowRight.svg";
import slide1Image from "../../../assets/images/slideImg2.svg";
import slide2Image from "../../../assets/images/slideImg.svg";
import slide3Image from "../../../assets/images/slideImg3.svg";
import slide4Image from "../../../assets/images/slideImg4.svg";
import rightArrow from "../../../assets/icons/arrowRight.png";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MiddleSection = () => {
  const swiperRef = useRef(null);

  return (
    <MiddleStyle>
      <MiddleStyle.Container>
        <MiddleStyle.Wrapper>
          <MiddleStyle.TextBox>
            <MiddleStyle.MiddleTitle>
              50+ Beautiful rooms inspiration
            </MiddleStyle.MiddleTitle>
            <MiddleStyle.Desc>
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you
            </MiddleStyle.Desc>
            <Button
              backgroundcolor="#B88E2F"
              color="#fff"
              text="Explore More"
              width="176px"
              allpadding="12px 36px"
            />
          </MiddleStyle.TextBox>
          <MiddleStyle.ImageBox>
            <MiddleStyle.ImageSmallBox>
              <MiddleStyle.InnerBox>
                <MiddleStyle.InnerDesc2>
                  01 <span></span>
                </MiddleStyle.InnerDesc2>
                <MiddleStyle.InnerDesc>Bed Room</MiddleStyle.InnerDesc>
              </MiddleStyle.InnerBox>
              <MiddleStyle.InnerTitle>Inner Peace</MiddleStyle.InnerTitle>
            </MiddleStyle.ImageSmallBox>
            <MiddleStyle.Button>
              <MiddleStyle.InneArrow src={arrow} />
            </MiddleStyle.Button>
          </MiddleStyle.ImageBox>
        </MiddleStyle.Wrapper>
      </MiddleStyle.Container>
      <MiddleStyle.SlideBox>
        <Swiper
          ref={swiperRef}
          cssMode={true}
          navigation={false}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1Image} className="imgSlide" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2Image} className="imgSlide" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3Image} className="imgSlide" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4Image} className="imgSlide" alt="" />
          </SwiperSlide>
        </Swiper>
        <MiddleStyle.CustomArrowBox
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <img
            src={rightArrow}
            alt=""
            style={{ width: "28px", height: "28px" }}
          />
        </MiddleStyle.CustomArrowBox>
      </MiddleStyle.SlideBox>
    </MiddleStyle>
  );
};

export default MiddleSection;
