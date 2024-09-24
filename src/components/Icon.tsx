import React from "react";
import c from "classnames";

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <svg className={c("icon", className)}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
