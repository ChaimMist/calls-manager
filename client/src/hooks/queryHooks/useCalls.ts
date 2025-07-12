import { useQuery } from '@tanstack/react-query';
import { getCallById, getCalls } from '../../api/calls/calls.ts';


export const useCalls = () => {
    return useQuery({
        initialData: [],
        queryKey: ['getCalls'],
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        queryFn: getCalls
    })
}

export const useCallById = (id?: string) => {
    return useQuery({
        initialData: null,
        queryKey: ['getCallById', id],
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        enabled: !!id,
        queryFn: () => getCallById(id)
    })
}
