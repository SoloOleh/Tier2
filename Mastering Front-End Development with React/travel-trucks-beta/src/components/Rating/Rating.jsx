import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./Rating.module.css";

const Rating = ({ rating, reviews, showStars = false }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i < fullStars ? "icon-star" : "icon-star-empty"}
          size={16}
          className={styles.star}
        />
      );
    }

    return stars;
  };

  return (
    <div className={styles.rating}>
      {showStars ? (
        <div className={styles.stars}>{renderStars()}</div>
      ) : (
        <Icon name="icon-star" size={16} className={styles.star} />
      )}
      <span className={styles.text}>
        {rating.toFixed(1)} ({reviews} Reviews)
      </span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  showStars: PropTypes.bool,
};

export default Rating;
