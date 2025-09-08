import React from "react";

const YearsStatSVG = ({className}: {className: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="116"
      height="116"
      viewBox="0 0 116 116"
      fill="none"
      className={`${className}`}
    >
      <path
        d="M58 115C89.4802 115 115 89.4802 115 58C115 26.5198 89.4802 1 58 1C26.5198 1 1 26.5198 1 58C1 89.4802 26.5198 115 58 115Z"
        stroke="#F3EDDE"
        strokeMiterlimit="10"
      />
      <path
        d="M51.821 35.9124L76.2957 80.9485L64.5925 80.7131L58.4177 69.4338L57.9978 68.6682L57.5496 69.4172L50.947 80.4456L39.2312 80.2112L52.1384 58.4622L52.283 58.219L52.1482 57.97L40.1052 35.678L51.821 35.9124Z"
        stroke="#F79839"
      />
    </svg>
  );
};

export default YearsStatSVG;
