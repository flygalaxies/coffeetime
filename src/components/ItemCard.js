import * as React from "react";

import * as cn from "classnames";
import "../styles/styles.css";

const ItemCard = ({ item }) => {
  return (
    <div className={cn("px-4 py-2 font-SourceCodePro mx-2", "md:mx-40")}>
      <div className={cn("w-full py-2")}>
        <div className="flex">
          <div className="w-full font-bold text-orange-300 text-2xl">
            {item?.item_name?.text}
          </div>
          <div className="text-orange-200 text-xl font-SourceCodePro self-center">
            <span className="font-bold tracking-widest">R</span>
            <span className="font-light tracking-widest">
              {item.item_price?.toFixed(2) || "0.00"}
            </span>
          </div>
        </div>
        <div className="text-orange-100 text-lg pt-4 font-OpenSans">
          {item?.item_description.text}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
