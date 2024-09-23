import React from "react";

export default ({ width = 16, height = 16, color="grey" }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={color}
      fillOpacity="1"
      d="M11 8a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
  );
};
