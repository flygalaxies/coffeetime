import * as React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as cn from "classnames";
import "../styles/styles.css";
import Navbar from "../components/Navbar";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

const Four0FourPage = ({data}) => {
  if (!data) return null;
  const document = data.prismicHomepage.data;

  console.log(document);

  // const bgImage = convertToBgImage(
  //   getImage(document.main_image.gatsbyImageData)
  // );

  // console.log(bgImage);
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
          // backgroundColor={`#040e18`}
          className={`h-full w-full bg-fixed`}
        >
          <div className="relative text-center -translate-y-1/2 -translate-x-1/2 top-[45%] left-1/2 text-white w-full md:w-1/2">
            <h2 className="text-orange-300 font-herrVonMuellerhoff text-9xl -mb-14">
              Oh NO!
            </h2>
            <h1 className="font-SourceCodePro mt-4 text-5xl font-bold tracking-[9.4px]">
              404
            </h1>
          </div>

          <div className="absolute cursor-pointer bottom-0 left-1/2 py-2 text-orange-400">
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
          </div>
        </BackgroundImage>
      </header>
      <section className="pt-8">
        <div class="about-us">
          <div class="text">
            <h2>Discover</h2>
            <h3>Our Story</h3>
            <div>
              <i class="fas fa-asterisk"></i>
            </div>
            <p>
              Rosa is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon’s Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and a
              bustling London intersection.
            </p>
            <div>
              <a class="a-CTA" href="#">
                About Us
              </a>
            </div>
          </div>
          <div class="image-container">
            <div class="image image1">
              <img
                src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988527/vertical-photo-1.jpg"
                alt="Food Photo"
              />
            </div>
            <div class="image image2">
              <img
                src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988532/vertical-photo-2.jpg"
                alt="Food Photo"
              />
            </div>
          </div>
        </div>
      </section>
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
