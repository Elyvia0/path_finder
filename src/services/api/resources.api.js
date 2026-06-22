import axios from '../../app/config/axios';

export const resourcesApi = {
  get: async (params) => {
    const res = await axios.get('/resources', { params });
    return res.data;
  },
  post: async (data) => {
    const res = await axios.post('/resources', data);
    return res.data;
  }
};
