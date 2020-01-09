import React from "react"
import Card from "../Card"
import { Link } from "gatsby"

export default () => {
  return (
    <Card className="blog-card">
      <Link to="#">
        <div class="card-inner-img-top">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--PrTRaauJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/694a8it7vcim8berxrjj.png"
            class="card-img-top"
            alt=""
          />
        </div>
        <div class="card-body">
          <h5 class="card-title text-center">
            How to develop self-discipline as programmers
          </h5>
          <p class="card-text">self discipline is so important</p>
        </div>
      </Link>
    </Card>
  )
}
