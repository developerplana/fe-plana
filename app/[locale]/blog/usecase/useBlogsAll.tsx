import { useEffect,useState } from 'react';
import { blogsAllService } from '../services';

const useWorksAll = () => {
  const [blogsData, setBlogsData] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await blogsAllService.getBlogsAll();
        setBlogsData(data);
      } catch (err) {
        console.log(err);
        setError(true); // Changed to set boolean instead of the error object
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { blogsData, loading, error };
};
  
  export default useWorksAll;
  