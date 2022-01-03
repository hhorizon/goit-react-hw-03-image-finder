import { Component } from "react";
import propTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Form, Button, Input } from "./SearchBar.style";

class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  handleFormChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = this.state.inputValue.trim().toLowerCase();

    if (searchQuery === "") {
      toast.info("Enter your query.");
      return;
    }

    this.props.onSubmit(searchQuery);

    event.target.reset();
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BsSearch />
          </Button>

          <Input
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleFormChange}
          />
        </Form>
      </Header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: propTypes.func,
};
