module.exports = {
  pathPrefix: "/",
  siteMetadata: require("./siteMetadata.json"),
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ls6f0f9ojore`,
        accessToken: `sSwMx6TGCv3W6-Ld8TbMpGxnQeuNPmnxC5JRSTOWi90`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mdhesari`,
        short_name: `portfolio website`,
        start_url: `/`,
        background_color: `#f3f3f1`,
        theme_color: `#044ff1`,
        display: `minimal-ui`,
        icon: `src/images/md-icon-32.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
