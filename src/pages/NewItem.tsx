import { Gradient } from "@/components/common/Gradient";
import { Tabs } from "@/components/common/Tabs";
import { Tags } from "@/components/newItem/Tags";
import { TopNav } from "@/components/common/TopNav";
import { useState } from "react";
import { Icon } from "@/components/common/Icon";
import { DateAndAmount } from "@/components/newItem/DateAndAmount";

export const NewItem: React.FC = () => {
  const [tab, setTab] = useState("pay");
  const tabs = [
    {
      key: "pay",
      text: "Pay",
      element: <Tags type="pay" />,
    },
    {
      key: "income",
      text: "Income",
      element: <Tags type="income" />,
    },
  ];

  return (
    <div relative h-screen flex flex-col>
      <Gradient>
        <TopNav
          title="New Bill"
          icon={<Icon name="back" className="w-24px h-24px mr-16px" />}
        />
      </Gradient>
      <Tabs
        tabs={tabs}
        value={tab}
        onChange={setTab}
        className="shrink-1 grow-1 overflow-hidden"
      />
      <DateAndAmount className="shrink-0 grow-0" />
    </div>
  );
};
