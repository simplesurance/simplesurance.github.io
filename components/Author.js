import { colors } from '../helpers/stylesConfig'

export default ({ avatar_url, name, blog, bio }) => (
  <div className="authorWrap">
    <img className="avatar" src={avatar_url} alt={name} />
    <section className="textWrap">
      <strong className="name">{name}</strong>
      <p className="bio">{bio}</p>
      <a className="website" href={blog} target="_blank">{blog}</ a>
    </section>

    <style jsx>{`
      .authorWrap {
        width: 40vw;
        height: 7rem;
        padding-bottom: 5rem;
        margin: 0 auto;
        overflow: hidden;
      }

      .avatar {
        float: left;
        max-height: 100%;
        max-width: 40%;
        border-radius: 50%;
      }

      .textWrap {
        float: left;
        height: 100%;
        margin-left: 2rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
        max-width: 40%;
      }
      .name {
        text-align: right;
        font-size: 2rem;
      }

      .website {
        display: block;
        text-align: right;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        color: ${colors.text.darkGrey};
        transition: all 250ms linear;
      }

      .website:focus,
      .website:hover {
        color: ${colors.simpleOrange}
      }
    `}</style>
  </div>
)
