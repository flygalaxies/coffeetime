const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      prismicMenu {
        data {
          menu_categories {
            category_name {
              text
            }
          }
        }
      }
    }
  `);

  //   postPages.data.allPrismicPost.nodes.forEach((page) => {
  //     createPage({
  //       path: page.url,
  //       component: path.resolve(__dirname, "src/templates/post.js"),
  //       context: {
  //         id: page.id,
  //       },
  //     });
  //   });

  //   const posts = postPages.data.allPrismicPost.nodes;
  // The numPages constant will return the closest number between
  // 3 and the total amount of posts
  //   const numPages = Math.ceil(posts.length / 3);

  // Create homepage
  createPage({
    path: "/menu",
    component: path.resolve(__dirname, "src/templates/menuTemplate.js"),
    context: {
      slug: "menu",
    },
  });

  query?.data?.prismicMenu?.data?.menu_categories.forEach((category) => {
    let categoryName = category.category_name.text.toLowerCase();
    categoryName = categoryName.replace(/\s/g, "");
    createPage({
      path: `/menu/${categoryName}`,
      component: path.resolve(__dirname, `src/templates/${categoryName}.js`),
      context: {
        slug: `menu/${categoryName}`,
      },
    });
  });
};
