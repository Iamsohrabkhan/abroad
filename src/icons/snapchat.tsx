import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <g clipPath="url(#clip0_1592_21921)">
      <path
        fill="#fff"
        d="M13.333 2.5A4.167 4.167 0 0 1 17.5 6.667v6.666a4.167 4.167 0 0 1-4.167 4.167H6.667A4.167 4.167 0 0 1 2.5 13.333V6.667A4.167 4.167 0 0 1 6.667 2.5zM10 6.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m0 1.666a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334m3.75-2.916a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1592_21921">
        <path fill="#fff" d="M0 0h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
