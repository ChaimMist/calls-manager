import { useQuery } from '@tanstack/react-query';
import { getTags } from '../../api/tags/tags.ts';

export const useTags = () => {
  return useQuery({
    initialData: [],
    queryKey: ['getTags'],
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryFn: getTags
  })
}