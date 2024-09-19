import { useEffect, useRef, useState } from "react";

export const useSwipe = (elementRef: React.RefObject<HTMLElement>) => {
  const [direction, setDirection] = useState<
    "left" | "right" | "" | "up" | "down"
  >("");
  const x = useRef(-1);
  const y = useRef(-1);

  const touchStart = (event: TouchEvent) => {
    x.current = event.touches[0].clientX;
    y.current = event.touches[0].clientY;
  };
  const touchMove = (event: TouchEvent) => {
    event.preventDefault();
    const xMove = event.touches[0].clientX;
    const yMove = event.touches[0].clientY;

    const distanceX = xMove - x.current;
    const distanceY = yMove - y.current;

    if (Math.abs(distanceX) < 3 || Math.abs(distanceY) < 3) {
      setDirection("");
    }

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      setDirection(distanceX > 0 ? "right" : "left");
    } else {
      setDirection(distanceY > 0 ? "down" : "up");
    }

    // if (Math.abs(distanceY) < 3 && distanceX === 0) {
    //   setDirection("");
    // } else {
    //   setDirection(distanceY > 0 ? "down" : "up");
    // }
  };
  const touchEnd = (event: TouchEvent) => {
    setDirection("");
  };
  useEffect(() => {
    const element = elementRef.current;
    element?.addEventListener("touchstart", touchStart);
    element?.addEventListener("touchmove", touchMove);
    element?.addEventListener("touchend", touchEnd);
    return () => {
      element?.removeEventListener("touchstart", touchStart);
      element?.removeEventListener("touchmove", touchMove);
      element?.removeEventListener("touchend", touchEnd);
    };
  }, []);
  return { direction };
};
