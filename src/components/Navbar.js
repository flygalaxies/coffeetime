import * as React from "react";
import { graphql, Link } from "gatsby";

import "../styles/navbar.css";
import * as cn from "classnames";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = ({ className, hideLogo }) => {
  //   if (!data) return null;
  //   const document = data.prismicHomepage.data;

  const scrollPosition = useScrollPosition();

  const menuLinks = [
    { text: "Home", link: "/" },
    { text: "Menu", link: "/menu" },
    // { text: "Who we are", link: "/" },
    // { text: "Get in touch", link: "/" },
  ];

  return (
    <nav
      className={cn(
        "flex fixed top-0 z-20 p-9 left-0 w-full",
        scrollPosition > 300 && "navbar",
        className
      )}
    >
      {!hideLogo && (
        <div className="px-8">
          <Link to="/">
            <span>Logo</span>{" "}
          </Link>
        </div>
      )}
      <div className="w-full text-white flex-1">
        <ul className="flex ">
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

// export const query = graphql`
//   query home {
//     prismicHomepage {
//       data {
//         title {
//           text
//         }
//         intro {
//           raw
//         }
//         main_image {
//           gatsbyImageData
//           alt
//         }
//       }
//     }
//   }
// `;

export default Navbar;
