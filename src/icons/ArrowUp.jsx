import React from "react";

export default ({ width = 16, height = 16, color="black" }) => {
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
  fillRule="evenodd"
  d="M8.455 5.608L14 4l-1.38 5.606-1.722-1.653-2.777 2.893a.5.5 0 01-.722 0L5.36 8.722l-3 3.124a.5.5 0 01-.72-.692L5 7.654a.5.5 0 01.72 0l2.04 2.124 2.417-2.517-1.722-1.653z"
  clipRule="evenodd"
></path>
</svg>
  );
};