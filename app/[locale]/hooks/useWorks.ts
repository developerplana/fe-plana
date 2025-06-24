// hooks/useWorks.ts
import useSWR from 'swr';
import { worksAllService } from '../works/services';

export const useWorks = () => {
  const { data, error, isLoading } = useSWR('worksAll', worksAllService.getWorksAll);

  return {
    works: data?.data ?? [], // extract and fallback to empty array
    error,
    isLoading,
  };
};
