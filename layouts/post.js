import Main from './main'
const Post = ({ children }) => (<Main>
  <article className="postWrapper">
    { children }
  </article>
  <style jsx>{`
    .postWrapper {
      width: 70vw;
      margin: 0 auto;
      padding: 2em 0 3em;
    }
  `}</style>
</Main>)

export default Post
