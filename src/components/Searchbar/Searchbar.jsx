import { Component } from 'react';

export class Searchbar extends Component {
  state = { inputValue: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            value={this.state.inputValue}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
