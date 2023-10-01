import React, { FC } from "react";
import { SVGIconContainer, SVGIconContainerProps } from "./SVGIconContainer";

export const LogoIcon: FC<SVGIconContainerProps> = function LogoIcon(props) {
  return (
    <SVGIconContainer height={64} width={64} {...props}>
      <title>Logo</title>
      <g clipPath="url(#clip0_11590_1119)">
        <path d="M0 0H64V64H0V0Z" fill="#44A3DD" />
        <path
          d="M12.5003 23H25.6761C26.6657 23 27.576 23.5414 28.0485 24.4109L39.7799 46H24.0819C23.0923 46 22.182 45.4586 21.7095 44.5891L11.1823 25.2162C10.7868 24.4883 11.0562 23.5776 11.7841 23.182C12.0039 23.0626 12.2501 23 12.5003 23Z"
          fill="#BEE5F7"
        />
        <path
          d="M51.5909 23C51.8411 23 52.0873 23.0626 52.3071 23.182C53.0129 23.5656 53.2877 24.4336 52.943 25.1495L52.9089 25.2162L42.3817 44.5891C41.9244 45.4306 41.0572 45.9647 40.1048 45.9983L40.0093 46H24.5559H24.0817L23.986 45.9983C23.4883 45.9807 23.0138 45.8264 22.6089 45.5629C22.8117 45.6794 23.0413 45.7544 23.2862 45.7765C23.3122 45.7789 23.5221 45.7983 23.7557 45.7356C23.8545 45.7091 24.2191 45.624 24.6055 45.2626C24.721 45.1545 24.8826 44.9225 25.0902 44.5664L36.0427 24.4109C36.4999 23.5694 37.3672 23.0353 38.3196 23.0017L38.4151 23H51.5909Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_11590_1119">
          <rect width="64" height="64" rx="16" fill="white" />
        </clipPath>
      </defs>
    </SVGIconContainer>
  );
};
