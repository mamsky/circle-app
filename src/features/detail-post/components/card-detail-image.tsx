import {
  Box,
  Grid,
  GridItem,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { postDatas } from '@/utils/fake-data/post-data';
import { Link, useParams } from 'react-router-dom';
import DetailComponents from './detail-components';

const CardDetailImage = () => {
  const { id } = useParams();
  const postData = postDatas.find((data) => data.id === id)!;
  return (
    <Box h={'100vh'}>
      <Grid templateColumns="repeat(6, 1fr)" gap="2">
        <GridItem minH={'100vh'} colSpan={4}>
          <Link to={'/'}>
            <ChakraLink
              pos={'absolute'}
              top={5}
              left={10}
              border={'1px solid'}
              px={3}
              py={'5px'}
              rounded={'full'}
            >
              X
            </ChakraLink>
          </Link>
          <Image maxHeight={'100vh'} maxWidth={'100%'} src={postData.images} />
        </GridItem>
        <GridItem
          colSpan={2}
          maxH={'100vh'}
          p={2}
          borderX={'1px solid'}
          borderColor={'gray'}
          overflowY={'auto'}
        >
          <DetailComponents />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CardDetailImage;
