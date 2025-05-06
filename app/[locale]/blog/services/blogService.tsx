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

const getBlogsId = async (slug: string | number) => {
  try {
    const response = await axios.get(`/api/blogs/detail/${slug}`);
    console.log("✅ getBlogsId response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error in getBlogsId for ID ${slug}:`, error);
    throw error;
  }
};

const worksService = {
    getBlogsAll,
    getBlogsId,
};

export default worksService;
