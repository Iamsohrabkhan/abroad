import * as React from "react";

const Line: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1"
    height="67"
    fill="none"
    viewBox="0 0 1 67"
  >
    <rect
      width="1"
      height="66"
      y="0.5"
      fill="url(#paint0_radial_1592_21734)"
      rx="0.5"
    ></rect>
    <defs>
      <radialGradient
        id="paint0_radial_1592_21734"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 33 -.5 0 .5 33.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.2"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </radialGradient>
    </defs>
  </svg>
);

export default Line;
