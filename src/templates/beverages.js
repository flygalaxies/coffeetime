import * as React from "react";
import { graphql, Link } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faArrowDown,
  faChevronDown,
  faChevronUp,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";

const beveragesTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.beverages_background_image?.fluid || null}
    >
      <div className="h-full border-2">
        <h1 className="font-SourceCodePro mt-8 text-5xl font-bold tracking-[9.4px] text-center text-white">
          {doc.beverages_header.text}
        </h1>
        <div className="text-center py-4 text-orange-400">
          <span className="absolute inline-block bg-orange-400 left-arrow-orange h-1 w-1/4 left-[25%] translate-y-3 "></span>
          <FontAwesomeIcon icon={faAsterisk} size="1x" />
          <span className="absolute inline-block bg-orange-400 right-arrow-orange h-1 w-1/4 right-[5%] translate-y-3"></span>
        </div>
        {/* MENU ITEMS */}
        {doc.beverages_items?.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query beveragesTemplate {
    prismicMenu {
      data {
        menu_categories {
          category_name {
            text
          }
        }
        beverages_header {
          text
        }
        beverages_background_image {
          fluid {
            srcWebp
            srcSetWebp
            srcSet
            src
            sizes
            base64
            aspectRatio
          }
        }
        beverages_items {
          item_description {
            text
          }
          item_image {
            gatsbyImageData
          }
          item_name {
            text
          }
          item_price
        }
      }
    }
  }
`;

export default beveragesTemplate;
