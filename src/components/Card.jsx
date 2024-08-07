import "./Card.css"; // Import the CSS file for styling

const Card = ({ link, name }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={link} alt={name} className="card-image" />
      </div>
      <div className="card-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
