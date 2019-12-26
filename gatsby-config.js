/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/preview/ahh'
}
module.exports = {
  proxy: {
    prefix: "/api",
    url: "localhost:3000"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}