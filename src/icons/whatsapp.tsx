import * as React from "react";

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <g clipPath="url(#clip0_1592_21922)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10 1.667a8.333 8.333 0 0 0-7.136 12.64l-.743 2.526a.842.842 0 0 0 1.045 1.045l2.527-.743A8.333 8.333 0 1 0 10 1.667M8.113 11.886c1.686 1.685 3.295 1.907 3.864 1.928.864.032 1.706-.628 2.033-1.394a.58.58 0 0 0-.073-.586c-.457-.583-1.075-1.002-1.678-1.42a.593.593 0 0 0-.81.133l-.5.762a.19.19 0 0 1-.255.063c-.339-.194-.833-.524-1.188-.879a5.4 5.4 0 0 1-.84-1.144.19.19 0 0 1 .057-.242l.77-.572a.593.593 0 0 0 .1-.784c-.374-.546-.809-1.241-1.44-1.702a.58.58 0 0 0-.57-.062c-.766.328-1.43 1.17-1.398 2.035.02.569.243 2.178 1.928 3.864"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_1592_21922">
        <path fill="#fff" d="M0 0h20v20H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;
