import Post from '../../layouts/post'
import md from 'markdown-in-js'

export default () => <Post>{ md`
## Hello World.

You can write _markdown_ as you'd like.
`}</ Post>
