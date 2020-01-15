import React from "react"
import Img from "gatsby-image"
import moment from "moment"
import {
  FaCalendar,
  FaBookReader,
  FaArrowLeft,
  FaArrowRight,
  FaClone,
} from "react-icons/fa"
import readTime from "reading-time"
import SocialMediaShareList from "../SocialMediaShareList"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"

export default class Article extends React.Component {
  state = {
    copied: false,
  }

  onCopy = () => {
    this.setState({ copied: true })
  }

  render() {
    let { article } = this.props

    let reading_time = readTime(article.body.body)

    let tooltip_title = this.state.copied
      ? "Url was copied!"
      : "Copy to clipboard!"

    let article_url = ""

    if(typeof document !== undefined) {
      article_url = document.location.href
    }

    return (
      <Container>
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title">{article.title}</h1>
            <div className="post-meta">
              <time
                className="published"
                dateTime={moment(article.createdAt).format("LL")}
              >
                <FaCalendar className="post-meta-icon" />
                {moment(article.createdAt).format("LL")}
              </time>
              <span>
                <FaBookReader className="post-meta-icon" />
                {reading_time.text}
              </span>
            </div>
            <div className="text-left mt-4">
              <Link to="/" className="btn btn-link pl-4">
                <FaArrowLeft /> Back Home
              </Link>
              <Link to="/articles" className="btn btn-link pl-4 float-right">
                All Articles <FaArrowRight />
              </Link>
            </div>
          </header>
          <Img fluid={article.thumbnailImage.fluid} />
          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: article.body.childMarkdownRemark.html,
            }}
          ></div>
          <footer className="post-footer">
            <div className="row share-on-social-media ml-0 mt-4">
              <h6>Share : </h6>
              <SocialMediaShareList url={article_url} text={article.title} />
            </div>
            <div className="link-box">
              <CopyToClipboard onCopy={this.onCopy} text={article_url}>
                <button
                  className="clip-board btn btn-default"
                  data-toggle="tooltip"
                  data-placement="top"
                  title={tooltip_title}
                >
                  <span className="clip-board-icon">
                    <FaClone />
                  </span>
                  {this.state.copied ? (
                    <span className="text-info px-1">Copied!</span>
                  ) : (
                    <span className="px-1">{article_url}</span>
                  )}
                </button>
              </CopyToClipboard>
            </div>
          </footer>
        </article>
      </Container>
    )
  }
}
