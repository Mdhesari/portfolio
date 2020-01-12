import React from "react"
import Linker from "./Linker"
import Image from "gatsby-image"
import Carousel from "react-bootstrap/Carousel"
/* 

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
*/
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = { index: 0, direction: null }
  }

  handleSelect(selectedIndex, e) {
    this.setState({ index: selectedIndex, direction: e.direction })
  }

  render() {
    let { pictures, description } = this.props

    return (
      <Carousel
        activeIndex={this.state.index}
        direction={this.state.direction}
        onSelect={this.handleSelect}
      >
        {pictures.map((item, index) => (
          <Carousel.Item key={index * 10}>
            <Linker key={index * 15} isLocal={false} url={item.fluid.src}>
              <Image
                className="d-block w-100"
                fluid={item.fluid}
                alt={description}
                key={index * 20}
              />
            </Linker>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }

  changePicture(ev) {
    ev.preventDefault()
    console.log(ev)
  }
}

export default Gallery
