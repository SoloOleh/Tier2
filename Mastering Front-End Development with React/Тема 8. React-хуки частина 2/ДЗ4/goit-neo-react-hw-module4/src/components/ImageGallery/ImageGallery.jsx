// import "./ImageGallery.module.css";

// import ImageCard from "../ImageCard/ImageCard";

// export default function ImageGallery({ images, onImageClick }) {
//   return (
//     <ul>
//       {images.map((image) => (
//         <li key={image.id}>
//           <ImageCard image={image} onImageClick={onImageClick} />
//         </li>
//       ))}
//     </ul>
//   );
// }

import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
