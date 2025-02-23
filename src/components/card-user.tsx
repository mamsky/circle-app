import { Avatar } from '@/components/ui/avatar';
import { SearchUser } from '@/features/search/types/search-user-types';
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';

interface DataUser {
  data: SearchUser;
}

const CardUser = ({ data }: DataUser) => {
  return (
    <Box display="flex" justifyContent="space-between" my="10px">
      <Stack gap="8">
        <HStack gap="4">
          <Avatar size="xs" name={data.fullName} src={data.avatarUrl} />
          <Stack gap="0">
            <Text fontSize={'12px'}>{data.fullName}</Text>
            <Text color="fg.muted" fontSize={'12px'}>
              @{data.username}
            </Text>
          </Stack>
        </HStack>
      </Stack>
      <Button
        _hover={{ bg: 'black' }}
        bg="transparent"
        border="1px solid"
        h="50%"
        color="white"
      >
        {!data.isFollowed ? 'Follow' : 'Unfollow'}
      </Button>
    </Box>
  );
};

export default CardUser;
