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
  faArrowDown,
  faChevronDown,
  faChevronUp,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMap from "../components/GoogleMap";

const HomePage = ({ data }) => {
  const [googleMapWidthHeight, setGoogleMapWidthHeight] = React.useState({
    width: "0",
    height: "0",
  });

  const googleMapElem = document.getElementById("googleMapContainer");

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
          <div className="relative text-center -translate-y-1/2 -translate-x-1/2 top-[45%] left-1/2 text-white w-full md:w-1/2">
            <h2 className="text-orange-300 font-herrVonMuellerhoff text-9xl -mb-14">
              Welcome
            </h2>
            <h1 className="font-SourceCodePro mt-4 text-5xl font-bold tracking-[9.4px]">
              COFFEE TIME
            </h1>

            <div className="text-center py-2">
              <span className="absolute inline-block bg-white left-arrow h-1 w-1/4 left-[20%] translate-y-2"></span>
              <FontAwesomeIcon icon={faAsterisk} size="1x" />
              <span className="absolute inline-block bg-white right-arrow h-1 w-1/4 right-[20%] translate-y-2"></span>
            </div>
            <span>Now Open</span>
            <div className="mt-8">
              <button className="bg-white text-black rounded-xl py-2 px-4 hover:bg-orange-400">
                <Link to="/menu">Explore the Menu</Link>
              </button>
            </div>
          </div>

          {/* <svg
            className="absolute bottom-0 left-1/2 text-white -translate-x-1/2 translate-y-4"
            width="192"
            height="61"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 160.7 61.5"
            enable-background="new 0 0 160.7 61.5"
          >
            <path
              fill="#fb923c"
              d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
            ></path>
          </svg> */}
          <div className="absolute cursor-pointer bottom-0 left-1/2 py-2 text-orange-300">
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
          </div>
        </BackgroundImage>
      </header>
      <section className="pt-12">
        <div className="flex">
          <div className="flex flex-col items-center px-8 w-1/2 text-center">
            <h2 className="font-herrVonMuellerhoff text-orange-400 text-8xl font-bold -mb-10">
              Discover
            </h2>
            <h3 className="font-SourceCodePro mt-4 text-5xl tracking-[9.4px] font-bold">
              Our Story
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
          <div className="w-1/2 flex flex-row">
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
          <div className="flex flex-row h-96">
            {/* <div className="mx-4 w-full h-full"> */}
            <BackgroundImage
              Tag="div"
              fluid={contactLeftImageFluidStack}
              // backgroundColor={`#040e18`}
              className={`h-full w-full bg-fixed`}
            >
              *
            </BackgroundImage>
            {/* </div> */}
            {/* <div className="mx-4 w-full h-full"> */}
            <BackgroundImage
              Tag="div"
              fluid={contactMiddleImageFluidStack}
              // backgroundColor={`#040e18`}
              className={`mx-4 h-full w-full bg-fixed`}
            >
              <div className="h-full w-full text-center text-white">
                <div className="absolute top-1/4 px-4">
                  <h2 className="font-herrVonMuellerhoff text-orange-300 text-7xl -mb-10">
                    Get in touch
                  </h2>
                  <h3 className="font-SourceCodePro mt-4 text-5xl tracking-[9.4px] font-bold">
                    GET IN TOUCH
                  </h3>
                </div>
              </div>
            </BackgroundImage>
            {/* </div> */}
            {/* <div className="mx-4 w-full h-full"> */}
            <BackgroundImage
              Tag="div"
              fluid={contactRightImageFluidStack}
              // backgroundColor={`#040e18`}
              className={`h-full w-full bg-fixed`}
            >
              *
            </BackgroundImage>
            {/* </div> */}
          </div>
          <div className="h-64 flex justify-center items-center my-8">
            <div className="w-full p-12">
              <div className="h-full w-full text-center text-black">
                <div className="relative">
                  <h2 className="font-herrVonMuellerhoff text-orange-300 text-8xl font-bold -mb-10">
                    Tel:
                  </h2>
                  <h3 className="font-SourceCodePro mt-4 text-4xl tracking-[9.4px] font-bold">
                    011 764 1313
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-full" id="googleMapContainer">
              {/* <div className="flex flex-col"> */}
              {/* <p className="h-full">FIND US</p> */}
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
      <footer>
        <div className="bg-slate-900 text-gray-500 font-SourceCodePro text-sm px-5 pt-8 pb-10">
          {/* <svg
            class="svg-up"
            width="192"
            height="61"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 160.7 61.5"
            enable-background="new 0 0 160.7 61.5"
          >
            <path
              fill="#262526"
              d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
            ></path>
          </svg> */}
          <ul className="flex flex-row list-none justify-center m-0">
            <li className="li-copyright">&copy; CoffeeTime 2022</li>
            <li className="li-copyright">
              54 Ontdekkers Road, Helderkruin, Roodepoort
            </li>
            <li className="li-copyright">Tel: 011 764 1313</li>
          </ul>
          <h3 className="text-center mt-4">
            Made with passion by{" "}
            <a href="#" className="text-orange-300">
              Ian Tolmay
            </a>
          </h3>
        </div>
      </footer>
    </>
  );
};

export const query = graphql`
  query home {
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
