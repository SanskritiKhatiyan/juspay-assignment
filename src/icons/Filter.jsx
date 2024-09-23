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
      d="M4.192 13.308a.625.625 0 10-.884.884l2.5 2.5a.625.625 0 00.884 0l2.5-2.5a.626.626 0 00-.884-.884L6.25 15.366l-2.058-2.058z"
    ></path>
    <path
      fill={color}
      d="M5.625 3.75v12.5a.625.625 0 101.25 0V3.75a.625.625 0 10-1.25 0zM15.808 6.692a.626.626 0 00.884-.884l-2.5-2.5a.625.625 0 00-.884 0l-2.5 2.5a.625.625 0 10.884.884l2.058-2.058 2.058 2.058z"
    ></path>
    <path
      fill={color}
      d="M14.375 16.25V3.75a.625.625 0 10-1.25 0v12.5a.625.625 0 101.25 0z"
    ></path>
  </svg>
  );
};
