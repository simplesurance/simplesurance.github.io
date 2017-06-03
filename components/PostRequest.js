export default () => (<aside className="wrap">
  <h3 className="section-title">Tailored Articles</h3>
  <p className="text">
    Check in our <a className="link" href="https://stackshare.io/simplesurance/simplesurance" target="_blank">stack</a> if there's any subject you wish us to write about.
  </p>
  <p className="text">
    If you find an interesting topic that is amongst our stack expertise, you can issue a post request and we will find someone in our crew with the right skillset to write about it!
  </p>
  <a className="buttonLink" href="https://github.com/simplesurance/simplesurance.github.io/issues/new?labels[]=post-request" target="_blank">Request Post</a>

  <style jsx>{`
    .wrap {
      background-color: rgb(70,70,70);
      color: rgb(240,240,240);
      padding: 2rem 0 5rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }

    .section-title {
      text-align: center;
      font-size: 2rem;
    }

    .text {
      width: 50%;
      text-align: center;
      font-size: 1.2rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .link {
      text-decoration: none;
      color: rgb(120, 240, 100);
    }

    .link:hover,
    .link:focus {
      border-bottom: 1px dashed rgb(120,240,100);
    }

    .buttonLink {
      text-decoration: none;
      margin-top: 2rem;
      padding: .5em 1em;
      border: solid 2px rgb(120,240,100);
      color: rgb(120,240,100);
      font-weight: 600;
      cursor: pointer;
      transition: all 300ms linear;
    }

    .buttonLink:hover,
    .buttonLink:focus {
      background-color: rgb(120,240,100);
      color: rgb(70,70,70);
    }


  `}</style>
</aside>)
