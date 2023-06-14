import {
  Box,
  Container,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material'

const PostSkeleton = () => {
  return (
    <Container maxWidth="xl">
      <Box my={3}>
        <Typography
          align="center"
          variant="h2"
          fontWeight="bold"
          sx={{
            color: 'text.secondary',
          }}
        >
          Loading Posts
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
          {[...new Array(18)].map((_, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <Skeleton
                animation="wave"
                sx={{
                  backgroundColor: 'lightgray',
                }}
                variant="rounded"
                width="100%"
                height={250}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default PostSkeleton
