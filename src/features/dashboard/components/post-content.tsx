import { api } from '@/hooks/api';
import { Post } from '@/types/post-data-type';
import { useQuery } from '@tanstack/react-query';
import CardPostContent from './card-post-content';
import { Box, Text } from '@chakra-ui/react';
import { SkeletonCard } from '@/utils/skeleton/card.skeleton';

const PostContent = () => {
  const {
    data: threads,
    isLoading,
    isError,
    failureReason,
  } = useQuery<Post[]>({
    queryKey: ['threads'],
    queryFn: async () => {
      const response = await api.get<{ data: Post[] }>('/threads');
      return response.data.data;
    },
  });

  return (
    <>
      {isError && <Text>{failureReason?.message}</Text>}
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <Box>
          {threads?.map((data) => (
            <CardPostContent key={data.id} postDatas={data} />
          ))}
        </Box>
      )}
    </>
  );
};

export default PostContent;
