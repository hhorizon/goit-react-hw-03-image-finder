import React from "react";
import propTypes from "prop-types";
import { bool } from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
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
    const { photos, isloading, isloadingMoreBtn, onLoadMore } = this.props;
    const { selectedPhoto } = this.state;

    return (
      <GalleryWrapper>
        {isloading && <Loader />}

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

        {isloadingMoreBtn && (
          <Button text="Load more" onLoadMore={onLoadMore} />
        )}

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
  onClick: propTypes.func,
  onLoadMore: propTypes.func,
  isloadingMoreBtn: bool,
};
