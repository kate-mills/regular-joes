import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              I'm baby lomo ugh flannel, normcore succulents meditation
              chillwave 8-bit umami hell of artisan organic food truck
              helvetica. Cold-pressed bespoke af DIY cliche. Street art woke
              microdosing, raclette neutra heirloom air plant disrupt keytar
              occupy hashtag. Retro pabst intelligentsia bitters kale chips
              hammock fixie +1 banh mi. Chia pickled knausgaard hoodie, cardigan
              vexillologist etsy XOXO live-edge sustainable.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
