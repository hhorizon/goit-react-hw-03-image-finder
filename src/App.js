import React from "react";
import { ToastContainer } from "react-toastify";

import fetchPhotos from "./services/photosApi";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

// import Modal from "./components/Modal/Modal";

class App extends React.Component {
  state = {
    photos: [],
    searchQuery: "",
    currentPage: 1,
    isLoading: false,
    loadingMoreBtn: false,
  };

  onSubmit = (searchQuery) => {
    this.setState({
      searchQuery,
      photos: [],
      currentPage: 1,
    });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ isLoading: true });

      fetchPhotos(this.state.searchQuery, this.state.currentPage)
        .then((nextPhotos) => {
          this.setState((prevState) => ({
            photos: [...prevState.photos, ...nextPhotos.hits],
            loadingMoreBtn: true,
          }));

          if (this.state.photos.length === 0) {
            console.log("По вашему запросу пусто");
          }

          if (nextPhotos.totalHits === this.state.photos.length) {
            this.setState({ loadingMoreBtn: false });
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
          this.setState({ isLoading: false });
          console.log(this.state.photos.length);
        });
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />

        {this.state.photos.length > 0 && (
          <ImageGallery
            photos={this.state.photos}
            onLoadMore={this.onLoadMore}
            isloading={this.state.isLoading}
            isloadingMoreBtn={this.state.loadingMoreBtn}
          />
        )}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
