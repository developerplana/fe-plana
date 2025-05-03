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

const getWorksId = async (id: string | number) => {
  try {
    const response = await axios.get(`/api/works/${id}`);
    console.log("✅ getWorksId response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error in getWorksId for ID ${id}:`, error);
    throw error;
  }
};

const worksService = {
  getWorksAll,
  getWorksId,
};

export default worksService;
