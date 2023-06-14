import { Card, CircularProgress, Container, Typography } from '@mui/material'

const DetailSkeleton = () => {
  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          height: '60vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CircularProgress />
        <br />
        <Typography variant="h5" align="center" gutterBottom>
          Loading Post...
        </Typography>
      </Card>
    </Container>
  )
}

export default DetailSkeleton
