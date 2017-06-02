export default ({name, html_url, description}) => {
  return (<div>
    <style jsx>{`
      .block {
        margin-top: .5em;
      }
    `}
    </style>
    <div className="block">
      <a href={html_url} target="_blank">{name}</a>
      <span>{description}</span>
    </div>
  </div>)
}
