/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/d2pd3-site",
  siteMetadata: {
    title: `Detecting Disparities in Police Deployments Using Dashcam Data`,
    description: `Code, resources, and news on the D2PD3 project, an urban sensing and computational social science project that seeks to identify disparities in police deployments from urban street-level dashcam data.`,
    author: `Matt Franchi`,
    siteUrl: `/d2pd3-site`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `d2pd3`,
        short_name: `d2pd3`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/intro-bg.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`, // path to your markdown files
      },
    },
    `gatsby-transformer-remark`,
  ],
}
