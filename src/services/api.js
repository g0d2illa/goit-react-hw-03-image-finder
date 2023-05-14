// import axios from 'axios';

// export default class PixabayAPI {
//   #API_KEY = '33457552-f72b8f2d874a669f815eb264f';
//   #BASE_URL = 'https://pixabay.com/api/';

//   page = 1;
//   per_page = 12;
//   query = '';

//   async fetchPhotos() {
//     try {
//       const data = await axios.get(this.#BASE_URL, {
//         params: {
//           query: this.query,
//           page: this.page,
//           per_page: this.per_page,
//           key: this.#API_KEY,
//           image_type: 'photo',
//           orientation: 'horizontal',
//         },
//       });
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33457552-f72b8f2d874a669f815eb264f';

export const fetchImages = async (query, currentPage) => {
  try {
    const response = await fetch(
      `${BASE_URL}?${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна