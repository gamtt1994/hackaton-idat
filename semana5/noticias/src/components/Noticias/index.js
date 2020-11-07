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
            <h3>Find out more</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
