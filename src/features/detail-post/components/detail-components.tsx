import FormPost from '@/features/dashboard/components/form-post';
import { postDatas } from '@/utils/fake-data/post-data';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CardPostContent from './card-post-content';
import CardReplyContents from './card-reply-contents';

const DetailComponents = () => {
  const { id } = useParams();
  const postData = postDatas.find((data) => data.id === id)!;

  return (
    <Box>
      <CardPostContent postData={postData} />
      <FormPost />
      {postData.replies?.map((reply) => (
        <CardReplyContents replyData={reply} />
      ))}
    </Box>
  );
};
export default DetailComponents;
