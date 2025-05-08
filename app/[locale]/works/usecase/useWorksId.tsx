import { useEffect,useState } from 'react';
import { worksAllService } from '../services';

const useWorksId = (path: string) => {
    const [worksData, setWorksData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      if (!path) return; // Prevent running if id is not provided
  
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await worksAllService.getWorksId(path);
          setWorksData(data);
        } catch (err) {
          console.error('Error fetching work by Path:', err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [path]);
  
    return { worksData, loading, error };
};
  
export default useWorksId;