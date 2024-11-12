import React from "react";
import c from "classnames";

interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <svg className={c(className, "icon")}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
