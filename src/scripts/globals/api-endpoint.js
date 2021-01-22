import CONFIG from './config.js';

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
