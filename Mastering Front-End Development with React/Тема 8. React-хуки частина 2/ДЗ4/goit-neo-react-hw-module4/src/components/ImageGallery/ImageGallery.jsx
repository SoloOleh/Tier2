import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
