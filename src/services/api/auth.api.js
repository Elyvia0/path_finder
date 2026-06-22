import axios from '../../app/config/axios';

export const authApi = {
  get: async (params) => {
    const res = await axios.get('/auth', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/auth', data);
    return res.data;
  }
};
