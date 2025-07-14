import {
  motion,
  useAnimation,
  useAnimationControls,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

const Train: React.FC<React.SVGProps<SVGElement>> = ({ ref }) => {
  const controls = useAnimationControls();

  const inView = useInView(ref, { once: false, amount: 1 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0 });
    }else{
      controls.start({ x: -72 });

    }
  }, [inView, controls]);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute size-full inset-0 -z-10"
        preserveAspectRatio="none"
        viewBox="0 0 522 100"
      >
        <g clipPath="url(#clip0_825_10902)">
          <rect
            id="background"
            width="521"
            height="99"
            x="0.5"
            y="0.5"
            fill="#E2F6F0"
            stroke="#A0DFD1"
            rx="3.5"
          ></rect>
          <path id="ground" fill="#00705F" d="M0 95h522v7H0z"></path>
          <g id="tree1" fillRule="evenodd" clipRule="evenodd">
            <path
              fill="#00705F"
              d="M33.747 60.796c0-2.769-2.015-5.032-4.567-5.231a5.42 5.42 0 0 0 1.28-3.52c0-2.9-2.208-5.25-4.932-5.25 0-2.9-2.207-5.25-4.93-5.25H17.31c-2.723 0-4.931 2.35-4.931 5.25-2.723 0-4.931 2.35-4.931 5.25 0 .686.127 1.338.352 1.939-2.096.605-3.64 2.639-3.64 5.061s1.544 4.457 3.64 5.062a5.5 5.5 0 0 0-.352 1.939c0 2.898 2.208 5.25 4.931 5.25h13.15c2.723 0 4.93-2.352 4.93-5.25 0-.102-.009-.2-.014-.3 1.922-.717 3.302-2.66 3.302-4.95"
            ></path>
            <path
              fill="#003E34"
              d="M25.282 64.909c.33-.38.326-.825-.026-1.198-.35-.375-.77-.378-1.125-.028l-.006-.006-3.89 4.141-.488-9.38c-.057-1.103-1.585-1.102-1.64 0l-.22 4.36-2.462-2.621-.005.006c-.355-.35-.774-.347-1.125.028-.351.373-.355.819-.026 1.198l-.006.005 3.505 3.732-1.233 24.478c-.026.5.35.921.82.921h3.196c.471 0 .846-.421.82-.923l-1.013-19.459 4.93-5.25z"
            ></path>
          </g>
          <motion.g
            initial={{ x: -70 }}
            animate={controls}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M55.428 79.006c-6.235-6.085-14.386-9.46-22.843-9.46h-53.308V95H51.2v-.008c7.797-.089 10.559-5.527 10.559-7.629 0-2.119-1.681-3.818-1.681-3.818z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#00A88F"
              fillRule="evenodd"
              d="M1.99 87.364h-22.713V95h71.927v-.008c7.795-.089 10.555-5.527 10.555-7.629z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#003E34"
              fillRule="evenodd"
              d="M55.427 79.006c-6.234-6.085-14.384-9.46-22.842-9.46h-.71c0 8.75 4.93 14 13.149 14h15.055z"
              clipRule="evenodd"
            ></path>
            <rect
              width="19.126"
              height="10.182"
              x="5.576"
              y="73.364"
              fill="#003E34"
              rx="0.678"
            ></rect>
          </motion.g>
          <path
            id="tree2"
            fill="#00A88F"
            fillRule="evenodd"
            d="M14.023 54.75c0-2.9-2.208-5.25-4.931-5.25H4.933c.03-.247.05-.496.05-.75v-.25c0-3.313-2.524-6-5.637-6H-2.7c-.677-2.038-2.498-3.5-4.644-3.5h-6.575c-2.722 0-4.93 2.35-4.93 5.25h-.117c-2.873 0-5.24 2.29-5.587 5.25h-1.81c-3.112 0-5.636 2.687-5.636 6v.25c0 3.165 2.305 5.752 5.225 5.978a5.52 5.52 0 0 0 .128 3.89c-2.163.84-3.71 3.041-3.71 5.633v.248c0 3.314 2.524 6.001 5.637 6.001h5.334c.677 2.038 2.499 3.5 4.644 3.5H-.77c2.146 0 3.967-1.462 4.644-3.5h1.225c3.113 0 5.636-2.687 5.636-6v-.25c0-2.162-1.078-4.052-2.69-5.108a6.37 6.37 0 0 0 1.047-3.517A6.4 6.4 0 0 0 8.53 60h.562c2.723 0 4.93-2.351 4.93-5.25"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Train;
