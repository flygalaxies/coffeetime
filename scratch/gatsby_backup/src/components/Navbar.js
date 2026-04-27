import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import "../styles/navbar.css";
import * as cn from "classnames";
import useScrollPosition from "../hooks/useScrollPosition";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Navbar = ({ className, hideLogo }) => {
  const scrollPosition = useScrollPosition();

  const query = useStaticQuery(graphql`
    query navbar {
      prismicGlobal {
        data {
          logo {
            alt
            gatsbyImageData
          }
        }
      }
    }
  `);

  if (!query) return null;
  const doc = query.prismicGlobal.data;

  const menuLinks = [
    { text: "Home", link: "/" },
    { text: "Menu", link: "/menu" },
    // { text: "Who we are", link: "/" },
    // { text: "Get in touch", link: "/" },
  ];

  return (
    <nav
      className={cn(
        "flex fixed top-0 z-20 px-8 py-4 items-center w-full",
        // "sm:py-4",
        "lg:px-16 lg:py-8",
        // "lg:items-centeritems-center",
        // "md:items-center",
        className,
        scrollPosition > 200 && "navbar"
      )}
    >
      {!hideLogo && (
        <div className="w-16">
          <Link to="/">
            <div className="w-full">
              <GatsbyImage
                alt={doc.logo.alt || ""}
                image={getImage(doc.logo.gatsbyImageData)}
                className={""}
              />
            </div>
          </Link>
        </div>
      )}
      <div className="text-white flex h-full">
        <ul className="flex h-full">
          {menuLinks.map((menu) => (
            <li
              className="px-6 hover:text-orange-400 cursor-pointer"
              key={menu.text}
            >
              <Link to={menu.link}>
                <span>{menu.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
