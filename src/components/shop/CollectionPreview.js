import React from "react";
import "./collection-preview.scss";
import CollectionItem from "./CollectionItem/CollectionItem";
const CollectionPreview = ({ title, items }) => {
  return (
    <div class="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((acc, curr) => curr < 4)
          .map(({ id, ...item }) => {
            console.log(item);
            return <CollectionItem key={id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
