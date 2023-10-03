import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const PHPIcon: FC<SVGIconContainerProps> = function PHPIcon(props) {
  return (
    <SVGIconContainer height={104} width={112} {...props}>
      <title>PHP</title>
      <g id="php" filter="url(#filter0_dd_955_4271)">
        <rect
          x="8"
          width="96"
          height="96"
          rx="48"
          fill="url(#paint0_linear_955_4271)"
        />
        <path
          id="Vector"
          d="M43.5103 52.7392C42.3648 53.8108 41.0928 54.2532 39.6919 54.7089C38.2911 55.1653 36.5084 55.0711 34.3407 55.0711H29.4279L28.0663 62.9278H22.3301L27.4487 36.2149H38.4796C41.7983 36.2149 44.219 37.1695 45.7408 38.9113C47.2627 40.6531 47.7199 43.1257 47.1134 46.2471C46.8628 47.5333 46.4409 48.7291 45.8453 49.7945C45.2282 50.8937 44.44 51.8877 43.5103 52.7392ZM60.2538 55.0711L62.5173 43.7416C62.775 42.4154 62.6807 41.4302 62.2337 40.9486C61.7859 40.4662 60.8336 40.1432 59.3778 40.1432H54.8287L51.8974 55.0711H46.2059L51.3246 29.1438H57.016L55.6553 36.2149H60.7252C63.9158 36.2149 66.1157 36.8552 67.3264 37.9677C68.5372 39.0802 68.9002 40.6044 68.4162 43.0966L66.0348 55.0711H60.2538ZM91.8843 46.2888C91.6344 47.5749 91.2117 48.7503 90.617 49.8149C90.0214 50.8811 89.2436 51.8561 88.2827 52.7392C87.1372 53.8108 85.8644 54.2532 84.4644 54.7089C83.0643 55.1653 81.28 55.0711 79.1124 55.0711H74.1995L72.8387 62.9278H67.1025L72.2204 36.2149H83.2521C86.5708 36.2149 88.9914 37.1695 90.5125 38.9113C92.0328 40.6531 92.4908 43.1681 91.8843 46.2888ZM81.0781 40.1432H77.1489L75.0064 51.1427H78.4964C80.8078 51.1427 82.5316 50.9148 83.663 50.0427C84.7959 49.1722 85.5588 47.8209 85.9556 45.7836C86.3358 43.8265 86.163 42.2999 85.437 41.4954C84.7103 40.6909 83.2576 40.1432 81.0781 40.1432ZM36.3064 40.1432H32.3765L30.234 51.1427H33.7231C36.0354 51.1427 37.7584 50.9148 38.8905 50.0427C40.0227 49.1722 40.7864 47.8209 41.1823 45.7836C41.5626 43.8265 41.3898 42.2999 40.6638 41.4954C39.9378 40.6909 38.4859 40.1432 36.3064 40.1432Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_955_4271"
          x="0"
          y="-8"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.715625 0 0 0 0 0.728516 0 0 0 0 0.75 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_955_4271"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_955_4271"
            result="effect2_dropShadow_955_4271"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_955_4271"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_955_4271"
          x1="17.5"
          y1="4"
          x2="86"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6181B6" />
          <stop offset="1" stop-color="#5979AE" />
        </linearGradient>
      </defs>
    </SVGIconContainer>
  );
};
