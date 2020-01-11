import React from "react"
import Linker from "./Linker"
import Image from "gatsby-image"

class Gallery extends React.Component {
  render() {
    let { pictures } = this.props

    return (
      <>
        {pictures.map((item, index) => (
          <Linker
            key={index * 99}
            isAllowed={index === 0}
            isLocal={false}
            url={item.fluid.src}
          >
            <Image
              key={index * 98}
              className={index === 0 ? "gallery-active" : "gallery-non-active"}
              fluid={item.fluid}
            />
          </Linker>
        ))}
      </>
    )
  }

  changePicture(ev) {
    ev.preventDefault()
    console.log(ev)
  }
}

export default Gallery
