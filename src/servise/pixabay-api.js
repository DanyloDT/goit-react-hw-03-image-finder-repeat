import axios from 'axios';

const API_KEY = '37105589-3d487ec0acc050f78cec264eb';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export const getGallery = async (query) => {
  const { data } = await instance.get('', {
    params: {
      q: query,
      page: 1,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  console.log(data);

  return data;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
