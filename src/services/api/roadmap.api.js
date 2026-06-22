import axios from '../../app/config/axios';

export const roadmapApi = {
  get: async (params) => {
    const res = await axios.get('/roadmap', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/roadmap', data);
    return res.data;
  }
};
