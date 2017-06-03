export default ({name, html_url, description}) => {
  return (<li>
    <div className="block">
      <a className="repoName" href={html_url} target="_blank">{name}</a>
      <span className="repoDescription">{description}</span>
    </div>
    <style jsx>{`
      .block {
        flex: 1 15rem;
        margin: .5em 1em 0;
        width: 15rem;
        min-height: 5rem;
      }

      .repoName {
        font-size: 1.2rem;
        display: block;
        color: rgb(50,50,50);
        cursor: pointer;
      }

      .repoDescription {
        font-size: .8rem;
      }
    `}
    </style>
  </li>)
}
