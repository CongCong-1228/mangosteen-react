import styled from "styled-components";
import { Portal } from "./Portal";
import { useTransition, animated, to } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const PopupMask = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1000;
  background-color: ${({ $visible }) =>
    $visible ? "rgba(0, 0, 0, 0.7)" : "transparent"};
`;

const transformMap = (
  direction: "left" | "right" | "bottom" | "top" | "center",
  visible?: boolean
) => {
  if (direction === "left" || direction === "right") {
    return {
      transform: `translateX(${
        visible ? "0%" : direction === "left" ? "-100%" : "100%"
      })`,
      height: "100%",
      bottom: 0,
    };
  } else if (direction === "bottom" || direction === "top") {
    return {
      transform: `translateY(${
        visible ? "0%" : direction === "bottom" ? "100%" : "-100%"
      })`,
      ...(direction === "bottom" ? { bottom: 0 } : { top: 0 }),
      width: "100%",
    };
  } else {
    return {
      transform: `translate3d(-50%, -50%, 0)`,
      top: "50%",
      left: "50%",
      opacity: visible ? 1 : 0,
    };
  }
};

const PopupContainer = styled.div<{
  direction: "left" | "right" | "bottom" | "top" | "center";
  $visible: boolean;
}>`
  position: absolute;
  display: flex;
  padding: 16px 12px;
  background-color: #fff;
  z-index: 1001;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  ${({ direction, $visible }) =>
    `transform: ${transformMap(direction, $visible).transform};
     bottom: ${transformMap(direction, $visible)?.bottom};
     top: ${transformMap(direction, $visible)?.top};
     left: ${transformMap(direction, $visible)?.left};
     opacity: ${transformMap(direction, $visible)?.opacity};
     height: ${transformMap(direction, $visible)?.height};
     width: ${transformMap(direction, $visible)?.width};
     `};
`;

export const Popup: React.FC<{
  visible: boolean;
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right" | "bottom" | "top" | "center";
  setVisible: (visible: boolean) => void;
}> = ({ visible, className, children, direction = "bottom", setVisible }) => {
  const [animatedVisible, setAnimatedVisible] = useState<boolean>(false);

  useEffect(() => {
    setAnimatedVisible(visible);
    return () => {
      setAnimatedVisible(false);
    };
  }, [visible]);

  const closePopup = () => {
    setAnimatedVisible(false);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  return (
    <Portal>
      {visible ? (
        <>
          <PopupMask $visible={animatedVisible} onClick={closePopup} />
          <PopupContainer
            className={className}
            $visible={animatedVisible}
            direction={direction}
          >
            {children}
          </PopupContainer>
        </>
      ) : null}
    </Portal>
  );
};
