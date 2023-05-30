import axios from 'axios';

const API_KEY = '15070975-6aac66cd3fa729614718982a3';
const API_URL = 'https://pixabay.com/api/';

export const getImages = async (searchText, page) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: {
        key: API_KEY,
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 12,
        safesearch: true,
        lang: 'en,fr',
      },
    });

    const hits = response.data.hits.map(item => ({
      id: item.id,
      tags: item.tags,
      webformatURL: item.webformatURL,
      largeImageURL: item.largeImageURL,
    }));

    return { ...response.data, hits };
  } catch (error) {
    throw new Error(error.message);
  }
};
