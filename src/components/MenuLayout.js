import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";
import "../styles/menuLayout.css";
import Navbar from "../components/Navbar";

import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuLayout = ({
  menuCategories,
  children,
  backgroundImageFluid,
  isDevelop = true,
  menuTitle,
  hideMenu = true,
}) => {
  const [showMenu, setShowMenu] = React.useState(true);
  const [clickCounter, setClickCounter] = React.useState(1);
  const [isDevelopMode, setIsDevelopMode] = React.useState(isDevelop);

  const query = useStaticQuery(graphql`
    query Layout {
      prismicGlobal {
        data {
          logo {
            alt
            gatsbyImageData
          }
        }
      }
    }
  `);

  React.useMemo(() => {
    hideMenu && setShowMenu(false);
  }, []);

  if (!menuCategories || !query) return null;
  const doc = query.prismicGlobal.data;

  const backgroundFluidImageStack = [
    backgroundImageFluid || "",
    `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.3))`,
  ].reverse();

  // isDevelop = false;

  return (
    <header>
      <BackgroundImage
        Tag="div"
        fluid={backgroundFluidImageStack}
        className={`h-full w-full bg-fixed`}
      >
        {isDevelopMode ? (
          <>
            <Navbar className={"sm:pl-72"} hideLogo={false} />
            <div className="absolute flex flex-col items-center content-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-center text-white w-full mb-8 md:w-1/2 top-[15%]">
                <h2 className="text-orange-300 font-herrVonMuellerhoff text-5xl -mb-5">
                  In Progress
                </h2>
                <h1 className="font-SourceCodePro mt-4 text-3xl font-bold tracking-[9.4px]">
                  Menu Coming{" "}
                  <span
                    onClick={() => {
                      setClickCounter(clickCounter + 1);
                      if (clickCounter === 5) {
                        setIsDevelopMode(false);
                      }
                    }}
                  >
                    Soon
                  </span>
                </h1>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={cn("top-0 right-0 px-6 py-4 fixed text-white z-30")}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
            {!showMenu && <Navbar />}
            {showMenu && (
              <div className={cn("h-full w-full")}>
                {/* MENU SIDENAV */}
                <div className="menu-sideNav w-full">
                  {/* HEADER */}
                  <div className="flex flex-col items-center content-center justify-center">
                    <Link to="/" className="text-white text-center px-16 py-4">
                      <GatsbyImage
                        alt={doc.logo.alt || ""}
                        image={getImage(doc.logo.gatsbyImageData)}
                        className={""}
                      />
                    </Link>
                    <div className="text-center text-white w-full mb-4 md:w-1/2 top-[0%]">
                      <h2 className="text-orange-300 font-herrVonMuellerhoff text-5xl -mb-10">
                        {menuTitle || "Menu"}
                      </h2>
                      <h1 className="font-SourceCodePro mt-4 text-3xl font-bold tracking-[9.4px]">
                        Menu TIME
                      </h1>
                    </div>
                  </div>
                  {/* MENU CATEGORIES */}
                  <div className="flex flex-row flex-wrap justify-center text-white px-2 font-SourceCodePro">
                    {menuCategories.map((category) => {
                      const categoryName = category.category_name.text;
                      const categoryNameLink = categoryName
                        .toLowerCase()
                        .replace(/\s/g, "");
                      return (
                        <Link
                          className={cn(
                            "my-6 mx-2 text-orange-200 ",
                            "menuItemCard"
                          )} //my-4 py-4 w-1/2
                          to={`/menu/${categoryNameLink}`}
                          key={categoryName}
                        >
                          <div
                            className={cn("cursor-pointer", "menuItemCategory")}
                          >
                            <span className="menuItemCategoryName">
                              {categoryName}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {/* MENU CONTENT */}
            {!showMenu && <div className="pt-24 pb-32 h-full">{children}</div>}
          </>
        )}
      </BackgroundImage>
    </header>
  );
};

export default MenuLayout;
