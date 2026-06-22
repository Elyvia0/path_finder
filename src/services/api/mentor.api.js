import axios from '../../app/config/axios';

export const mentorApi = {
  get: async (params) => {
    const res = await axios.get('/mentor', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/mentor', data);
    return res.data;
  }
};
