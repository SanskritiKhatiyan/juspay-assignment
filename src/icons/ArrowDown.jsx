import React from "react";

export default ({ width = 16, height = 16, color="black" }) => {
  return (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 13 9"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M12.346.64a.5.5 0 01.015.706L9 4.846a.5.5 0 01-.722 0L6.24 2.722 3.823 5.239l1.722 1.653L0 8.5l1.38-5.606 1.722 1.653 2.777-2.893a.5.5 0 01.722 0L8.64 3.778l3-3.124a.5.5 0 01.706-.015z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
