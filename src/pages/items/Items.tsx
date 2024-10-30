import React, { useState } from "react";
import styled from "styled-components";
import { TopNav } from "../../components/TopNav";
import { TimeRange, TimeRangePicker } from "../../components/TimeRangePicker";
import { ItemsSummary } from "./ItemsSummary";
import { ItemsList } from "./itemsList";
import { AddItemFloatButton } from "../../components/AddItemFloatButton";
import { TopMenu } from "../../components/TopMenu";
import { useMenuStore } from "../../stores/useMenuStore";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

const Div = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 213, 128, 1) 0%,
    rgba(255, 211, 104, 1) 100%
  );
`;
export const Items: React.FC = () => {
  const { visible, setVisible } = useMenuStore();
  const [timeRange, setTimeRange] = useState<TimeRange>("thisMonth");

  return (
    <div>
      <TopMenu visible={visible} setVisible={setVisible} />
      <Div>
        <TopNav />
        <TimeRangePicker value={timeRange} onChange={setTimeRange} />
      </Div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  );
};
