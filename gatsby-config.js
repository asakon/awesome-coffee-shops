/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-image',
    {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.spaceId,
      accessToken: process.env.accessToken 
    }
  }],
}
