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
import MenuHeader from "../components/MenuHeader";

const MenuTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.specials_background_image?.fluid || null}
      isDevelop={data.is_develop}
    >
      <div className="h-full border-2">
        <MenuHeader headerText={doc.specials_header.text} />
        {/* MENU ITEMS */}
        {doc.specials_items?.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query menuTemplate {
    prismicMenu {
      data {
        menu_categories {
          category_name {
            text
          }
        }
        specials_header {
          text
        }
        specials_background_image {
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
        specials_items {
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

export default MenuTemplate;
