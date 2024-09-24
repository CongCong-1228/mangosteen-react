import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type TimeRange = "thisMonth" | "lastMonth" | "thisYear" | "custom";

interface IProps {
  value: TimeRange;
  onChange: (value: TimeRange) => void;
}

const TimeRanges: { key: TimeRange; text: string }[] = [
  {
    key: "thisMonth",
    text: "本月",
  },
  {
    key: "lastMonth",
    text: "上月",
  },
  {
    key: "thisYear",
    text: "今年",
  },
  {
    key: "custom",
    text: "自定义",
  },
];

const Div = styled.div`
  width: 100%;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--text-color);
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  }
`;

const Li = styled.li`
  position: relative;
  &.selected {
    position: relative;
  }
  &.selected::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  }
`;

const LiActiveBar = styled.div`
  height: 3px;
  background-color: var(--text-color);
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 2;
  transition: 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const TimeRangePicker: React.FC<IProps> = ({ value, onChange }) => {
  const liRefs = useRef<HTMLUListElement>(null);
  const liActiveBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = TimeRanges.findIndex((timeRange) => timeRange.key === value);
    const li = liRefs.current?.children[index] as HTMLElement;
    const liRect = li.getBoundingClientRect();
    const liLeft = liRect.left;
    const liWidth = liRect.width;
    liActiveBarRef.current!.style.width = `${liWidth}px`;
    liActiveBarRef.current!.style.transform = `translateX(${liLeft}px)`;
  }, [value]);

  return (
    <Div>
      <ul
        ref={liRefs}
        className="text-[var(--text-color)] cursor-pointer items-center flex relative children:px-24px children:py-12px"
      >
        {TimeRanges.map((timeRange, index) => (
          <Li
            key={timeRange.key}
            className={timeRange.key === value ? "selected" : ""}
            onClick={() => onChange(timeRange.key)}
          >
            {timeRange.text}
          </Li>
        ))}
      </ul>
      <LiActiveBar ref={liActiveBarRef} />
    </Div>
  );
};
