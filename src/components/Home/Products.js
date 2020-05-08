import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 428, toFormat: JPG) {
              tracedSVG
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const renderProducts = ({ products }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {products.edges.map(({ node: product }) => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </div>
    </section>
  )
}

const Products = () => {
  return <StaticQuery query={getProducts} render={renderProducts} />
}

export default Products
