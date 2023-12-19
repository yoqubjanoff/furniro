import styled from "styled-components";
import middleBgImg from "../../../assets/images/middlesectionImg.svg";

export const MiddleStyle = styled.section`
  padding: 44px 0;
  background-color: #fcf8f3;
`;

MiddleStyle.Container = styled.div`
  width: 100%;
  max-width: 1236px;
  margin: 0 auto;
`;
MiddleStyle.Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 42px;
`;
MiddleStyle.TextBox = styled.div`
  width: 100%;
  max-width: 425px;
`;

MiddleStyle.MiddleTitle = styled.h3`
  color: #3a3a3a;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 7px;
`;
MiddleStyle.Desc = styled.p`
  color: #616161;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 25px;
`;
MiddleStyle.ImageBox = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  max-width: 404px;
  height: 581px;
  background-image: url(${middleBgImg});
  background-repeat: no-repeat;
  background-position: center;
  padding: 0 0 24px 24px;
`;
MiddleStyle.ImageSmallBox = styled.div`
  width: 217px;
  padding: 32px 17px 32px 32px;
  background-color: #ffffffb8;
  backdrop-filter: blur(1.5px);
  span {
    display: inline-block;
    width: 27px;
    height: 1px;
    background-color: #616161;
    margin: 0 8px;
  }
`;
MiddleStyle.InnerBox = styled.div`
  display: flex;
  align-items: center;
`;
MiddleStyle.InnerDesc = styled.p`
  color: #616161;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
MiddleStyle.InnerDesc2 = styled.p`
  display: flex;
  align-items: center;
  color: #616161;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
MiddleStyle.InnerTitle = styled.p`
  color: #3a3a3a;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;
MiddleStyle.InneArrow = styled.img``;
MiddleStyle.Button = styled.button`
  border: none;
  width: 48px;
  height: 48px;
  background-color: #b88e2f;
  cursor: pointer;
`;
MiddleStyle.SlideBox = styled.div`
  gap: 24px;
  .mySwiper {
    position: absolute;
    max-width: 372px;
    height: 532px;
    top: 0;
    right: -22px;
  }
  .imgSlide {
    max-width: 372px;
    height: 486px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 12px;
    left: 52%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }
  .swiper-pagination-bullet {
    position: relative;
    width: 10px;
    height: 10px;
    background-color: #999;
    opacity: 0.7;
    border-radius: 50%;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background-color: #b88e2f;
    position: relative;
  }

  .swiper-pagination-bullet-active:after {
    content: "";
    position: absolute;
    width: 27px;
    height: 27px;
    background-color: transparent;
    transform: translateY(-50%);
    border: 1px solid #b88e2f;
    border-radius: 50%;
    top: -92%;
    left: 50%;
    transform: translateX(-50%);
  }
  .swiper-pagination-bullet:before {
    left: -6px;
  }
  .swiper-pagination-bullet:after {
    right: -6px;
  }
  .swiper-pagination span {
    font-size: 12px;
  }
`;

MiddleStyle.CustomArrowBox = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  background-color: #fff;
  padding: 12px;
  border-radius: 50px;
  top: 197px;
  right: -43px;
  z-index: 10;
  cursor: pointer;
`;
MiddleStyle.CustomArrowLeft = styled.img`
  width: 24px;
  height: 24px;
`;
MiddleStyle.CustomArrowRight = styled.img``;
