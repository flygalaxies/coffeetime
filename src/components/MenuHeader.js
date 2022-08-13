import * as React from "react";

import * as cn from "classnames";
import "../styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const MenuHeader = ({ headerText }) => {
  return (
    <>
      <h1
        className={cn(
          "font-SourceCodePro mt-8 text-5xl font-bold tracking-[9.4px] text-center text-white"
        )}
      >
        {headerText}
      </h1>
      <div className="text-center py-4 text-orange-400">
        <span className="absolute inline-block bg-orange-400 left-arrow-orange h-1 w-1/4 left-[25%] translate-y-3 "></span>
        <FontAwesomeIcon icon={faAsterisk} size="1x" />
        <span className="absolute inline-block bg-orange-400 right-arrow-orange h-1 w-1/4 right-[5%] translate-y-3"></span>
      </div>
    </>
  );
};

export default MenuHeader;
