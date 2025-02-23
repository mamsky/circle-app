import Follow from '@/assets/Follow.svg';
import ReplyOutline from '@/assets/ReplyOutline.svg';
import { Avatar } from '@/components/ui/avatar';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProfilePost = () => {
  return (
    <Box borderY="1px solid" borderColor={'gray'}>
      <Flex gap={4} p={4}>
        <Avatar name="Paste" src="" />
        <Box>
          <Flex gap={2}>
            <Text>Paste</Text>
            <Text color={'gray'}>@paste</Text>
            <Text color={'gray'}>•</Text>
            <Text color={'gray'}>4h</Text>
          </Flex>
          <Link to={`/detail-post/`}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fugit voluptates, facilis iusto illo eius ipsum minima. Quibusdam
              maiores, unde nisi recusandae pariatur, dignissimos minima soluta
              voluptatibus doloribus non commodi.
            </Text>
          </Link>
        </Box>
      </Flex>
      <Flex ml={10}>
        <Button variant={'ghost'} display={'flex'} gap={'4px'}>
          <Image src={Follow} width={'20px'} />
          <Text>3</Text>
        </Button>
        <Button variant={'ghost'} display={'flex'} gap={'4px'}>
          <Image src={ReplyOutline} width={'20px'} />
          <Text>3</Text>
          <Text>Replies</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default ProfilePost;
