const Feature = ({ img, imgAlt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={img} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};
export default Feature;
