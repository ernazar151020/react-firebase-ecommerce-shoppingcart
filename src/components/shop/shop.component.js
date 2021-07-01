import React, { useState } from "react";
import CollectionPreview from "./CollectionPreview";
import shopData from "./shop.data";
const ShopPage = () => {
  const [collections, setCollections] = useState(shopData);
  return (
    <div className="shop-page">
      {collections.map((items) => {
        const { id, ...otherValues } = items;
        return <CollectionPreview key={id} {...otherValues} />;
      })}
    </div>
  );
};

export default ShopPage;
