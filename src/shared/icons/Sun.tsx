import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const SunIcon: FC<SVGIconContainerProps> = function SunIcon(props) {
  return (
    <SVGIconContainer height={32} width={32} {...props}>
      <title>Sun</title>
      <path
        d="M16.0002 22.6666C19.6821 22.6666 22.6668 19.6818 22.6668 15.9999C22.6668 12.318 19.6821 9.33325 16.0002 9.33325C12.3183 9.33325 9.3335 12.318 9.3335 15.9999C9.3335 19.6818 12.3183 22.6666 16.0002 22.6666Z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 1.33325V3.99992"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 28V30.6667"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.62646 5.62671L7.5198 7.52004"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.48 24.48L26.3733 26.3733"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.3335 16H4.00016"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 16H30.6667"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.62646 26.3733L7.5198 24.48"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.48 7.52004L26.3733 5.62671"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIconContainer>
  );
};
