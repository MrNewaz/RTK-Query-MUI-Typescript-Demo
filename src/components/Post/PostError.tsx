import { Card, Container } from '@mui/material'

const PostError = () => {
  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          bgcolor: 'primary.light',
          p: 2,

          color: 'text.primary',
        }}
      >
        Failed to load data.
      </Card>
    </Container>
  )
}

export default PostError
