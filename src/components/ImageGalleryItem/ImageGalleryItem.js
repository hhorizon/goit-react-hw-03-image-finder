import propTypes from "prop-types";
import { Item, Image } from "./ImageGalleryItem.style";

const ImageGalleryItem = ({ photo, index, onClick }) => {
  return (
    <Item>
      <Image
        src={photo.webformatURL}
        alt={photo.tags}
        onClick={() => onClick(index)}
      />
    </Item>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  photo: propTypes.object,
  index: propTypes.number,
  onClick: propTypes.func,
};
