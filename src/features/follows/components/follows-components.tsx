import CardSkeleton from '@/features/search/skeleton/card-skeleton';
import { SearchUser } from '@/features/search/types/search-user-types';
import { searchUserDatas } from '@/utils/fake-data/user-search-data';
import { Box, Button, Flex } from '@chakra-ui/react';
import { lazy, Suspense, useState } from 'react';

const CardUser = lazy(() => import('@/components/card-user'));

const FollowsComponents = () => {
  const [data] = useState<SearchUser[]>(searchUserDatas);
  const [activeFilter, setActiveFilter] = useState<string>('followers');

  const filteredData =
    activeFilter === 'followers'
      ? data
      : data.filter((data) => data.isFollowed);

  return (
    <Box>
      <Flex gap={2}>
        {['followers', 'following'].map((filter, i) => (
          <Button
            onClick={() => setActiveFilter(filter)}
            key={i}
            w={'50%'}
            bg={'none'}
            color={'white'}
            borderBottom={activeFilter === filter ? '1px solid' : ''}
            borderBottomColor={activeFilter === filter ? 'brand' : ''}
          >
            {filter}
          </Button>
        ))}
      </Flex>

      {filteredData.map((datas) => (
        <Suspense key={datas.id} fallback={<CardSkeleton />}>
          <CardUser data={datas} />
        </Suspense>
      ))}
    </Box>
  );
};

export default FollowsComponents;
