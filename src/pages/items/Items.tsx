import React, { useState } from "react";
import styled from "styled-components";
import { TopNav } from "../../components/TopNav";
import { TimeRange, TimeRangePicker } from "../../components/TimeRangePicker";
import { ItemsSummary } from "./ItemsSummary";
import { ItemsList } from "./itemsList";
import { AddItemFloatButton } from "../../components/AddItemFloatButton";
import { TopMenu } from "../../components/TopMenu";
import { useMenuStore } from "../../stores/useMenuStore";
const Div = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 213, 128, 1) 0%,
    rgba(255, 211, 104, 1) 100%
  );
`;
export const Items: React.FC = () => {
  const { visible } = useMenuStore();
  const [timeRange, setTimeRange] = useState<TimeRange>("thisMonth");

  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: "incomes",
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: "2021-01-01T00:00:00.000Z",
      created_at: "2021-01-01T00:00:00.000Z",
      updated_at: "2021-01-01T00:00:00.000Z",
    },
    {
      id: 2,
      kind: "incomes",
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: "2021-01-01T00:00:00.000Z",
      created_at: "2021-01-01T00:00:00.000Z",
      updated_at: "2021-01-01T00:00:00.000Z",
    },
  ]);
  return (
    <div>
      {visible && <TopMenu />}
      <Div>
        <TopNav />
        <TimeRangePicker value={timeRange} onChange={setTimeRange} />
      </Div>
      <ItemsSummary />
      <ItemsList items={items} />
      <AddItemFloatButton />
    </div>
  );
};
