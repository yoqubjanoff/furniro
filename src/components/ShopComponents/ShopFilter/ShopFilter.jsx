import React from "react";
import { ShopFilterStyle } from "./style";
import filter1 from '../../../assets/icons/filter1.svg'
import filter2 from '../../../assets/icons/filter2.svg'
import filter3 from '../../../assets/icons/filter3.svg'
import Input from "../../Input";

const ShopFilter = () => {
  return (
    <ShopFilterStyle>
      <ShopFilterStyle.Container>
        <ShopFilterStyle.Wrap>
          <ShopFilterStyle.FirstBox>
            <ShopFilterStyle.IconBox>
              <ShopFilterStyle.Icon1 src={filter1}/>
              <ShopFilterStyle.Desc1>Filter</ShopFilterStyle.Desc1>
              <ShopFilterStyle.Icon2 src={filter2}/>
              <ShopFilterStyle.Icon3 src={filter3}/>
            </ShopFilterStyle.IconBox>
            <ShopFilterStyle.Desc2>
              Showing 1–16 of 32 results
            </ShopFilterStyle.Desc2>
          </ShopFilterStyle.FirstBox>
          <ShopFilterStyle.SecondBox>
            <ShopFilterStyle.Show>Show</ShopFilterStyle.Show>
            <ShopFilterStyle.ShowNum>16</ShopFilterStyle.ShowNum>
            <ShopFilterStyle.Label>Short by</ShopFilterStyle.Label>
            <Input borderinput='none' width='188px' height='55px' placeholder='Default' placeholderColor='#9F9F9F' paddinginput='0 0 0 30px'/>
          </ShopFilterStyle.SecondBox>
        </ShopFilterStyle.Wrap>
      </ShopFilterStyle.Container>
    </ShopFilterStyle>
  );
};

export default ShopFilter;

