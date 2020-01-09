import React from "react"
import CardGroup from "../CardGroup"
import Article from "../article/Article"
import Title from "../Title"

export default () => {
  return (
    <section className="articles my-4 py-4">
      <div className="container-md">
        <Title className="text-center">
          <a href="#">Latest Articles</a>
        </Title>
        <CardGroup>
          <Article />
          <Article />
          <Article />
        </CardGroup>
      </div>
    </section>
  )
}
