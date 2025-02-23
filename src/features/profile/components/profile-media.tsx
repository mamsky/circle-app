import { mediaImage } from '@/utils/fake-data/profile-media';
import { Box, Grid, GridItem, Image } from '@chakra-ui/react';

const ProfileMedia = () => {
  return (
    <Box mt={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap="3">
        {mediaImage.map((images, i) => (
          <GridItem key={i} colSpan={1}>
            <Image src={images.imageUrl} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfileMedia;
