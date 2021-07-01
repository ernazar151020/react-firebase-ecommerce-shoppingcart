import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";
import { sectionsData } from "../../data/data";
const Directory = () => {
  const [data, setData] = useState(sectionsData);
  return (
    <div className="directory-menu">
      {data.map((item, key) => {
        const { id, ...otherSectionProps } = item;
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;
