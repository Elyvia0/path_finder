import axios from '../../app/config/axios';

export const paymentApi = {
  get: async (params) => {
    const res = await axios.get('/payment', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/payment', data);
    return res.data;
  }
};
