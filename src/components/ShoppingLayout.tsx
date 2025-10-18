import React from "react";
import InspiredByYourBrowserHistory from "./by-history/InspiredByYourBrowserHistory";
import CardGrid from "./CardGrid";
import MonitoringYourBusiness from "./MonitoringYourBusiness";
import OurProducts from "./OurProducts";
const Categories = React.lazy(() => import("./Categories"));
const HeroBanner = React.lazy(() => import("./HeroBanner"));

const ShoppingLayout = () => {
  return (
    <div className=" overflow-x-auto">
      {" "}
      {/* Enables scroll on small screens */}
      <div className="w-full text-gray-800">
        <HeroBanner />
        <CardGrid />
        <OurProducts />
        <MonitoringYourBusiness />
        <Categories />
        <InspiredByYourBrowserHistory />
      </div>
    </div>
  );
};

export default ShoppingLayout;
