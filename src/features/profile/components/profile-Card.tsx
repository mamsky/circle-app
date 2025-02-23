import { Avatar } from '@/components/ui/avatar';
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field } from '@/components/ui/field';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

const ProfileCard = () => {
  return (
    <Box>
      <Box my={4} pos="relative">
        <Image
          h="150px"
          rounded="xl"
          w="100%"
          src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Paste%20Prosmana"
        />
        <Box
          pos="absolute"
          rounded="50%"
          bottom={{ base: '-25px', lg: '-50px' }}
          left={{ base: '15px', md: '25px', lg: '50px' }}
          border="5px solid black"
        >
          <Avatar
            w={{ base: '75px', lg: '100px' }}
            h={{ base: '75px', lg: '100px' }}
            name="Paste Prosmana"
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Paste%20Prosmana"
          />
        </Box>
        <Box
          pos="absolute"
          rounded="50%"
          bottom="-50px"
          right={{ base: '15px', md: '25px', lg: '50px' }}
        >
          <DialogRoot>
            <DialogTrigger asChild>
              <Button variant="outline" rounded={'xl'}>
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
              </DialogHeader>
              <DialogBody pb="4">
                <Stack gap="4">
                  <Box mb={10} pos="relative">
                    <Image
                      h="150px"
                      rounded="xl"
                      w="100%"
                      src="https://i.pinimg.com/736x/15/62/16/1562160506f3c9b88ff8ff45cbe11db1.jpg"
                    />
                    <Box
                      pos="absolute"
                      rounded="50%"
                      bottom={{ base: '-25px', lg: '-50px' }}
                      left={{ base: '15px', md: '25px', lg: '50px' }}
                      border="5px solid black"
                    >
                      <Avatar
                        w={{ base: '75px', lg: '100px' }}
                        h={{ base: '75px', lg: '100px' }}
                        name="Paste Prosmana"
                        src="https://img.freepik.com/premium-vector/cute-cat-illustration_806257-130.jpg"
                      />
                    </Box>
                  </Box>
                  <Field label="Name">
                    <Input placeholder="Name" />
                  </Field>
                  <Field label="username">
                    <Input placeholder="username" />
                  </Field>
                  <Field label="Bio">
                    <Textarea placeholder="Bio" />
                  </Field>
                </Stack>
              </DialogBody>
              <DialogFooter>
                <Button bg={'brand'} rounded={'full'}>
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </DialogRoot>
        </Box>
      </Box>
      <Box mt={20}>
        <Text textStyle="2xl">✨Paste Prosmana✨</Text>
        <Text color="gray">@paste</Text>
        <Text>picked over by the worms, and weird fishes</Text>
        <Flex my={2} gap={4}>
          <Flex gap={2} alignItems="center">
            <Text>321</Text>
            <Text color="gray">Following</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Text>321</Text>
            <Text color="gray">Followers</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProfileCard;
