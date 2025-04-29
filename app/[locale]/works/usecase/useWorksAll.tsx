import { useEffect,useState } from 'react';
import { worksAllService } from '../services';

const useWorksAll = () => {
  const [worksData, setWorksData] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await worksAllService.getWorksAll();
        setWorksData(data);
      } catch (err) {
        console.log(err);
        setError(true); // Changed to set boolean instead of the error object
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { worksData, loading, error };
};
  
  export default useWorksAll;
  