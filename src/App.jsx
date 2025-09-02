import { Component } from 'react';

import './App.css';
import { getGallery } from './servise/pixabay-api';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { Button } from './components/Button/Button';

const INITIAL_STATE = {
  images: [],
  query: '',
  page: 1,
  perPage: 12,
  showBtn: false,
  loading: false,
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      this.getData();
    }
  }

  getData = async () => {
    const { query, page, perPage } = this.state;
    this.setState({ loading: true });
    try {
      const data = await getGallery(query, page, perPage);
      if (data.totalHits === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      this.setState((prevState) => ({
        images: [...prevState.images, ...data.hits],
        showBtn: page < Math.ceil(data.totalHits / perPage),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };
  onHandleLoadBtn = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  onSubmit = (value) => {
    if (value === '') {
      return alert('Please fill out the search field!');
    }
    if (value === this.state.query && value !== '') {
      return alert('The search query has not been changed.');
    }
    this.setState({ ...INITIAL_STATE, query: value });
  };
  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.loading && <Loader />}
        {this.state.showBtn && (
          <Button onHandleLoadBtn={this.onHandleLoadBtn} />
        )}
      </div>
    );
  }
}

export default App;
