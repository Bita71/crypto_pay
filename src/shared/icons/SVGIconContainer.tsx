import React, { FC, SVGAttributes } from 'react';

export interface SVGIconContainerProps extends SVGAttributes<SVGElement> {
  height?: number,
  width?: number,
}

export const SVGIconContainer: FC<SVGIconContainerProps> = function SVGIconContainer({
  height = 16,
  width = 16,
  children,
  ...props
}) {
  return (
    <svg
      style={{ pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="none"
      viewBox={`0 0 ${width} ${height}`}
      height="1em"
      width={`${width / height}em`}
      {...props}
    >
      {children}
    </svg>
  );
};
