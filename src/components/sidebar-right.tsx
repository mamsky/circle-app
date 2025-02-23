import { Avatar } from '@/components/ui/avatar';
import { useAuthStore } from '@/stores/auth.store';
import { searchUserDatas } from '@/utils/fake-data/user-search-data';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const CardUser = lazy(() => import('./card-user'));

const SidebarRight = () => {
  //
  const { pathname } = useLocation();

  return (
    <Box p={'40px 20px'}>
      {pathname != '/profile' && <BoxProfile />}

      <Box bg="white/10" p="2" borderRadius="10px" my="20px">
        <Text textStyle={'xl'}>Suggested for you</Text>
        {searchUserDatas.slice(0, 4).map((data) => (
          <Suspense key={data.id}>
            <CardUser data={data} />
          </Suspense>
        ))}
      </Box>
    </Box>
  );
};
export default SidebarRight;

const BoxProfile = () => {
  const user = useAuthStore((state) => state.user);

  if (!user || !user.profile) {
    return <Text>Loading....</Text>;
  }

  return (
    <Box bg={'white/10'} p={2} rounded={'xl'}>
      <Text textStyle={'2xl'} my={2}>
        My Profile
      </Text>
      <Box pos={'relative'}>
        <Image
          h="70px"
          rounded="xl"
          w="100%"
          src={
            user.profile.bannerUrl ||
            `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${user.profile.bannerUrl}`
          }
        />
        <Box
          pos="absolute"
          rounded="50%"
          bottom="-20px"
          left="20px"
          border="5px solid black"
        >
          <Avatar
            w="50px"
            h="50px"
            name={user.profile.fullName}
            src={
              user.profile.avatarUrl ||
              `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${user.profile.fullName}`
            }
          />
        </Box>
      </Box>
      <Text textStyle="xl" mt={5}>
        {user.profile.fullName}
      </Text>
      <Text textStyle="md" color={'white/60'}>
        @{user.username}
      </Text>

      <Text textStyle="md">{user.profile.bio}</Text>
      <Flex align={'center'} gap={2}>
        <Flex gap={1}>
          <Text>291</Text>
          <Text color={'white/60'}>Following</Text>
        </Flex>
        <Flex gap={1}>
          <Text>291</Text>
          <Text color={'white/60'}>Followers</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
