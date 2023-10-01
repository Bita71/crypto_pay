import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const USDTIcon: FC<SVGIconContainerProps> = function USDTIcon(props) {
  return (
    <SVGIconContainer height={96} width={96} {...props}>
      <title>USDT</title>
      <rect
        x="0.714355"
        width="96"
        height="96"
        rx="48"
        fill="url(#paint0_linear_955_3970)"
      />
      <path
        d="M71.5022 22.6909H25.3081V33.8431H42.8291V50.2347H53.9812V33.8431H71.5022V22.6909Z"
        fill="white"
      />
      <path
        d="M48.5113 51.9808C34.0174 51.9808 22.2666 49.6869 22.2666 46.8569C22.2666 44.0274 34.0169 41.7331 48.5113 41.7331C63.0051 41.7331 74.7554 44.0274 74.7554 46.8569C74.7554 49.6869 63.0051 51.9808 48.5113 51.9808ZM77.9795 47.7111C77.9795 44.0621 64.7863 41.1042 48.5113 41.1042C32.2367 41.1042 19.0425 44.0621 19.0425 47.7111C19.0425 50.9246 29.2731 53.6019 42.8298 54.1951V77.7258H53.981V54.2044C67.6421 53.6297 77.9795 50.9412 77.9795 47.7111Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_955_3970"
          x1="9.87799"
          y1="131.782"
          x2="57.4416"
          y2="30.5454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8DDAD5" />
          <stop offset="1" stopColor="#1BA27A" />
        </linearGradient>
      </defs>
    </SVGIconContainer>
  );
};
