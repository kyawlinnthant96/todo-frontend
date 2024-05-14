import useGetAllTasks from '@/api/task/useGetAllTasks.ts';
import { useAppSelector } from '@/store/hook.ts';
import { useSearchParams } from 'react-router-dom';

const useTaskListsHook = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { info } = useAppSelector((state) => state.auth);
  const localInfo = JSON.parse(localStorage.getItem("info"))
  const page = Number(searchParams.get('page'));
  const { data: totalTasks, isPending, isError } = useGetAllTasks({ limit: 10, page: page, userId: info?._id || localInfo?._id });
  // const queryClient = useQueryClient();
  // useEffect(() => {
  //   const nextPage = page + 1;
  //   queryClient.prefetchQuery({
  //     queryKey: taskKey.getAllTask(10, info._id, nextPage),
  //     queryFn: async () => {
  //       return await apiClient
  //         .get('/tasks', {
  //           params: {
  //             page: nextPage,
  //             limit: 10,
  //           },
  //         })
  //         .then((res) => res.data);
  //     },
  //   });
  // }, [page]);

  const handleNext = () => {
    if (page >= 1) {
      setSearchParams({ page: String(page + 1), limit: '10' });
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setSearchParams({ page: String(page - 1), limit: '10' });
    }
  };

  return {
    totalTasks,
    isPending,
    isError,
    handleNext,
    handlePrev,
  };
};

export default useTaskListsHook;
