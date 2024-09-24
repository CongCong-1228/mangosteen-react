import React from "react";
import styled from "styled-components";
import { TopNav } from "../components/TopNav";

export const Items: React.FC = () => {
  const Div = styled.div`
    background: linear-gradient(
      0deg,
      rgba(255, 213, 128, 1) 0%,
      rgba(255, 211, 104, 1) 100%
    );
  `;
  return (
    <div>
      <Div>
        <TopNav />
      </Div>
    </div>
  );
};
