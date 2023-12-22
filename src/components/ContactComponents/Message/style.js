import styled from "styled-components";

export const MessageStyle = styled.section`
  padding-bottom: 27px;
`;
MessageStyle.Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
MessageStyle.Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

MessageStyle.RightBox = styled.ul`
  width: 100%;
  max-width: 265px;
`;
MessageStyle.MiddleBox = styled.li`
  display: flex;
  margin-bottom: 42px;
  gap: 30px;
`;
MessageStyle.TextBox = styled.div``;
MessageStyle.Desc = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
MessageStyle.Adress = styled.address`
  max-width: 212px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
MessageStyle.Icons = styled.img`
  width: 22px;
  height: 27px;
`;

MessageStyle.LeftBox = styled.ul`
  width: 100%;
  max-width: 528px;
`;
MessageStyle.Li = styled.li`
  width: 100%;
  max-width: 527px;
  height: 120px;
  margin-bottom: 36px;
`;
MessageStyle.TextArea = styled.textarea`
  position: relative;
  width: 100%;
  max-width: 527px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #9f9f9f;
  background: #fff;
  padding: 26px 0 0 30px;
  outline: none;
  &::placeholder {
    color: #9f9f9f;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
MessageStyle.TextAreaHeader = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 22px;
`;
