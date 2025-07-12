import { useQuery } from '@tanstack/react-query';
import { getSuggestedTasks } from '../../api/suggestedTasks/suggestedTasks.ts';

export const useSuggestedTasks = () => {
  return useQuery({
    initialData: [],
    queryKey: ['getSuggestedTasks'],
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryFn: getSuggestedTasks,
  })
}
