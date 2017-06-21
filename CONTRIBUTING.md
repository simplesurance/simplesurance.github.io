<details>
<summary><b>Creating an issue</b></summary>

Issues with Feature Requests, Post Requests or Bugs are always welcome.

In case of a bug, keep in mind to provide ways to reproduce the indicated behaviour as detailed as possible.
</details>

<details>
<summary><b>Coding</b></summary>

- create a new branch. E.g.:
```
git checkout -b feature/events-list-component
```
- make a PR (you can optionally suggest a Reviewer from within the org.
- on the PR provide ways to test or visualize your changes

> In case it is a bugfix, it is extremelly important to provide specific cases on how to reproduce the errors.
> Browser, device, user actions, ...

</details>

<details>
<summary><b>Writing an article</b></summary>

### Can I write?
At present, the Simplesurance Tech is a blog intended to Simplesurance personel to share their technical knowledge in an Open-Sourced way. That being said, **if you are a Simplesurance employee regardless of your Team we'd appreciate very much if you wrote an article!**

### Submiting
writing an article follows the same pattern as subimitting code. First, you create a `branch` with where you add corresponding files of your article, then you create a `pull request` that will be reviewed (grammar and content) by someone self-designated (though it is encouraged that you suggest a well suited reviewer for your content). Once you get an approval for your PR, it will be merged and published.

1. Clone this repository.
2. Create a new branch from `master`.

Branches should follow a specific naming pattern: `post/{post-title}`.

For example, the *Introduction to Javascript* post, would be written on the `post/introduction-to-js` branch.

3. Create a new file inside `/pages/{year}/` named after your post title.

Considering the current year to be 2017, the *Introduction to Javascript* would be written on the file:

```
/pages/2017/introduction-to-javascript
```
> this will define the URL of your post, keep it simple, keep it readable and SEO friendly. 😉

File Content:

```jsx
import Post from '../../layouts/post'
import { Markdown } from 'react-showdown'

const content = `
write your post here
`

export default () => <Post><Markdown markup={ content } ghUser="lopis"></Markdown></ Post>
```
4. Add your post to `./posts.json`.
5. Push your code and submit a `pull request`.
6. After submiting, go to your `pull request` page, point a `Reviewer` on the sidebar and add the label `post` to it.
</details>


Thank you. 🎉
