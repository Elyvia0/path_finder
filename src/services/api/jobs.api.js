import axios from '../../app/config/axios';

export const jobsApi = {
  get: async (params) => {
    const res = await axios.get('/jobs', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/jobs', data);
    return res.data;
  }
};
