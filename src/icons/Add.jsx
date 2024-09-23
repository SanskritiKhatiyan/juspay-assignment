import React from "react";

export default ({ width = 16, height = 16, color="black" }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 28 28"
  >
    <path
      fill={color}
      d="M14.625 8.375a.625.625 0 10-1.25 0v5h-5a.625.625 0 100 1.25h5v5a.625.625 0 101.25 0v-5h5a.625.625 0 100-1.25h-5v-5z"
    ></path>
  </svg>
  );
};
