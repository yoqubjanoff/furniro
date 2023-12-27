import styled from "styled-components";

export const ViewHerStyle = styled.section`
  width: 100%;
  padding: 35px 0 69px 0;
border-bottom: 1px solid #D9D9D9;
`;
ViewHerStyle.Container = styled.div`
  width: 100%;
  max-width: 1241px;
  margin: 0 auto;
`;
ViewHerStyle.Wrapp = styled.div`
  display: flex;
  gap: 106px;
  width: 100%;
`;

ViewHerStyle.RightBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 556px;
  gap: 35px;
`;
ViewHerStyle.LittleBox = styled.div`
  width: 100%;
  max-width: 76px;
`;

ViewHerStyle.LittleImgs = styled.img`
  width: 100%;
`;
ViewHerStyle.MainImgBox = styled.div`
  width: 100%;
  max-width: 423px;
  height: 500px;
  border-radius: 10px;
  background: #f9f1e7;
`;
ViewHerStyle.MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

ViewHerStyle.LeftBox = styled.div`
  width: 100%;
  max-width: 605px;
`;
ViewHerStyle.LeftTopbox = styled.div`
width: 100%;
padding-bottom: 65px;
border-bottom: 1px solid #D9D9D9;
`;
ViewHerStyle.Title = styled.h4`
  color: #000;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
ViewHerStyle.Price = styled.span`
  color: #9f9f9f;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
`;
ViewHerStyle.StarBox = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
ViewHerStyle.Star = styled.img`
  padding-right: 15px;
`;
ViewHerStyle.Review = styled.p`
  color: #9f9f9f;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 22px;
  border-left: 1px solid #9f9f9f9f;
`;
ViewHerStyle.LeftDesc = styled.p`
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  max-width: 424px;
  margin-bottom: 22px;
`;
ViewHerStyle.Info = styled.span`
  display: inline-block;
  color: #9f9f9f;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
`;
ViewHerStyle.BtnSizeBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 18px;
`;
ViewHerStyle.ColorBox = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 32px;
`;
ViewHerStyle.Label1 = styled.label`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: ${(props) => (props.checked ? "2px solid #000" : "")};
  cursor: pointer;
  padding: 3px;
  background: #816dfa;
`;
ViewHerStyle.Label2 = styled.label`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: ${(props) => (props.checked ? "2px solid red" : "")};
  cursor: pointer;
  padding: 3px;
  background: #000000;
`;
ViewHerStyle.Label3 = styled.label`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: ${(props) => (props.checked ? "2px solid #000" : "")};
  cursor: pointer;
  padding: 3px;
  background: #b88e2f;
`;
ViewHerStyle.ColorInput1 = styled.input`
  opacity: 0;
`;

ViewHerStyle.ColorInput2 = styled.input`
  opacity: 0;
`;

ViewHerStyle.ColorInput3 = styled.input`
  opacity: 0;
`;
ViewHerStyle.ButtonsBox = styled.div`
display: flex;
gap: 18px;
`;
ViewHerStyle.AddBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 123px;
height: 64px;
border-radius: 10px;
border: 1px solid #9F9F9F;
background: #FFF;
span{
  margin: 0 35px 0 35px;
}
`;
ViewHerStyle.LeftInfoBox = styled.div`
display: flex;
padding-top: 48px;
`;
ViewHerStyle.InfoRow = styled.div`
display: flex;
flex-direction: column;
row-gap: 12px;
`;
ViewHerStyle.InfoDesc = styled.p`
  display: flex;
  align-items: center;
color: #9F9F9F;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
.iconbox{
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left: 12px;
}
.linkView{
  cursor: pointer;
}
`;
ViewHerStyle.InfoDot = styled.p`
color: #9F9F9F;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
span{
  color: #9F9F9F;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right: 12px;
}`;
