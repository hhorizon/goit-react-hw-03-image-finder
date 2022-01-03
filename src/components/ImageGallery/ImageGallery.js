import React from "react";
import propTypes from "prop-types";
import { bool } from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";
import { GalleryWrapper, List } from "./ImageGallery.style";

class ImageGallery extends React.Component {
  state = {
    selectedPhoto: null,
  };

  setSelectedPhoto = (index) => {
    this.setState({ selectedPhoto: this.props.photos[index] });
  };

  removeSelectedPhoto = () => {
    this.setState({ selectedPhoto: null });
  };

  render() {
    const { photos, isLoading, isLoadingMoreBtn, onLoadMore } = this.props;
    const { selectedPhoto } = this.state;

    return (
      <GalleryWrapper>
        {isLoading && <Loader />}

        <List>
          {photos.map((photo, index) => (
            <ImageGalleryItem
              key={index}
              photo={photo}
              index={index}
              onClick={this.setSelectedPhoto}
            />
          ))}
        </List>

        {isLoadingMoreBtn && <Button text="Load more" onClick={onLoadMore} />}

        {selectedPhoto && (
          <Modal closeModal={this.removeSelectedPhoto}>
            <img src={selectedPhoto.largeImageURL} alt={selectedPhoto.tags} />
          </Modal>
        )}
      </GalleryWrapper>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  photos: propTypes.arrayOf(propTypes.object),
  onLoadMore: propTypes.func,
  isLoading: bool,
  isloadingMoreBtn: bool,
};
