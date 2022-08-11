import * as React from "react";
import { graphql, Link } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";

import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";
import MenuHeader from "../components/MenuHeader";

const lightmealsTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  console.log(doc);

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.lightmeals_background_image?.fluid || null}
    >
      <div className="h-full border-2">
        <MenuHeader headerText={doc.lightmeals_header.text} />
        {/* MENU ITEMS */}
        {doc.lightmeals_items?.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query lightmealsTemplate {
    prismicMenu {
      data {
        menu_categories {
          category_name {
            text
          }
        }
        lightmeals_header {
          text
        }
        lightmeals_background_image {
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
        lightmeals_items {
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

export default lightmealsTemplate;
