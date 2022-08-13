import * as React from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as cn from "classnames";
import "../styles/styles.css";
import Navbar from "../components/Navbar";

import BackgroundImage from "gatsby-background-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAsterisk,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMap from "../components/GoogleMap";
import Footer from "../components/Footer";

const HomePage = ({ data }) => {
  const [googleMapWidthHeight, setGoogleMapWidthHeight] = React.useState({
    width: "0",
    height: "0",
  });

  const googleMapElem =
    typeof window === "undefined"
      ? null
      : document.getElementById("googleMapContainer");

  React.useEffect(() => {
    const width = googleMapElem ? googleMapElem.clientWidth : "";
    const height = googleMapElem ? googleMapElem.clientHeight : "";

    setGoogleMapWidthHeight({ width, height });
  }, [googleMapElem]);

  if (!data) return null;
  const doc = data.prismicHomepage.data;

  console.log(doc);

  const backgroundFluidImageStack = [
    doc.main_image.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.0))`,
  ].reverse();

  const aboutImageFluidStack = [
    doc.home_about_right_image.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.0))`,
  ].reverse();

  const contactLeftImageFluidStack = [
    doc.contact_left_image.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.0))`,
  ].reverse();
  const contactMiddleImageFluidStack = [
    doc.contact_middle_image.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.0))`,
  ].reverse();
  const contactRightImageFluidStack = [
    doc.contact_right_image.fluid,
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
          <div className="relative text-center -translate-y-1/2 -translate-x-1/2 top-[45%] left-1/2 text-white w-full sm:w-1/2">
            <h2 className="text-orange-300 font-herrVonMuellerhoff text-9xl -mb-14">
              Welcome
            </h2>
            <h1 className="font-SourceCodePro mt-4 text-5xl font-bold tracking-[9.4px]">
              COFFEE TIME
            </h1>

            <div className="text-center py-2">
              <span className="absolute inline-block bg-white left-arrow h-1 w-1/4 left-[15%] translate-y-2"></span>
              <FontAwesomeIcon icon={faAsterisk} size="1x" />
              <span className="absolute inline-block bg-white right-arrow h-1 w-1/4 right-[15%] translate-y-2"></span>
            </div>
            <span>Now Open</span>
            <div>{doc.tradinghours?.text || ""}</div>
            <div className="mt-8">
              <button className="bg-white text-black rounded-xl py-2 px-4 hover:bg-orange-400">
                <Link to="/menu">Explore the Menu</Link>
              </button>
            </div>
          </div>

          <div className="absolute cursor-pointer bottom-0 left-1/2 py-2 text-orange-300">
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
          </div>
        </BackgroundImage>
      </header>
      <section className="pt-12">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center px-8 w-full text-center ">
            <h2 className="font-herrVonMuellerhoff text-orange-400 text-8xl font-bold -mb-10">
              Discover
            </h2>
            <h3 className="font-SourceCodePro mt-4 text-5xl tracking-[9.4px] font-bold">
              Our STORY
            </h3>
            <div className="my-4">
              <FontAwesomeIcon icon={faAsterisk} size="1x" />
            </div>
            <p>{doc.home_about_description.text}</p>

            {/* <div>
              <a class="a-CTA" href="#">
                About Us
              </a>
            </div> */}
          </div>
          <div className="w-full flex flex-row">
            <div className="w-full m-4">
              <GatsbyImage
                alt={doc.home_about_left_image.alt || ""}
                image={getImage(doc.home_about_left_image.gatsbyImageData)}
              />
            </div>
            <div className="w-full m-4">
              <GatsbyImage
                alt={doc.home_about_right_image.alt || ""}
                image={getImage(doc.home_about_right_image.gatsbyImageData)}
              />
            </div>
          </div>
        </div>
      </section>
      {/* GET IN TOUCH */}
      <section className="mt-4">
        <div>
          <div className={cn("flex flex-col h-96", "md:flex-row")}>
            <BackgroundImage
              Tag="div"
              fluid={contactLeftImageFluidStack}
              className={cn(
                `h-full w-full bg-fixed hidden`,
                "sm:",
                "md:block mx-4",
                "lg:"
              )}
            >
              *
            </BackgroundImage>
            <BackgroundImage
              Tag="div"
              fluid={contactMiddleImageFluidStack}
              className={`h-full w-full bg-fixed`}
            >
              <div className="h-full w-full text-center text-white">
                <div className="absolute top-1/4">
                  <h2 className="font-herrVonMuellerhoff text-orange-300 text-7xl -mb-10">
                    Come Visit
                  </h2>
                  <h3 className="font-SourceCodePro mt-4 text-5xl tracking-[9.4px] font-bold">
                    GET IN TOUCH
                  </h3>
                </div>
              </div>
            </BackgroundImage>

            <BackgroundImage
              Tag="div"
              fluid={contactRightImageFluidStack}
              className={cn(
                `h-full w-full bg-fixed hidden`,
                "sm:",
                "md:block mx-4",
                "lg:"
              )}
            >
              *
            </BackgroundImage>
          </div>
          <div className={cn("h-96 flex flex-col py-8", "sm:flex-row")}>
            <div className={cn("w-full h-full py-4", "sm:py-16 sm:px-8")}>
              <div className="h-full w-full text-center text-black">
                <div className="relative">
                  <h2 className="font-herrVonMuellerhoff text-orange-300 text-8xl font-bold -mb-10">
                    Tel:
                  </h2>
                  <h3 className="font-SourceCodePro mt-4 text-4xl tracking-[9.4px] font-bold">
                    {data.prismicGlobal.data.company_phone.text}
                  </h3>
                </div>
              </div>
            </div>
            <div className="h-full w-full sm:px-4" id="googleMapContainer">
              <GoogleMap
                width={googleMapWidthHeight.width}
                height={googleMapWidthHeight.height}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* COPYRIGHT */}
      <Footer />
    </>
  );
};

export const query = graphql`
  query home {
    prismicGlobal {
      data {
        company_phone {
          text
        }
      }
    }
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
        home_about_description {
          text
        }
        home_about_left_image {
          alt
          gatsbyImageData
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
        home_about_right_image {
          alt
          gatsbyImageData
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
        contact_left_image {
          alt
          gatsbyImageData
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
        contact_middle_image {
          alt
          gatsbyImageData
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
        contact_right_image {
          alt
          gatsbyImageData
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
      }
    }
  }
`;

export default HomePage;
