import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const PythonIcon: FC<SVGIconContainerProps> = function PythonIcon(
  props
) {
  return (
    <SVGIconContainer height={104} width={112} {...props}>
      <title>Python</title>
      <g filter="url(#filter0_dd_1326_244)">
        <rect
          x="8.2002"
          width="96"
          height="96"
          rx="48"
          fill="url(#paint0_linear_1326_244)"
        />
        <path
          d="M55.8463 17.9192C53.3922 17.9308 51.0498 18.1395 48.9875 18.5045C42.9134 19.5775 41.8114 21.8234 41.8114 25.966V31.4362H56.1642V33.2596H36.4243C32.2532 33.2596 28.6006 35.7665 27.4579 40.5375C26.1396 46.0041 26.0815 49.4161 27.4579 55.1246C28.478 59.3741 30.9146 62.4013 35.0863 62.4013H40.0217V55.8436C40.0217 51.1058 44.1201 46.9272 48.9881 46.9272H63.3247C67.3156 46.9272 70.5008 43.6408 70.5008 39.6336V25.9666C70.5008 22.0763 67.2191 19.1543 63.3247 18.5051C60.8579 18.0947 58.2998 17.9081 55.8463 17.9192ZM48.0842 22.3187C49.5664 22.3187 50.7778 23.5492 50.7778 25.0628C50.7778 26.57 49.567 27.7888 48.0842 27.7888C46.5962 27.7888 45.3913 26.57 45.3913 25.0628C45.3907 23.5492 46.5962 22.3187 48.0842 22.3187Z"
          fill="#386F9F"
        />
        <path
          d="M72.2907 33.2594V39.6334C72.2907 44.574 68.101 48.7329 63.3243 48.7329H48.9877C45.0607 48.7329 41.8115 52.0943 41.8115 56.0271V69.6952C41.8115 73.5844 45.1933 75.8728 48.9877 76.9882C53.5307 78.3233 57.8878 78.5651 63.3243 76.9882C66.9373 75.9414 70.5004 73.8361 70.5004 69.6952V64.2245H56.1644V62.4005H77.6777C81.8488 62.4005 83.4042 59.4913 84.8551 55.1238C86.3535 50.6278 86.289 46.3039 84.8551 40.5367C83.8239 36.3836 81.8552 33.2588 77.6777 33.2588H72.2907V33.2594ZM64.227 67.8712C65.7156 67.8712 66.9205 69.0901 66.9205 70.5985C66.9205 72.1109 65.715 73.3414 64.227 73.3414C62.7448 73.3414 61.534 72.1109 61.534 70.5985C61.534 69.0901 62.7448 67.8712 64.227 67.8712Z"
          fill="#FFCF46"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1326_244"
          x="0.200195"
          y="-8"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_1326_244"
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
            in2="effect1_dropShadow_1326_244"
            result="effect2_dropShadow_1326_244"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1326_244"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1326_244"
          x1="8"
          y1="1.5"
          x2="88.5"
          y2="103.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#242429" />
          <stop offset="1" stopColor="#18181D" />
        </linearGradient>
      </defs>
    </SVGIconContainer>
  );
};
