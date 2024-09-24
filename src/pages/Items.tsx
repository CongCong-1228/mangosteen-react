import React, { useState } from "react";
import styled from "styled-components";
import { TopNav } from "../components/TopNav";
import { TimeRange, TimeRangePicker } from "../components/TimeRangePicker";
const Div = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 213, 128, 1) 0%,
    rgba(255, 211, 104, 1) 100%
  );
`;
export const Items: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("thisMonth");
  return (
    <div>
      <Div>
        <TopNav />
        <TimeRangePicker value={timeRange} onChange={setTimeRange} />
      </Div>
    </div>
  );
};
