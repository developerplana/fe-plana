import { useEffect,useState } from 'react';
import { blogsAllService } from '../services';

const useBlogSlug = (slug: string) => {
    const [blogsDataSlug, setBlogsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      if (!slug) return; // Prevent running if id is not provided
  
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await blogsAllService.getBlogsId(slug)
          setBlogsData(data);
        } catch (err) {
          console.error('Error fetching work by Slug:', err);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [slug]);
  
    return { blogsDataSlug, loading, error };
};
  
export default useBlogSlug;