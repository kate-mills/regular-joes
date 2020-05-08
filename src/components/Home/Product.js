import React from "react"
import Img from "gatsby-image"

const Product = ({ product: { id, title, price, image } }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{title}</h6>
          <h6>${price}</h6>
          <button
            className="snipcart-add-item btn btn-yellow mt-3 text-capitalize"
            data-item-id={id}
            data-item-name={title}
            data-item-price={price}
            data-item-image={image.fluid.src}
            data-item-url="https://hardcore-coffee.netlify.app/"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
