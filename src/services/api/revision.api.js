import axios from '../../app/config/axios';

export const revisionApi = {
  get: async (params) => {
    const res = await axios.get('/revision', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/revision', data);
    return res.data;
  }
};
