import React from "react";
import IconLink from "../icon-button";
import { iconLinks } from "@/data/icon-links.data";

const IconButtons = () => {
  return (
    <div className="px-6 flex justify-center gap-y-6 mt-12 flex-wrap gap-x-6">
      {iconLinks.map((iconLink) => (
        <IconLink key={iconLink.link} {...iconLink} />
      ))}
    </div>
  );
};

export default IconButtons;
