<div align="center">
  <h1>simplesurance Tech</h1>
  <a href="https://standardjs.com">
    <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" />
  </a>
</div>

## Development
- Install your dependencies
```
  yarn
```
- Developing

```
  yarn dev
```
will serve your application on [localhost:3000](http://localhost:3000) and watch files for changes

## Deployment
<details>
<summary>branches/versioning</summary>
<p>
  Our development branch is <code>develop</code> but <b>gh-pages</b> serves from <code>master</code>, therefore we make use of <a href="https://gist.github.com/cobyism/4730490">git subtree</a>
</p>
</details>

<details>
  <summary>Building</summary>
  <p>
    Building is very straightforward, with a simple command the website gets generated on <code>/out</code> and ready for deployment
  </p>
  <pre><code>
  yarn export
  </code></pre>
</details>

<details>
  <summary>Serve locally static website</summary>
  <p>
    if for some reason you want to serve locally the generated website, it is possible with any local server, in case you don't have a weapon of choice in this matter, we recommend <a href="https://www.npmjs.com/package/http-server">http-server</a>
  </p>
  <pre><code>
    yarn global add http-server && cd simplesurance.github.io/out && http-server
  </code></pre>
</details>
