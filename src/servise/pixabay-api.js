import axios from 'axios';

const API_KEY = '37105589-3d487ec0acc050f78cec264eb';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export const getGallery = async (query, page, perPage) => {
  const { data } = await instance.get('', {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });

  return data;
};
