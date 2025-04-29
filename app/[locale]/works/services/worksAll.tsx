import axios from 'axios';

const getWorksAll = async () => {
  try {
    const response = await axios.get('/api/worksAll');
    console.log("ini data works service", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const worksService = {
  getWorksAll,
};

export default worksService;
