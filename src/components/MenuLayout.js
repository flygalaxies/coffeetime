import * as React from "react";
import { Link } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";
import Navbar from "../components/Navbar";

import BackgroundImage from "gatsby-background-image";

const MenuLayout = ({
  menuCategories,
  children,
  backgroundImageFluid,
  isDevelop = true,
}) => {
  if (!menuCategories) return null;

  const backgroundFluidImageStack = [
    backgroundImageFluid || "",
    `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.3))`,
  ].reverse();

  return (
    <header>
      <BackgroundImage
        Tag="div"
        fluid={backgroundFluidImageStack}
        className={`h-full w-full bg-fixed`}
      >
        {isDevelop ? (
          <>
            <Navbar className={"sm:pl-72"} hideLogo={false} />
            <div className="absolute flex flex-col items-center content-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-center text-white w-full mb-8 md:w-1/2 top-[15%]">
                <h2 className="text-orange-300 font-herrVonMuellerhoff text-5xl -mb-10">
                  In Progress
                </h2>
                <h1 className="font-SourceCodePro mt-4 text-3xl font-bold tracking-[9.4px]">
                  Menu coming Soon
                </h1>
              </div>
            </div>
          </>
        ) : (
          <>
            <Navbar className={"sm:pl-72"} hideLogo={true} />
            <div className={cn("flex flex-row h-full")}>
              {/* MENU SIDENAV */}
              <div className="w-1/4 h-full menu-sideNav">
                {/* HEADER */}
                <div className="flex flex-col items-center content-center justify-center">
                  <div className="text-white w-full text-center p-8">Logo</div>
                  <div className="text-center text-white w-full mb-8 md:w-1/2 top-[15%]">
                    <h2 className="text-orange-300 font-herrVonMuellerhoff text-5xl -mb-10">
                      Menu
                    </h2>
                    <h1 className="font-SourceCodePro mt-4 text-3xl font-bold tracking-[9.4px]">
                      Menu TIME
                    </h1>
                  </div>
                </div>
                {/* MENU CATEGORIES */}
                <div className="flex flex-col text-white ">
                  {menuCategories.map((category) => {
                    const categoryName = category.category_name.text;
                    const categoryNameLink = categoryName
                      .toLowerCase()
                      .replace(/\s/g, "");
                    return (
                      <Link
                        className="py-4 my-2 mx-10 bg-orange-300"
                        to={`/menu/${categoryNameLink}`}
                        key={categoryName}
                      >
                        <div className="cursor-pointer ">
                          <span className="mx-10">{categoryName}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              {/* MENU CONTENT */}
              <div className="w-full mt-24 p-9">{children}</div>
            </div>
          </>
        )}
      </BackgroundImage>
    </header>
  );
};

export default MenuLayout;
