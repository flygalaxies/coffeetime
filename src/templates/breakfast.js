import * as React from "react";
import { graphql, Link } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";

import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";
import MenuHeader from "../components/MenuHeader";

const breakfastTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  console.log(doc);

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.breakfast_background_image?.fluid || null}
    >
      <div className="h-full border-2">
        <MenuHeader headerText={doc.breakfast_header.text} />
        {/* MENU ITEMS */}
        {doc.breakfast_items?.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query breakfastTemplate {
    prismicMenu {
      data {
        menu_categories {
          category_name {
            text
          }
        }
        breakfast_header {
          text
        }
        breakfast_background_image {
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
        breakfast_items {
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

export default breakfastTemplate;
