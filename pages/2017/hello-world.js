import Post from '../../layouts/post'
import { Markdown } from 'react-showdown'

const content = `## Hello World.
\`\`\`
console.log(foo)

      <header>

blslals
\`\`\`
    You can write _markdown_ as you'd like.

;aklsmd;as    lkmsdlkmasd pskd;lksd   ;lks;dlkasd







slkm
`

export default () => <Post><Markdown markup={ content }></Markdown></ Post>
