import {
  Avatar,
  Box,
  Card,
  Chip,
  Container,
  Divider,
  Typography,
} from '@mui/material'
import { useGetPostQuery } from 'app/services/postApi'
import DetailSkeleton from 'components/Post/DetailSkeleton'
import PostError from 'components/Post/PostError'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useGetPostQuery(id as string)

  if (isLoading) return <DetailSkeleton />
  if (isError) return <PostError />
  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          my: 3,
          p: 3,
          '& span': {
            fontWeight: 'bold',
          },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            color: 'secondary.main',
            width: 60,
            height: 60,
            mb: 2,
            fontSize: 30,
          }}
        >
          {data?.title.charAt(0).toUpperCase()}
        </Avatar>
        <Box
          sx={{
            mb: 1,
          }}
        >
          <Chip
            label={`Post ID: ${data?.id}`}
            color="primary"
            variant="outlined"
            sx={{ mr: 1 }}
          />
          <Chip
            label={`User ID: ${data?.userId}`}
            color="primary"
            variant="outlined"
          />
        </Box>
        <Typography align="center" variant="h4">
          <span>Title:</span> {data?.title}
        </Typography>
        <Divider
          sx={{
            height: 3,
            borderRadius: 10,
            bgcolor: 'primary.main',
          }}
        />
        <Typography align="center" variant="h6">
          <span>Description:</span> {data?.body}
        </Typography>
      </Card>
    </Container>
  )
}

export default PostDetails
