import { useEffect,useState } from 'react';
import { worksAllService } from '../services';

const useWorksAll = () => {
  const [worksData, setWorksData] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await worksAllService.getWorksAll();
        setWorksData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { worksData, loading, error };
};
  
  export default useWorksAll;
  