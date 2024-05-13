import { GetAllTaskProps } from '@/types/task';
import { useQuery } from '@tanstack/react-query';
import { taskKey } from '@/api/task/key.ts';
import { apiClient } from '@/api/apiClient.ts';

const useGetAllTasks = ({ page, limit, userId }: GetAllTaskProps) => {
  /*const query = useInfiniteQuery({
    queryKey: taskKey.getAllTask(limit,userId),
    queryFn: async ({ pageParam }) => {
      return await apiClient.get('/tasks', {
        params: {
          page: pageParam,
          limit,
        },
      }).then(res => res.data);
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages,lastPageParam) => {
      const totalPages = pages.flatMap(page => page.data);
      return totalPages?.length === lastPage?.results ? undefined : lastPageParam + 1;
    },
  });
  const totalTask = query.data?.pages.flatMap((page: any) => page?.data?.tasks);

  return {...query,totalTask}*/

  return useQuery({
    queryKey: taskKey.getAllTask(limit, userId, page),
    queryFn: async () => {
      return await apiClient
        .get('/tasks', {
          params: {
            page,
            limit,
          },
        })
        .then((res) => res.data);
    },
    staleTime: 500,
  });
};

export default useGetAllTasks;
