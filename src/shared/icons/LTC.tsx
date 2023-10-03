import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const LTCIcon: FC<SVGIconContainerProps> = function LTCIcon(props) {
  return (
    <SVGIconContainer height={96} width={96} {...props}>
      <title>LTC</title>
      <g clipPath="url(#clip0_955_3996)">
        <path
          d="M48.5714 90.8049C72.2119 90.8049 91.3763 71.6405 91.3763 48C91.3763 24.3596 72.2119 5.19519 48.5714 5.19519C24.931 5.19519 5.7666 24.3596 5.7666 48C5.7666 71.6405 24.931 90.8049 48.5714 90.8049Z"
          fill="white"
        />
        <g filter="url(#filter0_dd_955_3996)">
          <path
            d="M48.5713 0C39.0778 0 29.7975 2.81515 21.9039 8.08946C14.0104 13.3638 7.8581 20.8603 4.22509 29.6312C0.592087 38.4021 -0.358473 48.0532 1.49362 57.3643C3.34571 66.6754 7.91727 75.2282 14.6302 81.9411C21.3431 88.654 29.8959 93.2256 39.207 95.0777C48.5181 96.9298 58.1693 95.9792 66.9401 92.3462C75.711 88.7132 83.2075 82.5609 88.4818 74.6674C93.7562 66.7738 96.5713 57.4935 96.5713 48C96.5896 41.7149 95.3699 35.4876 92.9816 29.6739C90.5933 23.8602 87.0833 18.5738 82.652 14.1166C78.2206 9.65937 72.9548 6.11861 67.1551 3.69648C61.3554 1.27436 55.1354 0.0182884 48.8502 0H48.5713ZM49.3849 49.6271L44.3873 66.4794H71.1185C71.2956 66.4732 71.4722 66.502 71.6381 66.564C71.8041 66.6261 71.9562 66.7203 72.0857 66.8412C72.2152 66.9621 72.3196 67.1073 72.393 67.2686C72.4664 67.4299 72.5072 67.604 72.5132 67.7811V68.2228L70.1888 76.2421C70.0863 76.6214 69.8579 76.9545 69.5411 77.1868C69.2243 77.4191 68.8379 77.5368 68.4454 77.5206H27.535L34.3921 54.1598L26.7214 56.4843L28.4648 51.138L36.1355 48.8136L45.782 16.0387C45.8882 15.6616 46.1175 15.3309 46.4334 15.0992C46.7493 14.8675 47.1337 14.7482 47.5253 14.7603H57.8691C58.0462 14.7541 58.2228 14.7828 58.3887 14.8449C58.5547 14.907 58.7068 15.0012 58.8363 15.122C58.9658 15.2429 59.0702 15.3882 59.1436 15.5495C59.217 15.7107 59.2578 15.8849 59.2638 16.062V16.5036L51.1282 44.1646L58.7989 41.8402L57.1718 47.4189L49.3849 49.6271Z"
            fill="url(#paint0_linear_955_3996)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_955_3996"
          x="-7.42871"
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
            result="effect1_dropShadow_955_3996"
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
            in2="effect1_dropShadow_955_3996"
            result="effect2_dropShadow_955_3996"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_955_3996"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_955_3996"
          x1="16.5713"
          y1="-2.5"
          x2="76.0713"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3F68A8" />
          <stop offset="1" stopColor="#2C5493" />
        </linearGradient>
        <clipPath id="clip0_955_3996">
          <rect
            width="96"
            height="96"
            fill="white"
            transform="translate(0.571289)"
          />
        </clipPath>
      </defs>
    </SVGIconContainer>
  );
};
