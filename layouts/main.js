import Head from 'next/head'
import Footer from '../components/Footer'
import { colors } from '../helpers/stylesConfig'

export default ({ children }) => (<div>
  <Head>
    <title>Simplesurance Tech</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="preload" href="https://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet" />
  </Head>
  <header>
    <img src="/static/logo-white.svg" alt="Simplesurance logo"/>
    <h1>Simplesurance Tech</h1>
  </header>
  <main>
    { children }
  </main>
  <Footer />
    <style jsx global>{`
    body {
      border: 0;
      padding: 0;
      margin: 0;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      background-color: #fefefe;
      color: #333;
      font-size: 22px;
    }

    h1 {
      margin: 0;
    }
  header {
    background-color: ${colors.simpleBlue};
    height: 15rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: white;
  }
  `}</style>
</div>)
