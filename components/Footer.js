export default () => (
  <footer>
    crafted with <strong className="love"><span className="heart"></span></strong> by the Simplesurance ITCrowd
    <style jsx>{`
        footer {
          height: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(230,230,230);
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
  </footer>)
