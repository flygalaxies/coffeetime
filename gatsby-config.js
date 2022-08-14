const path = require("path");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Coffee Time Restaurant",
    description: "Official Website of Coffee Time Restaurant",
    siteUrl: `https://coffeetimerestaurant.co.za`,
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.resolve(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: path.resolve(__dirname, "src", "images", "favicon.png"),
      },
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-advanced-sitemap",
  ],
};
