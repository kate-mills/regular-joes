import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="regular joe's"
      />
      <Info />
      <Menu items={data.menu} defaultCoffee={data.defaultCoffeeImg} />
      <Products />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid(toFormat: JPG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50, toFormat: JPG) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
