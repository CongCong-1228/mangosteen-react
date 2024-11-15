import React, { useState } from "react";
import { TopNav } from "@/components/common/TopNav";
import { Tabs } from "@/components/common/Tabs";
import { ItemsSummary } from "./ItemsSummary";
import { ItemsList } from "./itemsList";
import { AddItemFloatButton } from "@/components/common/AddItemFloatButton";
import { TopMenu } from "../../components/common/TopMenu";
import { useMenuStore } from "../../stores/useMenuStore";
import { Icon } from "@/components/common/Icon";
import { Gradient } from "@/components/common/Gradient";

export const Items: React.FC = () => {
  const { visible, setVisible } = useMenuStore();
  const [timeRange, setTimeRange] = useState("thisMonth");
  const tabs = [
    {
      key: "thisMonth",
      text: "本月",
      element: (
        <>
          <ItemsSummary />
          <ItemsList />
        </>
      ),
    },
    {
      key: "lastMonth",
      text: "上月",
      element: <>上月</>,
    },
    {
      key: "thisYear",
      text: "今年",
      element: <>今年</>,
    },
    {
      key: "custom",
      text: "自定义",
      element: <>自定义</>,
    },
  ];

  return (
    <div>
      <TopMenu visible={visible} setVisible={setVisible} />
      <Gradient>
        <TopNav
          title="Accounting List"
          icon={
            <Icon
              name="menu"
              className="w-24px h-24px mr-16px"
              onClick={() => {
                setVisible(!visible);
              }}
            />
          }
        />
      </Gradient>
      <Tabs tabs={tabs} value={timeRange} onChange={setTimeRange} />
      {/* <ItemsSummary /> */}
      {/* <ItemsList /> */}
      <AddItemFloatButton />
    </div>
  );
};
