import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { useGetAllPostsQuery } from 'app/services/postApi'
import PostCard from 'components/Post/PostCard'
import PostError from 'components/Post/PostError'
import PostSkeleton from 'components/Post/PostSkeleton'
import { Link } from 'react-router-dom'

const Home = () => {
  const { data, isError, isLoading } = useGetAllPostsQuery()

  if (isLoading) return <PostSkeleton />
  if (isError) return <PostError />
  return (
    <Container maxWidth="xl">
      <Box my={3}>
        <Typography align="center" variant="h2" fontWeight="bold">
          All Posts
        </Typography>
        <Divider
          sx={{
            height: 3,
            borderRadius: 10,
            bgcolor: 'primary.main',
          }}
        />
        <Grid
          sx={{
            my: 0.5,
          }}
          container
          spacing={3}
          alignItems="stretch"
        >
          {data?.map((post) => (
            <Grid
              key={post.id}
              item
              xs={12}
              sm={6}
              md={4}
              component={Link}
              to={`/details/${post.id}`}
            >
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
