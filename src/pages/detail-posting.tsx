import DetailComponents from '@/features/detail-post/components/detail-components';
import { Box, Link as ChakraLink, Flex, Text } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const DetailPosting = () => {
  return (
    <Box>
      <Flex gap={4} align={'center'}>
        <ChakraLink>
          <Link to={'/'}>
            <FaArrowLeft size={25} />
          </Link>
        </ChakraLink>
        <Text textStyle={'2xl'}>Status</Text>
      </Flex>
      <DetailComponents />
    </Box>
  );
};

export default DetailPosting;
