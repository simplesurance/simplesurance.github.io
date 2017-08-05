import React, { Component } from 'react'
import Main from './main'
import Author from '../components/Author'
import { colors } from '../helpers/stylesConfig'
import PrismStyles from '../static/vendor/prismstyles'

export default class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      username: this.props.children.props.ghUser

    }
  }

  componentDidMount () {
    this.requestAuthorData(this.state.username).then(data => {

      this.setState({ author: data })
    })
  }

  requestAuthorData = async (username) => {
    const response = await fetch(`//api.github.com/users/${username}`)
    return response.json()
  }

  render () {
    const { children } = this.props

    return (<Main>
      <script src="/static/vendor/prism.js"></script>
      <article className="postWrapper">
        { children }
      </article>
      <Author {...this.state.author} />
      <PrismStyles />
      <style global jsx>{`
        .postWrapper {
          width: 70vw;
          margin: 0 auto;
          padding: 2em 0 3em;
          line-height: 1.5;
        }

        .postWrapper h2 {
          text-align: center
        }

        .postWrapper h3 {
          padding-top: 1.5em;
        }

        .postWrapper p {
          word-wrap: break-word;
          -webkit-hyphens: auto;
          -ms-hyphens: auto;
          hyphens: auto;
          text-align: justify;
          text-indent: 2em;
        }

        .postWrapper a {
          color: ${colors.text.darkGrey};
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          transition: all 250ms linear;
        }

        .postWrapper a:focus,
        .postWrapper a:hover {
          color: ${colors.simpleOrange}
        }

        .postWrapper pre {
          width: 100%;
          margin: 2rem 0;
          box-sizing: border-box;
        }

        @media (min-width: 800px) {
          .postWrapper {
            width: 50vw;
          }
        }
      `}</style>
    </Main>)
  }
}
