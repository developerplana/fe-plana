import axios from 'axios';

const getBlogsAll = async () => {
  try {
    const response = await axios.get('/api/blogsAll');
    console.log("ini data works service", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getBlogsId = async (id: string | number) => {
  try {
    const response = await axios.get(`/api/blogs/${id}`);
    console.log("✅ getBlogsId response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error in getBlogsId for ID ${id}:`, error);
    throw error;
  }
};

const worksService = {
    getBlogsAll,
    getBlogsId,
};

export default worksService;
