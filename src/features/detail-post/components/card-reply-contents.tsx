import { Avatar } from '@/components/ui/avatar';
import { Reply } from '@/types/post-data-type';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

interface CardReplyPost {
  replyData: Reply;
}

const CardReplyContents = ({ replyData }: CardReplyPost) => {
  return (
    <Box p={2} borderY="1px solid" borderColor={'gray'}>
      <Flex gap={2}>
        <Avatar name={replyData.user.fullName} src={replyData.user.avatarUrl} />
        <Flex direction={'column'}>
          <Flex gap={2}>
            <Text>{replyData.user.fullName}</Text>
            <Text color="gray">@{replyData.user.username}</Text>
            <Text color="gray">{replyData.createdAt.getHours()}h</Text>
          </Flex>
          <Text>{replyData.content}</Text>
          <Flex my={2} gap={4}>
            <Text display="flex" alignItems="center" gap={2}>
              <FaHeart /> {replyData.likesCount}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardReplyContents;
