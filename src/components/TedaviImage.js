import "./TedaviImage.css";

const TedaviImage = (props) => {
  return (
    <div>
      <img className="tedavi-image" alt={props.alt} src={props.src}></img>
      <p className="tedavi-image-text font-link">{props.text}</p>
    </div>
  );
};
export default TedaviImage;
