import React from "react";
import { MessageStyle } from "./style";
import Input from "../../Input/index";
import location from "../../../assets/icons/location.svg";
import phone from "../../../assets/icons/phone.svg";
import clock from "../../../assets/icons/clock.svg";
import Button from "../../Button/Button";

const Message = () => {
  return (
    <MessageStyle>
      <MessageStyle.Container>
        <MessageStyle.Wrapper>
          <MessageStyle.RightBox>
            <MessageStyle.MiddleBox>
              <MessageStyle.Icons src={location} />
              <MessageStyle.TextBox>
                <MessageStyle.Desc>Address</MessageStyle.Desc>
                <MessageStyle.Adress>
                  236 5th SE Avenue, New York NY10000, United States
                </MessageStyle.Adress>
              </MessageStyle.TextBox>
            </MessageStyle.MiddleBox>
            <MessageStyle.MiddleBox>
              <MessageStyle.Icons src={phone} />
              <MessageStyle.TextBox>
                <MessageStyle.Desc>Phone</MessageStyle.Desc>
                <MessageStyle.Adress>
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </MessageStyle.Adress>
              </MessageStyle.TextBox>
            </MessageStyle.MiddleBox>
            <MessageStyle.MiddleBox>
              <MessageStyle.Icons src={clock} />
              <MessageStyle.TextBox>
                <MessageStyle.Desc>Working Time</MessageStyle.Desc>
                <MessageStyle.Adress>
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </MessageStyle.Adress>
              </MessageStyle.TextBox>
            </MessageStyle.MiddleBox>
          </MessageStyle.RightBox>
          <MessageStyle.LeftBox>
            <MessageStyle.Li>
              <Input
                header="Your name"
                placeholder="Abc"
                paddinginput="26px 0 25px 29px"
                placeholderColor="#9F9F9F"
              />
            </MessageStyle.Li>
            <MessageStyle.Li>
              <Input
                header="Email address"
                placeholder="Abc@def.com"
                paddinginput="26px 0 25px 29px"
                type="email"
                placeholderColor="#9F9F9F"
              />
            </MessageStyle.Li>
            <MessageStyle.Li>
              <Input
                header="Subject"
                placeholder="This is an optional"
                paddinginput="26px 0 25px 29px"
                placeholderColor="#9F9F9F"
              />
            </MessageStyle.Li>
            <MessageStyle.Li>
              <MessageStyle.TextAreaHeader>Message</MessageStyle.TextAreaHeader>
              <MessageStyle.TextArea placeholder="Hi! i’d like to ask about" />
            </MessageStyle.Li>
            <MessageStyle.Li>
              <Button
                color="#fff"
                text="Submit"
                borderradius="5px"
                backgroundcolor="#B88E2F"
                width="237px"
                height="55px"
                allpadding="13px 0 13px 0"
                allmargin='49px 0 0  0'
              />
            </MessageStyle.Li>
          </MessageStyle.LeftBox>
        </MessageStyle.Wrapper>
      </MessageStyle.Container>
    </MessageStyle>
  );
};

export default Message;
