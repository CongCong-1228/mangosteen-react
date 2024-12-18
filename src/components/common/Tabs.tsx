import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export type Tab = string;

interface IProps {
  value: Tab;
  onChange: (value: Tab) => void;
  tabs: { key: string; text: string; element: ReactNode }[];
  className?: string;
}

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Ul = styled.ul`
  background-image: radial-gradient(
    circle 763px at 18.3% 24.1%,
    rgba(255, 249, 137, 1) 7.4%,
    rgba(226, 183, 40, 1) 58.3%
  );
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;

  /* position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--text-color);
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  } */
`;

const Li = styled.li`
  position: relative;
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  /* &.selected {
    position: relative;
  }
  &.selected::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: #999;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  } */
`;

const LiActiveBar = styled.div`
  height: 3px;
  background-color: #ffae00;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 2;
  transition: 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const Tabs: React.FC<IProps> = ({
  value,
  onChange,
  tabs,
  className,
}) => {
  const liRefs = useRef<HTMLUListElement>(null);
  const liActiveBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.key === value);
    const li = liRefs.current?.children[index] as HTMLElement;
    const liRect = li.getBoundingClientRect();
    const liLeft = liRect.left;
    const liWidth = liRect.width;
    liActiveBarRef.current!.style.width = `${liWidth}px`;
    liActiveBarRef.current!.style.transform = `translateX(${liLeft}px)`;
  }, [value]);

  return (
    <Div className={className}>
      <Ul ref={liRefs}>
        {tabs.map((tab, index) => (
          <Li
            key={tab.key}
            className={tab.key === value ? "selected" : ""}
            onClick={() => onChange(tab.key)}
          >
            {tab.text}
          </Li>
        ))}
        <LiActiveBar ref={liActiveBarRef} />
      </Ul>
      <div shrink-1 grow-1 overflow-auto>
        {tabs.find((tab) => tab.key === value)?.element}
      </div>
    </Div>
  );
};
