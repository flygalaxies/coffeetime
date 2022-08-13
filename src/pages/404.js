import * as React from "react";
import { graphql } from "gatsby";

import * as cn from "classnames";
import "../styles/styles.css";
import Navbar from "../components/Navbar";

import BackgroundImage from "gatsby-background-image";

const Four0FourPage = ({ data }) => {
  if (!data) return null;
  const document = data.prismicHomepage.data;

  const backgroundFluidImageStack = [
    document.main_image.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.0))`,
  ].reverse();

  return (
    <>
      <header className="header-home">
        <Navbar />
        <BackgroundImage
          Tag="div"
          fluid={backgroundFluidImageStack}
          className={`h-full w-full bg-fixed`}
        >
          <div
            className={cn(
              "relative text-center -translate-y-1/2 -translate-x-1/2 top-[45%] left-1/2 text-white w-full md:w-1/2"
            )}
          >
            <h2 className="text-orange-300 font-herrVonMuellerhoff text-9xl -mb-14">
              Oh NO!
            </h2>
            <h1 className="font-SourceCodePro mt-4 text-5xl font-bold tracking-[9.4px]">
              404
            </h1>
          </div>
        </BackgroundImage>
      </header>
    </>
  );
};

export const query = graphql`
  query fourOfour {
    prismicHomepage {
      data {
        main_image {
          gatsbyImageData
          alt
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  }
`;

export default Four0FourPage;
