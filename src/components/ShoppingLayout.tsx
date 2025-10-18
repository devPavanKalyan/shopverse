import React from "react";
import InspiredByYourBrowserHistory from "./by-history/InspiredByYourBrowserHistory";
import CardGrid from "./CardGrid";
import MonitoringYourBusiness from "./MonitoringYourBusiness";
import OurProducts from "./OurProducts";
import QuickSearch from "./QuickSearch";
const Categories = React.lazy(() => import("./Categories"));
const HeroBanner = React.lazy(() => import("./HeroBanner"));

const ShoppingLayout = () => {
  return (
    <div className="w-full text-gray-800 overflow-x-auto">
      <QuickSearch />
      <HeroBanner />
      <CardGrid />
      <OurProducts />
      <MonitoringYourBusiness />
      <Categories />
      <InspiredByYourBrowserHistory />
    </div>
  );
};

export default ShoppingLayout;
