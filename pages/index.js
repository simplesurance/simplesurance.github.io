import Main from '../layouts/main'
import Posts from '../components/Posts'
// import Repos from '../components/Repos'
import PostRequest from '../components/PostRequest'

const colors = {
  simpleBlue: 'rgb(23,140,211)',
  simpleGreen: 'rgb(84,172,55)',
  simpleOrange: 'rgb(228,109,0)'
}

export default () => (<Main>
  <Posts />
  <PostRequest />
</Main>)
