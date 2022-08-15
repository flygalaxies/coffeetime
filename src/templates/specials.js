import * as React from "react";
import { graphql } from "gatsby";

import "../styles/styles.css";

import MenuLayout from "../components/MenuLayout";
import ItemCard from "../components/ItemCard";
import MenuHeader from "../components/MenuHeader";

const specialsTemplate = ({ data }) => {
  if (!data) return null;
  const doc = data.prismicMenu.data;

  return (
    <MenuLayout
      menuCategories={doc.menu_categories}
      backgroundImageFluid={doc.specials_background_image?.fluid || null}
    >
      <MenuHeader headerText={doc.specials_header.text} />
      <div className="h-full overflow-auto">
        {/* MENU ITEMS */}
        {doc.specials_items?.map((item) => (
          <>
            {console.log(item)}
            <ItemCard item={item} />
          </>
        ))}
      </div>
    </MenuLayout>
  );
};

export const query = graphql`
  query specialsTemplate {
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

export default specialsTemplate;
