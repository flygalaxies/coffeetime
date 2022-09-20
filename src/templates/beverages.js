import * as React from "react";
import { graphql } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";

import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";
import MenuHeader from "../components/MenuHeader";

const beveragesTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.beverages_background_image?.fluid || null}
      isDevelop={doc.is_develop}
    >
      <MenuHeader headerText={doc.beverages_header.text} />
      <div className="h-full overflow-auto">
        {/* MENU ITEMS */}
        {doc.beverages_items?.map((item) => (
          <ItemCard item={item} key={item.item_name.text} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query beveragesTemplate {
    prismicMenu {
      data {
        is_develop
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
