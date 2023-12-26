import React from "react";
import { ViewStyle } from "./style";
import { Link } from "react-router-dom";
import arrow from '../../../assets/icons/bottomarrow.png';

const ViewHeader = () => {
  return (
    <ViewStyle>
      <ViewStyle.Container>
        <ViewStyle.Wrap>
          <Link to="/" className="link1">Home</Link>
          <ViewStyle.Arrow1 src={arrow} alt='arrow'/>
          <Link to="/" className="link2">Shop</Link>
          <ViewStyle.Arrow2 src={arrow} alt='arrow'/>
          <ViewStyle.Row/>
          <ViewStyle.Name>Asgaard sofa</ViewStyle.Name>
        </ViewStyle.Wrap>
      </ViewStyle.Container>
    </ViewStyle>
  );
};

export default ViewHeader;

