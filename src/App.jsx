import { Component } from 'react';

import './App.css';
import { getGallery } from './servise/pixabay-api';
import { Searchbar } from './components/Searchbar/Searchbar';

export class App extends Component {
  // componentDidMount() {
  //   getGallery();
  // }

  onSubmit = (value) => {
    getGallery(value);
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default App;
