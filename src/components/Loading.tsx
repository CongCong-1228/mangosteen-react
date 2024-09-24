import styled, { keyframes } from "styled-components";
import { Icon } from "./Icon";
import c from "classnames";

interface LoadingProps {
  className?: string;
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  className,
  message = "加载中...",
}) => {
  const spin = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;
  const Div = styled.div({
    svg: {
      animation: `${spin} 1.25s linear infinite`,
    },
  });

  return (
    <Div className={c("flex flex-col justify-center items-center", className)}>
      <Icon name="loading" className="w-128px h-128px" />
      <p p-8px text-lg>
        {message}
      </p>
    </Div>
  );
};
