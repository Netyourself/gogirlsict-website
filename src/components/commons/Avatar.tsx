// import React from "react";
// import { Avatar } from "@chakra-ui/react";
// import { FaUserCircle } from "react-icons/fa";
// import branding from "@/app/theme";

// const ImageAvatar = (boxSize = "150px" as any, size = "xl" as any) => {
//   console.log("avatar data", boxSize, ">>", size);
//   return (
//     <Avatar
//       icon={<FaUserCircle />}
//       boxSize={boxSize}
//       size={size || "xl"}
//       bg={branding.colors.gray}
//       color={branding.colors.white}
//     />
//   );
// };

// export default ImageAvatar;

import React from "react";
import { Avatar, AvatarProps } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import branding from "@/app/theme";

interface ImageAvatarProps extends AvatarProps {
  boxSize?: string;
  size?: string;
}

const ImageAvatar: React.FC<ImageAvatarProps> = ({
  boxSize = "150px",
  size = "xl",
  ...props
}) => {
  return (
    <Avatar
      icon={<FaUserCircle />}
      boxSize={boxSize}
      size={size}
      bg={branding.colors.gray}
      color={branding.colors.white}
      {...props}
    />
  );
};

export default ImageAvatar;
