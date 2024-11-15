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
  direction: "left" | "right" | "bottom" | "top",
  visible?: boolean
) => {
  if (direction === "left" || direction === "right") {
    return {
      transform: `translateX(${
        visible ? "0%" : direction === "left" ? "-100%" : "100%"
      })`,
      height: "100%",
      width: "30%",
    };
  }
  return {
    transform: `translateY(${
      visible ? "0%" : direction === "bottom" ? "100%" : "-100%"
    })`,
    height: "20%",
    width: "100%",
  };
};

const PopupContainer = styled.div<{
  direction: "left" | "right" | "bottom" | "top";
  $visible: boolean;
}>`
  inset: 0;
  position: absolute;
  animation-fill-mode: forwards;
  display: flex;
  padding: 16px 12px;
  background-color: #fff;
  z-index: 1001;
  transition: transform 0.3s ease-in-out;
  transform: ${({ direction, $visible }) =>
    transformMap(direction, $visible).transform};
  ${({ direction }) => direction && `${direction}: 0;`}
  ${({ direction }) =>
    `height: ${transformMap(direction).height}; width: ${
      transformMap(direction).width
    };`}
`;

export const Popup: React.FC<{
  visible: boolean;
  children: React.ReactNode;
  direction?: "left" | "right" | "bottom" | "top";
  setVisible: (visible: boolean) => void;
}> = ({ visible, children, direction = "bottom", setVisible }) => {
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
          <PopupContainer $visible={animatedVisible} direction={direction}>
            {children}
          </PopupContainer>
        </>
      ) : null}
    </Portal>
  );
};
