import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <g clipPath="url(#clip0_1592_21920)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10 4.584a5.417 5.417 0 1 0 5.272 6.666h-4.438a1.25 1.25 0 0 1 0-2.5h5.833a1.25 1.25 0 0 1 1.25 1.25 7.917 7.917 0 1 1-2.334-5.613 1.251 1.251 0 0 1-1.763 1.772A5.4 5.4 0 0 0 10 4.584"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1592_21920">
        <path fill="#fff" d="M0 0h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
