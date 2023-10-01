import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const MoonIcon: FC<SVGIconContainerProps> = function MoonIcon(props) {
  return (
    <SVGIconContainer height={32} width={32} {...props}>
      <title>Moon</title>
      <path
        d="M27.9999 17.0533C27.7901 19.3229 26.9383 21.4859 25.5442 23.2891C24.15 25.0922 22.2712 26.4611 20.1275 27.2354C17.9838 28.0097 15.6638 28.1575 13.4392 27.6615C11.2146 27.1654 9.17719 26.0461 7.5655 24.4344C5.95381 22.8227 4.83445 20.7853 4.33841 18.5607C3.84237 16.336 3.99016 14.0161 4.76448 11.8724C5.53881 9.72868 6.90764 7.84982 8.71082 6.45567C10.514 5.06152 12.6769 4.20974 14.9465 4C13.6178 5.79769 12.9783 8.0126 13.1446 10.2419C13.3108 12.4712 14.2717 14.5667 15.8524 16.1475C17.4331 17.7282 19.5287 18.689 21.758 18.8553C23.9873 19.0215 26.2022 18.3821 27.9999 17.0533Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SVGIconContainer>
  );
};
