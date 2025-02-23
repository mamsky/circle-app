import { Avatar } from '@/components/ui/avatar';
import { Post } from '@/types/post-data-type';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineInsertComment } from 'react-icons/md';

interface CardDetailPost extends BoxProps {
  postData: Post;
}

const CardPostContent = ({ postData }: CardDetailPost) => {
  return (
    <Box mt={4} borderBottom={'1px solid'} borderColor={'gray'}>
      <Flex gap={4} mb={2}>
        <Avatar name={postData.user.fullName} src={postData.user.avatarUrl} />
        <Flex direction={'column'}>
          <Text>{postData.user.fullName}</Text>
          <Text>{postData.user.username}</Text>
        </Flex>
      </Flex>
      <Text>{postData.content}</Text>
      <Flex gap="4">
        <Text color="gray">11:32 PM</Text>
        <Text color="gray">Jul 26, 2024</Text>
      </Flex>
      <Flex my={2} gap={4}>
        <Text display="flex" alignItems="center" gap={2}>
          <FaHeart /> {postData.likesCount}
        </Text>
        <Text display="flex" alignItems="center" gap={2}>
          <MdOutlineInsertComment /> {postData.repliesCount}
        </Text>
      </Flex>
    </Box>
  );
};

export default CardPostContent;
