import React from "react";

export default ({ width = 16, height = 16, color="black" }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill={color}
      fillOpacity="0.1"
      d="M16.875 10a6.875 6.875 0 11-13.75 0 6.875 6.875 0 0113.75 0z"
    ></path>
    <path
      fill={color}
      d="M10.625 6.25v3.396l2.822 1.693a.626.626 0 01-.644 1.072l-3.125-1.875A.625.625 0 019.375 10V6.25a.625.625 0 011.25 0zM10 2.5a7.456 7.456 0 00-5.306 2.2 32.248 32.248 0 00-1.569 1.706V5a.625.625 0 00-1.25 0v3.125a.625.625 0 00.625.625h3.125a.625.625 0 100-1.25H3.828a33.802 33.802 0 011.75-1.92 6.25 6.25 0 11.129 8.965.626.626 0 00-.86.91A7.5 7.5 0 1010 2.5z"
    ></path>
  </svg>
  );
};
