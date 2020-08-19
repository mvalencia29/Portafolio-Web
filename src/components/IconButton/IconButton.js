import React from "react";

const IconButton = ({ children, url }) => {
  return (
    <a href={url} target="_blank">
      {children}
    </a>
  );
};

export default IconButton;
