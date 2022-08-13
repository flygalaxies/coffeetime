import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = ({}) => {
  const query = useStaticQuery(graphql`
    query footer {
      prismicGlobal {
        data {
          company_cc {
            text
          }
          company_address {
            text
          }
          company_phone {
            text
          }
        }
      }
    }
  `);

  if (!query) return null;

  const doc = query.prismicGlobal.data;

  return (
    <footer>
      <div className="bg-slate-900 text-gray-500 font-SourceCodePro text-sm py-4">
        {/**px-5 pt-8 pb-10 */}
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
        <ul className="flex flex-col text-center list-none m-0">
          <li className="md:li-copyright">{doc.company_cc.text}</li>
          <li className="md:li-copyright">{doc.company_address.text}</li>
          <li className="md:li-copyright">Tel: {doc.company_phone.text}</li>
        </ul>
        <h3 className="text-center mt-4">
          Made with passion by{" "}
          <a href="#" className="text-orange-300">
            Ian Tolmay
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
