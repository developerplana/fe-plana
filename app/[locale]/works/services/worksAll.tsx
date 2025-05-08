import axios from 'axios';

const getWorksAll = async () => {
  try {
    const response = await axios.get('/api/worksAll');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getWorksId = async (path: string | number) => {
  try {
    const response = await axios.get(`/api/works/${path}`);
    console.log("✅ getWorksPath response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error in getWorks for Path ${path}:`, error);
    throw error;
  }
};

const worksService = {
  getWorksAll,
  getWorksId,
};

export default worksService;
