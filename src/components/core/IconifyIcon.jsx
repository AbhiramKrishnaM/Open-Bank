import { react } from "react";
import { Icon } from "@iconify/react";

const IconifyIcon = ({ icon, ...props }) => {
  return <Icon icon={icon} {...props} />;
};

export default IconifyIcon;
