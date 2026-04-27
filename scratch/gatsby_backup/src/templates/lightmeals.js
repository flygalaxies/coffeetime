import * as React from "react";
import { graphql } from "gatsby";

import "../styles/styles.css";

import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";
import MenuHeader from "../components/MenuHeader";

const lightmealsTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.lightmeals_background_image?.fluid || null}
      isDevelop={doc.is_develop}
    >
      <MenuHeader headerText={doc.lightmeals_header.text} />
      <div className="h-full overflow-auto">
        {/* MENU ITEMS */}
        {doc.lightmeals_items?.map((item) => (
          <ItemCard item={item} key={item.item_name.text} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query lightmealsTemplate {
    prismicMenu {
      data {
        is_develop
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
