import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import ProfileCard from './profile-Card';
import ProfilePost from './profile-post';
import ProfileMedia from './profile-media';

const ProfileComponents = () => {
  const [buttonChose, setButtonChose] = useState<string>('AllPost');

  return (
    <Box>
      <ChakraLink mb={5}>
        <Link to={'/'}>
          <Flex align={'center'} gap={4}>
            <FaArrowLeft size={15} />
            <Text>Paste Prosmana</Text>
          </Flex>
        </Link>
      </ChakraLink>
      <ProfileCard />
      {['AllPost', 'Media'].map((button, i) => (
        <Button
          onClick={() => setButtonChose(button)}
          key={i}
          w={'50%'}
          bg={'none'}
          color={'white'}
          borderBottom={buttonChose === button ? '1px solid' : ''}
          borderBottomColor={buttonChose === button ? 'brand' : ''}
        >
          {button}
        </Button>
      ))}
      {buttonChose == 'AllPost' ? <ProfilePost /> : <ProfileMedia />}
    </Box>
  );
};

export default ProfileComponents;
