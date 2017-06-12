import Main from './main'
import { colors } from '../helpers/stylesConfig'
import PrismStyles from '../static/vendor/prismstyles'

const Post = ({ children }) => (<Main>
  <script src="/static/vendor/prism.js"></script>
  <article className="postWrapper">
    { children }
  </article>
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
      width: 120%;
      margin: 2rem 0;
      margin-left: -10%;
    }

    @media (min-width: 800px) {
      .postWrapper {
        width: 50vw;
      }
    }
  `}</style>
</Main>)

export default Post
