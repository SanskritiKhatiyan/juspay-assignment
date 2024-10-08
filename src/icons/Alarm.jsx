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
        fillOpacity="0.1"
        d="M20.25 19H7.75a.626.626 0 01-.537-.938c.514-.89 1.162-3.14 1.162-5.937a5.625 5.625 0 0111.25 0c0 2.798.648 5.047 1.164 5.938a.626.626 0 01-.539.937z"
      ></path>
      <path
        fill={color}
        d="M21.328 17.745c-.433-.747-1.078-2.86-1.078-5.62a6.25 6.25 0 00-12.5 0c0 2.76-.645 4.873-1.079 5.62a1.25 1.25 0 001.079 1.88h3.188a3.125 3.125 0 006.124 0h3.188a1.25 1.25 0 001.078-1.88zM14 20.875a1.875 1.875 0 01-1.767-1.25h3.534A1.875 1.875 0 0114 20.875zm-6.25-2.5C8.352 17.341 9 14.944 9 12.125a5 5 0 1110 0c0 2.816.647 5.213 1.25 6.25H7.75z"
      ></path>
    </svg>
  );
};
