import React from "react";
import ShopHeader from "../../components/ShopComponents/ShopHeader/ShopHeader";
import ShopFilter from "../../components/ShopComponents/ShopFilter/ShopFilter";
import ShopProducts from "../../components/ShopComponents/ShopProducts";
import ShopFeature from "../../components/ShopComponents/ShopFeature";

const Shop = () => {
  return (
    <>
      <ShopHeader />
      <ShopFilter />
      <ShopProducts/>
      <ShopFeature/>
    </>
  );
};

export default Shop;
