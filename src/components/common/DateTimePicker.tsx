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
  transition-property: none;
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
}> = ({ itemHeight = 50, visibleItemCount = 9 }) => {
  const columnRef = useRef<HTMLOListElement>(null);
  const startY = useRef(0);
  const [translateY, setTranslateY] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const onTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    startY.current = e.touches[0].clientY;
    setIsMoving(true);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLOListElement>) => {
    e.stopPropagation();
    const moveY = e.touches[0].clientY - startY.current;
    if (isMoving && columnRef.current) {
      columnRef.current.style.transform = `translateY(${translateY + moveY}px)`;
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLOListElement>) => {
    e.stopPropagation();
    console.log("e.changedTouches[0].clientY", e.changedTouches[0].clientY);
    setTranslateY(e.changedTouches[0].clientY - startY.current);
    // if (Math.abs(translateY) <= 10) {
    //   setTranslateY(0);
    // }
    // if (Math.abs(translateY) <= itemHeight && Math.abs(translateY) > 10) {
    //   setTranslateY(translateY > 0 ? itemHeight : -itemHeight);
    // }
    // if (Math.abs(translateY) > itemHeight) {
    //   const translateN = Math.floor(translateY / itemHeight);
    //   console.log("translateN", translateN);
    //   setTranslateY(translateN * itemHeight);
    // }
    setIsMoving(false);
  };

  // useEffect(() => {
  //   console.log("translateY", translateY);
  //   if (columnRef.current) {
  //     columnRef.current.style.transform = `translateY(${translateY}px)`;
  //   }
  // }, [translateY]);

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
