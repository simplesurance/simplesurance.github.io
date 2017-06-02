import Head from 'next/head'
import Repos from '../components/Repos'
import Footer from '../components/Footer'

const colors = {
  simpleBlue: 'rgb(23,140,211)',
  simpleGreen: 'rgb(84,172,55)',
  simpleOrange: 'rgb(228,109,0)'
}

export default () => (<div>
  <Head>
    <link rel="preload" href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" />
  </Head>
  <style jsx global>{`
    body {
      border: 0;
      padding: 0;
      margin: 0;
      font-family: 'Lato', sans-serif;
    }

    h1 {
      margin: 0;
    }
  `}</style>
  <style jsx>{`
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
  <header>
    <img src="/static/logo-white.svg" alt="Simplesurance logo"/>
    <h1>Simplesurance Tech</h1>
  </header>
  <Repos />
  <Footer />
</div>)
