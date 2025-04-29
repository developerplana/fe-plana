import axios from 'axios';

const getWorksAll = async () => {
  try {
    const response = await axios.get('/api/worksAll'); // use full path if needed
    console.log("ini data works service", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getWorksAll };
