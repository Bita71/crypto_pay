import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const ETHIcon: FC<SVGIconContainerProps> = function ETHIcon(props) {
  return (
    <SVGIconContainer height={96} width={96} {...props}>
      <title>ETH</title>
      <rect
        width="96"
        height="96"
        rx="48"
        fill="url(#paint0_linear_955_3960)"
      />
      <rect
        width="96"
        height="96"
        rx="48"
        fill="url(#paint1_linear_955_3960)"
      />
      <path
        d="M47.7656 16.582L47.332 18.0186V59.6998L47.7656 60.1217L67.6018 48.6852L47.7656 16.582Z"
        fill="#343434"
      />
      <path
        d="M47.7624 16.582L27.9258 48.6852L47.7624 60.1217V39.8908V16.582Z"
        fill="#8C8C8C"
      />
      <path
        d="M47.7639 63.7846L47.5195 64.0753V78.9227L47.7639 79.6186L67.6122 52.354L47.7639 63.7846Z"
        fill="#3C3C3B"
      />
      <path
        d="M47.7624 79.6186V63.7846L27.9258 52.354L47.7624 79.6186Z"
        fill="#8C8C8C"
      />
      <path
        d="M47.7617 60.1206L67.5979 48.684L47.7617 39.8896V60.1206Z"
        fill="#141414"
      />
      <path
        d="M27.9258 48.6842L47.7624 60.1207V39.8898L27.9258 48.6842Z"
        fill="#393939"
      />
      <defs>
        <linearGradient
          id="paint0_linear_955_3960"
          x1="147.491"
          y1="-39.2727"
          x2="-37.5273"
          y2="145.745"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9E9E7" />
          <stop offset="0.271524" stopColor="#EFEEEC" />
          <stop offset="0.608677" stopColor="#EEEEEC" />
          <stop offset="1" stopColor="#D5D4D0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_955_3960"
          x1="10"
          y1="164"
          x2="108.259"
          y2="143.218"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EEEDF1" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </SVGIconContainer>
  );
};
