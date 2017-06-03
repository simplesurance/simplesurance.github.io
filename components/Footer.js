import { Github } from './socialMedia'
export default () => (<div>
    <nav className="socialNav">
      <Github />
    </nav>
    <footer>
      <p>
      crafted with <strong className="love"><span className="heart"></span></strong> by the Simplesurance crew
      </p>
    </footer>
    <style jsx>{`
        .socialNav {
          padding: .5rem 0;
          text-align: center;
          background-color: rgb(200,200,200);
        }

        footer {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          padding: 1rem 0;
          background-color: rgb(230,230,230);
        }

        p {
          display: flex;
          flex-flow: row;
          justify-content: center;
          align-items: center;
        }

        .love {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .love::before {
          content: "${'{'}";
          padding-left: .5em;
          padding-right: .2em;
        }

        .love::after {
          content: "}";
          padding-left: .2em;
          padding-right: .5em;
        }

        .heart {
          font-size: 1.5em;
          animation: beating-heart 1s alternate linear infinite;

        }
        .heart::before {
          content: '❤';
          color: rgb(190,70,90)
        }

        @keyframes beating-heart {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.2);
          }
        }
      `}
    </style>
  </div>)
