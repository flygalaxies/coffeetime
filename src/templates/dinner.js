import * as React from "react";
import { graphql } from "gatsby";

import "../styles/styles.css";

import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";
import MenuHeader from "../components/MenuHeader";

const dinnerTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  console.log(doc);

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.dinner_background_image?.fluid || null}
    >
      <MenuHeader headerText={doc.dinner_header.text} />
      <div className="h-full overflow-auto">
        {/* MENU ITEMS */}
        {doc.dinner_items?.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query dinnerTemplate {
    prismicMenu {
      data {
        menu_categories {
          category_name {
            text
          }
        }
        dinner_header {
          text
        }
        dinner_background_image {
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
        dinner_items {
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

export default dinnerTemplate;
