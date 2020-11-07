import { data } from "../../constants/data";
import "./noticias.css";
function Noticias() {
  return (
    <div className="Container">
      {data.map((news, index) => (
        <div className="Card" key={index}>
          <img src={news.image} alt={index} />
          <h2>{news.title}</h2>
          <p>{news.contents}</p>

          <div className="FooterCard">
            <h3>
              <svg
                className="ImgFooterCard"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Find out more
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
