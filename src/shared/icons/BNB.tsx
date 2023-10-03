import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const BNBIcon: FC<SVGIconContainerProps> = function BNBIcon(props) {
  return (
    <SVGIconContainer height={96} width={96} {...props}>
      <title>BNB</title>
      <g clipPath="url(#clip0_955_5638)">
        <mask
          id="mask0_955_5638"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="96"
          height="96"
        >
          <path d="M0 -7.62939e-06H96V96H0V-7.62939e-06Z" fill="white" />
        </mask>
        <g mask="url(#mask0_955_5638)">
          <path
            d="M48 -7.62939e-06C74.5097 -7.62939e-06 96 21.4903 96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 -7.62939e-06 48 -7.62939e-06Z"
            fill="url(#paint0_linear_955_5638)"
          />
          <path
            d="M35.5799 42.844L42.8479 35.6L44.3799 34.068L48.0118 30.436L60.3798 42.844L67.5798 35.6L48.0118 15.9999L28.3799 35.6L35.5799 42.844Z"
            fill="white"
          />
          <path
            d="M40.792 47.988L48.0215 40.7585L55.2509 47.988L48.0215 55.2175L40.792 47.988Z"
            fill="white"
          />
          <path
            d="M60.3798 53.1721L48.0079 65.5441L43.6638 61.2001L42.8639 60.4001L35.5799 53.1721L28.3799 60.3721L48.0118 79.972L67.5798 60.3721L60.3798 53.1721Z"
            fill="white"
          />
          <path
            d="M16 48.008L23.2295 40.7786L30.4589 48.008L23.2295 55.2375L16 48.008Z"
            fill="white"
          />
          <path
            d="M65.5439 48.004L72.7735 40.7745L80.0029 48.004L72.7735 55.2335L65.5439 48.004Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_955_5638"
          x1="75.6965"
          y1="108.719"
          x2="2.72709"
          y2="-14.8494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E9B204" />
          <stop offset="1" stopColor="#F0B90B" />
        </linearGradient>
        <clipPath id="clip0_955_5638">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </SVGIconContainer>
  );
};
