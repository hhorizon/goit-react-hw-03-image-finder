import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchPhotos from "./services/photosApi";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends React.Component {
  state = {
    searchQuery: "",
    photos: [],
    currentPage: 1,
    isLoading: false,
    isLoadingMoreBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.setState({ isLoading: true });

      fetchPhotos(searchQuery, currentPage)
        .then((nextPhotos) => {
          this.setState((prevState) => ({
            photos: [...prevState.photos, ...nextPhotos.hits],
            isLoadingMoreBtn: true,
          }));

          if (this.state.photos.length === 0) {
            toast.info("No results were found for your search.");
          }

          if (nextPhotos.totalHits === this.state.photos.length) {
            this.setState({ isLoadingMoreBtn: false });
          }
        })
        .catch((error) => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

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

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />

        {this.state.photos.length > 0 && (
          <ImageGallery
            photos={this.state.photos}
            onLoadMore={this.onLoadMore}
            isLoading={this.state.isLoading}
            isLoadingMoreBtn={this.state.isLoadingMoreBtn}
          />
        )}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
