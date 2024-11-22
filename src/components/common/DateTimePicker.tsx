import { tr } from "@faker-js/faker/.";
import { TouchEventHandler, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Columns = styled.div<{ $columns: number; $height: number }>`
  height: ${({ $height }) => $height}px;
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  flex-shrink: 1;
  flex-grow: 1;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const Column = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transition-duration: 0ms;
  transition-property: all;
  z-index: 2;
`;

const Li = styled.li<{ $height: number }>`
  width: 100%;
  padding: 8px 10px;
  height: ${({ $height }) => $height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HairLine = styled.div<{ $height: number; $visibleItemCount: number }>`
  position: absolute;
  padding: 8px 10px;
  height: ${({ $height }) => $height}px;
  top: calc(
    ${({ $height, $visibleItemCount }) =>
      `(100% - ${$height * Math.ceil($visibleItemCount / 2)}px)`}
  );
  width: 100%;
  border-top: 1px solid #ebedf0;
  border-bottom: 1px solid #ebedf0;
  z-index: 1;
`;

export const DateTimePicker: React.FC<{
  itemHeight?: number;
  visibleItemCount?: number;
}> = ({ itemHeight = 44, visibleItemCount = 9 }) => {
  const columnRef = useRef<HTMLOListElement>(null);
  const lastY = useRef(0);
  const [translateY, _setTranslateY] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const setTranslateY = (y: number) => {
    y = Math.min(y, 0);
    y = Math.max(y, 14 * -itemHeight);
    _setTranslateY(y);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    // 起始位置
    lastY.current = e.touches[0].clientY;
    setIsMoving(true);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLOListElement>) => {
    e.stopPropagation();
    const y = e.touches[0].clientY;
    if (isMoving) {
      const moveY = y - lastY.current;
      setTranslateY(moveY + translateY);
      lastY.current = y;
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLOListElement>) => {
    e.stopPropagation();
    const remainder = translateY % itemHeight;
    let y = translateY - remainder;
    if (Math.abs(remainder) > itemHeight / 2) {
      y += remainder > 0 ? itemHeight : -itemHeight;
    }
    setTranslateY(y);
    setIsMoving(false);
  };

  return (
    <div bg="#fff" flex flex-col items-center w-full px-12px pt-16px>
      <div shrink-0 grow-0 flex items-center justify-between w-full>
        <button text="#969799" text-14px px-12px b-none cursor-pointer>
          取消
        </button>
        <div
          text="#222d3a"
          text-16px
          px-12px
          font-700
          overflow-hidden
          whitespace-nowrap
          text-ellipsis
          max-w="50%"
        >
          选择年月日
        </div>
        <button text="#576b95" text-14px px-12px b-none cursor-pointer>
          确定
        </button>
      </div>
      <Columns $columns={2} $height={itemHeight * visibleItemCount}>
        <Column
          ref={columnRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ transform: `translateY(${translateY}px)` }}
        >
          <Li $height={itemHeight}>2024</Li>
          <Li $height={itemHeight}>2023</Li>
          <Li $height={itemHeight}>2022</Li>
          <Li $height={itemHeight}>2021</Li>
          <Li $height={itemHeight}>2020</Li>
          <Li $height={itemHeight}>2019</Li>
          <Li $height={itemHeight}>2018</Li>
          <Li $height={itemHeight}>2017</Li>
          <Li $height={itemHeight}>2016</Li>
          <Li $height={itemHeight}>2015</Li>
          <Li $height={itemHeight}>2014</Li>
          <Li $height={itemHeight}>2013</Li>
          <Li $height={itemHeight}>2012</Li>
          <Li $height={itemHeight}>2011</Li>
        </Column>
        <Column>
          <Li $height={itemHeight}>2024</Li>
          <Li $height={itemHeight}>2023</Li>
          <Li $height={itemHeight}>2022</Li>
          <Li $height={itemHeight}>2021</Li>
          <Li $height={itemHeight}>2020</Li>
          <Li $height={itemHeight}>2019</Li>
          <Li $height={itemHeight}>2018</Li>
          <Li $height={itemHeight}>2017</Li>
          <Li $height={itemHeight}>2016</Li>
          <Li $height={itemHeight}>2015</Li>
          <Li $height={itemHeight}>2014</Li>
          <Li $height={itemHeight}>2013</Li>
          <Li $height={itemHeight}>2012</Li>
          <Li $height={itemHeight}>2011</Li>
        </Column>
        <HairLine $height={itemHeight} $visibleItemCount={visibleItemCount} />
      </Columns>
    </div>
  );
};
