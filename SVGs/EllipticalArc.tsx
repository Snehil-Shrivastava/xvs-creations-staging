import React from "react";

const EllipticalArc = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: "0" }}
      className="shadow-mask-ellipse"
    >
      <defs>
        <filter id="orangeShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2"
            floodColor="#fe9227b3"
            floodOpacity="1"
          />
        </filter>

        <linearGradient id="maskGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </linearGradient>

        <mask
          id="linearMask"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#maskGradient)"
          />
        </mask>
      </defs>
      <g
        filter="url(#orangeShadow)"
        mask=""
        style={{ position: "sticky", top: 0 }}
      >
        <path
          strokeWidth="0.01"
          stroke="#fe9227b3"
          fill="#282828"
          d="M12 11 C0.95 11 -8 17.71 -8 26 -8 34.28 0.95 41 12 41 23.04 41 32 34.28 32 26 32 17.71 23.04 11 12 11 "
          data-original="M32,26 C32,34.28427 23.04569,41 12,41 0.95431,41 -8,34.28427 -8,26 -8,17.71573 0.95431,11 12,11 23.04569,11 32,17.71573 32,26 z"
          data-svg-origin="-8 11"
          transform="matrix(1,0,0,1,0,0)"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transformOrigin: "0px 0px",
          }}
        ></path>
      </g>
    </svg>
  );
};

export default EllipticalArc;
