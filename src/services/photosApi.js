function fetchPhotos(searchQuery, currentPage) {
  return fetch(
    `https://pixabay.com/api/?key=24205372-949bb2d0c3f30747cb1e355dc&q=${searchQuery}&image_type=photo&page=${currentPage}&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error("No results were found for your search"));
  });
}

export default fetchPhotos;
