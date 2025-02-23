import { Avatar } from '@/components/ui/avatar';
import { Post } from '@/types/post-data-type';
import Follow from '@/assets/Follow.svg';
import ReplyOutline from '@/assets/ReplyOutline.svg';
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Image,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface CardPostProps extends BoxProps {
  postDatas: Post;
}

const CardPostContent = ({ postDatas }: CardPostProps) => {
  return (
    <Box borderY="1px solid" borderColor={'gray'}>
      <Flex gap={4} p={4}>
        <Avatar name={postDatas.user.fullName} src={postDatas.user.avatarUrl} />
        <Box>
          <Flex gap={2}>
            <Text>{postDatas.user.fullName}</Text>
            <Text color={'gray'}>{postDatas.user.username}</Text>
            <Text color={'gray'}>•</Text>
            <Text color={'gray'}>
              {new Date(postDatas.createdAt).getHours()}h
            </Text>
          </Flex>
          {postDatas.images ? (
            <ChakraLink>
              <Link to={`/detail-image/${postDatas.id}`}>
                <Text>{postDatas.content}</Text>
                <Image src={postDatas.images} maxH={'200px'} />
              </Link>
            </ChakraLink>
          ) : (
            <Link to={`/detail-post/${postDatas.id}`}>
              <Text>{postDatas.content}</Text>
            </Link>
          )}
        </Box>
      </Flex>
      <Flex ml={10}>
        <Button variant={'ghost'} display={'flex'} gap={'4px'}>
          <Image src={Follow} width={'20px'} />
          <Text>{postDatas.likesCount}</Text>
        </Button>
        <Button variant={'ghost'} display={'flex'} gap={'4px'}>
          <Image src={ReplyOutline} width={'20px'} />
          <Text>{postDatas.repliesCount}</Text>
          <Text>Replies</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default CardPostContent;
