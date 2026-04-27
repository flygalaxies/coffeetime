import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
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
        <ul className="flex flex-col text-center list-none m-0">
          <li className="md:li-copyright">{doc.company_cc.text}</li>
          <li className="md:li-copyright">{doc.company_address.text}</li>
          <li className="md:li-copyright">Tel: {doc.company_phone.text}</li>
        </ul>
        <h3 className="text-center mt-4">
          Made with passion by{" "}
          <span className="text-orange-300">Ian Tolmay</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
