import { useEffect,useState } from 'react';
import { blogsAllService } from '../services';

const useWorksId = (id: string) => {
    const [blogsData, setBlogsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      if (!id) return; // Prevent running if id is not provided
  
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await blogsAllService.getBlogsId(id)
          setBlogsData(data);
        } catch (err) {
          console.error('Error fetching work by ID:', err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);
  
    return { blogsData, loading, error };
};
  
export default useWorksId;