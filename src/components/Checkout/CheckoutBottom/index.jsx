import React from "react";
import Input from "../../Input/index";
import Dropdown from "../../Select";
import { CheckBottomStyle } from "./style";
import Button from "../../Button/Button";

const CheckBottom = () => {
  const countries = [
    { id: 1, name: "Shri Lanka", value: "shrilanka" },
    { id: 2, name: "Uzbekistan", value: "uzbekistan" },
    { id: 3, name: "United States", value: "usa" },
    { id: 4, name: "Russia", value: "russia" },
    { id: 5, name: "China", value: "china" },
    { id: 6, name: "India", value: "india" },
    { id: 7, name: "Brazil", value: "brazil" },
    { id: 8, name: "Germany", value: "germany" },
    { id: 9, name: "France", value: "france" },
    { id: 10, name: "Japan", value: "japan" },
  ];

  return (
    <CheckBottomStyle>
      <CheckBottomStyle.Container>
        <CheckBottomStyle.Wrapper>
          <CheckBottomStyle.RightBox>
            <CheckBottomStyle.RightItems>
              <CheckBottomStyle.RightBoxTitle>
                Billing details
              </CheckBottomStyle.RightBoxTitle>
              <CheckBottomStyle.RightItems2>
                <Input
                  header={"First Name"}
                  hc={"#000"}
                  width={"211px"}
                  height={"75px"}
                />
                <Input
                  header={"Last Name"}
                  hc={"#000"}
                  width={"211px"}
                  height={"75px"}
                />
              </CheckBottomStyle.RightItems2>
            </CheckBottomStyle.RightItems>
            <CheckBottomStyle.RightItems3>
              <Input
                header={"Company Name (Optional)"}
                padding={"0 0 0  15px"}
                borderinput={"1px solid #9F9F9F"}
                hc={"#000"}
                height={"75px"}
              />
            </CheckBottomStyle.RightItems3>
            <CheckBottomStyle.RightItems>
              <Dropdown
                height="75px"
                borderradius={"10px"}
                title={"Sri Lanka"}
                padding={"26px 0 25px 30px"}
                header={"Country / Region"}
                border={"1px solid #9F9F9F"}
                options={countries}
              />
            </CheckBottomStyle.RightItems>
            <CheckBottomStyle.RightItems>
              <Input
                header={"CoStreet address"}
                padding={"0 0 0  15px"}
                borderinput={"1px solid #9F9F9F"}
                hc={"#000"}
                height={"75px"}
              />
            </CheckBottomStyle.RightItems>
            <CheckBottomStyle.RightItems3>
              <Input
                header={"Town / City"}
                padding={"0 0 0  15px"}
                borderinput={"1px solid #9F9F9F"}
                hc={"#000"}
                height={"75px"}
              />
            </CheckBottomStyle.RightItems3>
            <CheckBottomStyle.RightItems>
              <Dropdown
                height="75px"
                borderradius={"10px"}
                title={"Western Province"}
                padding={"26px 0 25px 30px"}
                header={"Western Province"}
                border={"1px solid #9F9F9F"}
                options={countries}
              />
            </CheckBottomStyle.RightItems>
            <CheckBottomStyle.RightItems>
              <Input
                header={"ZIP code"}
                padding={"0 0 0  15px"}
                borderinput={"1px solid #9F9F9F"}
                hc={"#000"}
                height={"75px"}
                type={"text"}
              />
            </CheckBottomStyle.RightItems>
            <CheckBottomStyle.RightItems>
              <Input
                header={"Phone"}
                padding={"0 0 0  15px"}
                borderinput={"1px solid #9F9F9F"}
                hc={"#000"}
                height={"75px"}
                type={"number"}
              />
            </CheckBottomStyle.RightItems>
            <CheckBottomStyle.RightItems3>
              <Input
                header={"Email address"}
                padding={"0 0 0  15px"}
                borderinput={"1px solid #9F9F9F"}
                hc={"#000"}
                height={"75px"}
                type={"email"}
              />
            </CheckBottomStyle.RightItems3>
            <CheckBottomStyle.RightItems>
              <Input
                padding={"0 0 0  15px"}
                borderinput={"1px solid #9F9F9F"}
                hc={"#000"}
                height={"75px"}
                type={"text"}
              />
            </CheckBottomStyle.RightItems>
          </CheckBottomStyle.RightBox>
          <CheckBottomStyle.LeftBox>
            <CheckBottomStyle.TopBox>
              <CheckBottomStyle.TextBox>
                <CheckBottomStyle.SubTitle>Product</CheckBottomStyle.SubTitle>
                <CheckBottomStyle.SubTitle>Subtotal</CheckBottomStyle.SubTitle>
              </CheckBottomStyle.TextBox>
              <CheckBottomStyle.TextBox>
                <CheckBottomStyle.NameCountBox>
                  <CheckBottomStyle.Name>Asgaard sofa</CheckBottomStyle.Name>
                  <CheckBottomStyle.Price>
                    <span>X</span>1
                  </CheckBottomStyle.Price>
                </CheckBottomStyle.NameCountBox>
                <CheckBottomStyle.Price>Rs. 250,000.00</CheckBottomStyle.Price>
              </CheckBottomStyle.TextBox>
              <CheckBottomStyle.TextBox>
                <CheckBottomStyle.SubTitle2>
                  Subtotal
                </CheckBottomStyle.SubTitle2>
                <CheckBottomStyle.Price>Rs. 250,000.00</CheckBottomStyle.Price>
              </CheckBottomStyle.TextBox>
              <CheckBottomStyle.TextBox>
                <CheckBottomStyle.SubTitle2>Total</CheckBottomStyle.SubTitle2>
                <CheckBottomStyle.Price2>
                  Rs. 250,000.00
                </CheckBottomStyle.Price2>
              </CheckBottomStyle.TextBox>
            </CheckBottomStyle.TopBox>
            <CheckBottomStyle.BottomBox>
              <CheckBottomStyle.CheckInputBox>
                <CheckBottomStyle.CheckInput1 type="checkbox" />
                <CheckBottomStyle.InputTitle>
                  Direct Bank Transfer
                </CheckBottomStyle.InputTitle>
              </CheckBottomStyle.CheckInputBox>
              <CheckBottomStyle.Desc>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </CheckBottomStyle.Desc>
              <CheckBottomStyle.CheckInputBox>
                <CheckBottomStyle.CheckInput1 type="checkbox" />
                <CheckBottomStyle.InputTitle2>
                  Direct Bank Transfer
                </CheckBottomStyle.InputTitle2>
              </CheckBottomStyle.CheckInputBox>
              <CheckBottomStyle.CheckInputBox>
                <CheckBottomStyle.CheckInput1 type="checkbox" />
                <CheckBottomStyle.InputTitle2>
                  Cash On Delivery
                </CheckBottomStyle.InputTitle2>
              </CheckBottomStyle.CheckInputBox>
              <CheckBottomStyle.Desc2>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </CheckBottomStyle.Desc2>
              <Button
                allmargin={'0 auto'}
                border={"1px solid #000"}
                borderradius={"15px;"}
                width={"302px"}
                allpadding={"17px 103px"}
                text={"Place order"}
              />
            </CheckBottomStyle.BottomBox>
          </CheckBottomStyle.LeftBox>
        </CheckBottomStyle.Wrapper>
      </CheckBottomStyle.Container>
    </CheckBottomStyle>
  );
};

export default CheckBottom;


