import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const NETIcon: FC<SVGIconContainerProps> = function NETIcon(props) {
  return (
    <SVGIconContainer height={104} width={112} {...props}>
      <title>NET</title>
      <g filter="url(#filter0_dd_955_4267)">
        <rect
          x="8.80029"
          width="96"
          height="96"
          rx="48"
          fill="url(#paint0_linear_955_4267)"
        />
        <path
          d="M24.0873 61.1305C23.7574 61.139 23.4292 61.0818 23.1216 60.9622C22.8141 60.8426 22.5334 60.663 22.2959 60.4339C22.0605 60.2128 21.8729 59.9459 21.7447 59.6496C21.6165 59.3532 21.5503 59.0337 21.5503 58.7108C21.5503 58.388 21.6165 58.0685 21.7447 57.7721C21.8729 57.4758 22.0605 57.2089 22.2959 56.9878C22.5313 56.7542 22.8111 56.57 23.1187 56.4461C23.4264 56.3222 23.7557 56.2611 24.0873 56.2663C24.421 56.2594 24.7527 56.3197 25.0626 56.4437C25.3725 56.5677 25.6543 56.7527 25.8912 56.9878C26.1299 57.2069 26.3205 57.4732 26.4508 57.7698C26.5812 58.0664 26.6485 58.3869 26.6485 58.7108C26.6485 59.0348 26.5812 59.3553 26.4508 59.6519C26.3205 59.9485 26.1299 60.2148 25.8912 60.4339C25.6523 60.6645 25.3695 60.845 25.0597 60.9646C24.7499 61.0843 24.4193 61.1407 24.0873 61.1305ZM52.2156 60.7324H47.6374L35.5949 41.7232C35.293 41.252 35.0388 40.7519 34.836 40.2303H34.7241C34.856 41.4073 34.9058 42.592 34.8733 43.7759V60.7324H30.8177V34.8684H35.6944L47.401 53.4298C47.8987 54.2011 48.2097 54.6739 48.359 55.0222H48.4212C48.2804 53.8667 48.2222 52.7026 48.247 51.5388V34.8684H52.2778L52.2156 60.7324ZM71.9215 60.7324H57.7641V34.8684H71.3617V38.5135H61.9441V45.841H70.6525V49.4612H61.9441V57.1122H71.8966L71.9215 60.7324ZM92.0504 38.5135H84.7975V60.7324H80.605V38.5135H73.377V34.8684H92.038L92.0504 38.5135Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_955_4267"
          x="0.800293"
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
            result="effect1_dropShadow_955_4267"
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
            in2="effect1_dropShadow_955_4267"
            result="effect2_dropShadow_955_4267"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_955_4267"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_955_4267"
          x1="21"
          y1="3"
          x2="81.5"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6B3FA0" />
          <stop offset="1" stopColor="#552D85" />
        </linearGradient>
      </defs>
    </SVGIconContainer>
  );
};
