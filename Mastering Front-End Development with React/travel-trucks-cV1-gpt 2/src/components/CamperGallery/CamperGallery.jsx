import PropTypes from "prop-types";
import styles from "./CamperGallery.module.css";

const CamperGallery = ({ gallery, name }) => {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      {gallery.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            src={image.original || image.thumb}
            alt={`${name} - Image ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

CamperGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string,
      original: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
};

export default CamperGallery;
