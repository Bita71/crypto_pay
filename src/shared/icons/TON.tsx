import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const TONIcon: FC<SVGIconContainerProps> = function TONIcon(props) {
  return (
    <SVGIconContainer height={96} width={96} {...props}>
      <title>TON</title>
      <rect
        x="0.428711"
        width="96"
        height="96"
        rx="48"
        fill="url(#paint0_linear_955_3976)"
      />
      <path
        d="M64.8175 26.7903H32.0374C26.0103 26.7903 22.1904 33.2917 25.2225 38.5475L45.4531 73.6129C46.7733 75.9025 50.0817 75.9025 51.4018 73.6129L71.6366 38.5475C74.6647 33.3001 70.8446 26.7903 64.8216 26.7903H64.8175ZM45.4366 63.0973L41.0307 54.5703L30.3998 35.5566C29.6985 34.3397 30.5647 32.7802 32.0333 32.7802H45.4325V63.1014L45.4366 63.0973ZM66.4469 35.5525L55.8201 54.5744L51.4142 63.0973V32.7761H64.8134C66.282 32.7761 67.1482 34.3355 66.4469 35.5525Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_955_3976"
          x1="89.8833"
          y1="-7.41818"
          x2="14.3923"
          y2="117.382"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#04BEFE" />
          <stop offset="1" stopColor="#4481EB" />
        </linearGradient>
      </defs>
    </SVGIconContainer>
  );
};
