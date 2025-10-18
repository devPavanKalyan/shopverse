import { useState } from "react";
import OHRowOne from "../../components/orders/OHRowOne";
import OHRowThree from "../../components/orders/OHRowThree";
import OHRowTwo from "../../components/orders/OHRowTwo";

const OrderHistory: React.FC = () => {
  const [current, setCurrent] = useState<string>();

  const handleSetCurrent = (tab: string) => {
    setCurrent(tab);
  };
  return (
    <div className="flex flex-1 jusify-between items-center flex-col p-5 px-20">
      <OHRowOne />
      <OHRowTwo handleSetCurrent={handleSetCurrent} />
      <OHRowThree current={current} />
    </div>
  );
};

export default OrderHistory;
