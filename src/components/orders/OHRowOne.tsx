import { useState } from "react";

const OHRowOne = () => {
  const [search, setSearch] = useState<string>();

  return (
    <div className="w-full flex flex-row justify-between items-center  px-5 pb-1">
      <div>
        <h1 className="text-3xl font-medium">Your Orders</h1>
      </div>
      <div className="flex flex-row justify-between items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md border px-2 py-1 focus:outline-none"
          placeholder="Search here.."
        />
        <button
          type="submit"
          className="ml-2 rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
        >
          Search orders
        </button>
      </div>
    </div>
  );
};

export default OHRowOne;
