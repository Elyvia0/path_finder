import axios from '../../app/config/axios';

export const analyticsApi = {
  get: async (params) => {
    const res = await axios.get('/analytics', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/analytics', data);
    return res.data;
  }
};
