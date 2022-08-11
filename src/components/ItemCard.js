import * as React from "react";

import * as cn from "classnames";
import "../styles/styles.css";

const ItemCard = ({ item }) => {
  return (
    <div className="px-4 py-2 font-SourceCodePro mx-8 ">
      <div className="w-full  p-4">
        <div className="flex">
          <div className="w-full font-bold text-orange-100 text-3xl">
            {item?.item_name?.text}
          </div>
          <div className="w-1/5 text-orange-100 text-xl font-SourceCodePro">
            <span className="font-bold tracking-widest">R</span>
            <span className="font-light tracking-widest">
              {item.item_price?.toFixed(2) || "0.00"}
            </span>
          </div>
        </div>
        <div className="text-orange-100 text-lg pt-4 font-OpenSans">
          {item?.item_description.text}
        </div>
        {/* <span className="absolute inline-block bg-white left-arrow h-1 w-1/4 left-[25%] translate-y-3"></span> */}
      </div>
    </div>
  );
};

export default ItemCard;
