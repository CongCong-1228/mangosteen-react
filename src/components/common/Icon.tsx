import React from "react";
import c from "classnames";

interface IconProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ name, className, onClick }) => {
  return (
    <svg className={c(className, "icon")} onClick={onClick}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
