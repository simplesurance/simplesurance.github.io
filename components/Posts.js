import { posts } from '../posts.json'
import Link from 'next/link'

export default () => (<div>
  <h3 className="sectionTitle">
    Posts
  </h3>
  <ul className="postList">
    {posts.map( ({id, title, date, image, author}) => (<li key={id} className="post">
      <span className="postDate">{date}</span>
      <img className="thumb" src={`./static/posts/${image}`} />
      <Link prefetch href={`${new Date(date).getFullYear()}/${id}`}>
        <a className="postTitle">{title}</a>
      </Link>
      <span>by {author}</span>
      </li>))}
  </ul>
  <style jsx>{`
    .sectionTitle {
      color: rgb(50,50,50);
      font-size: 2rem;
      text-align: center;
    }

    .thumb {
      width: 15rem;
    }

    .postList {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      width: 80vw;
      margin: 2.5rem auto;
    }

    .post {
      display: flex;
      max-width: 15em;
      flex-flow: column;
      align-items: center;
      margin-right: 1rem;
      margin-bottom: 2rem;
    }

    .postDate {
      padding-bottom: .5rem;
    }

    .postTitle {
      padding-top: .5rem;
      font-size: 1.2rem;
      text-align: center;
      text-decoration: none;
      color: rgb(50,50,50);
      cursor: pointer;
    }

    .postTitle:focus,
    .postTitle:hover {
      color: rgb(70,190,50);
    }
  `}</style>
</div>)
