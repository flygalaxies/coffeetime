import * as React from "react";
import { graphql, Link } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";

import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";
import MenuHeader from "../components/MenuHeader";

const alcoholTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  console.log(doc);

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.alcohol_background_image?.fluid || null}
    >
      <div className="h-full border-2">
        <MenuHeader headerText={doc.alcohol_header.text} />
        {/* MENU ITEMS */}
        {doc.alcohol_items?.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query alcoholTemplate {
    prismicMenu {
      data {
        menu_categories {
          category_name {
            text
          }
        }
        alcohol_header {
          text
        }
        alcohol_background_image {
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
        alcohol_items {
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

export default alcoholTemplate;
