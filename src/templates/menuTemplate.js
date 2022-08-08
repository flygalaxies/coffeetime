import * as React from "react";
import { graphql } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";
import Navbar from "../components/Navbar";

import BackgroundImage from "gatsby-background-image";

const MenuTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  console.log(doc);

  // const bgImage = convertToBgImage(
  //   getImage(document.main_image.gatsbyImageData)
  // );

  // console.log(bgImage);
  const backgroundFluidImageStack = [
    // doc.main_image.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.0))`,
  ].reverse();

  const MenuCategories = doc.menu_categories;

  // const MenuCategories = [
  //   { title: "Quicky" },
  //   { title: "Breakfast" },
  //   { title: "Burgers" },
  //   { title: "Pizza" },
  //   { title: "Dinner" },
  //   { title: "Drinks" },
  // ];

  return (
    <header className="">
      <BackgroundImage
        Tag="div"
        fluid={backgroundFluidImageStack}
        className={`h-full w-full bg-fixed`}
      >
        <Navbar className={"pl-64"} hideLogo={true} />
        {/* MENU SIDENAV */}
        <div className="absolute w-68 h-full menu-sideNav">
          {/* HEADER */}
          <div className="flex flex-col items-center content-center justify-center">
            <div className="text-white w-full text-center p-8">Logo</div>
            <div className="text-center text-white w-full md:w-1/2 top-[15%]">
              <h2 className="text-orange-300 font-herrVonMuellerhoff text-5xl -mb-10">
                Menu
              </h2>
              <h1 className="font-SourceCodePro mt-4 text-3xl font-bold tracking-[9.4px]">
                Menu TIME
              </h1>
            </div>
          </div>
          {/* MENU CATEGORIES */}
          <div className="flex flex-col text-white items-center">
            {MenuCategories.map((category) => (
              <div
                className="w-full m-2 bg-orange-300 p-4"
                key={category.category_name.text}
              >
                {category.category_name.text}
              </div>
            ))}
          </div>
        </div>
      </BackgroundImage>
    </header>
  );
};

export const query = graphql`
  query menu {
    prismicMenu {
      data {
        menu_categories {
          category_name {
            text
          }
        }
      }
    }
  }
`;

export default MenuTemplate;
