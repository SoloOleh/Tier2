export default function ImageCard({ image, onImageClick }) {
  const { urls, alt_description } = image;
  return (
    <div onClick={() => onImageClick(image)}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
}
