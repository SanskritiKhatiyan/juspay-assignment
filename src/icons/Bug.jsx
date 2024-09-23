import React from "react";

export default ({ width = 24, height = 24, color="black" }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#E3F5FF"
      d="M0 12c0-3.728 0-5.591.609-7.061a8 8 0 014.33-4.33C6.409 0 8.272 0 12 0c3.727 0 5.591 0 7.061.609a8 8 0 014.33 4.33C24 6.409 24 8.272 24 12c0 3.727 0 5.591-.609 7.061a8 8 0 01-4.33 4.33C17.591 24 15.727 24 12 24c-3.728 0-5.591 0-7.061-.609a8 8 0 01-4.33-4.33C0 17.591 0 15.727 0 12z"
    ></path>
    <path
      fill="#1C1C1C"
      d="M17 13h1a.5.5 0 100-1h-1v-1h1a.5.5 0 100-1h-1.025a4.985 4.985 0 00-1.34-2.928l1.219-1.218a.5.5 0 00-.708-.708l-1.268 1.269a4.984 4.984 0 00-5.756 0L7.854 5.146a.5.5 0 00-.708.708l1.219 1.218c-.758.8-1.23 1.83-1.34 2.928H6a.5.5 0 000 1h1v1H6a.5.5 0 000 1h1v.5c0 .169.009.336.025.5H6a.5.5 0 000 1h1.23a5 5 0 009.54 0H18a.5.5 0 100-1h-1.025c.016-.164.025-.331.025-.5V13zm-5-6.5a4.005 4.005 0 013.967 3.5H8.03A4.004 4.004 0 0112 6.5zm.5 10.968V12.5a.5.5 0 00-1 0v4.968A4.004 4.004 0 018 13.5V11h8v2.5a4.004 4.004 0 01-3.5 3.968z"
    ></path>
  </svg>
  );
};
