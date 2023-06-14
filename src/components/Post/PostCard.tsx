import { Avatar, Box, Card, Typography } from '@mui/material'
import { PostCardPropsType } from 'types/PostType'

const PostCard = ({ post }: PostCardPropsType) => {
  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: 'primary.light',
        p: 2,
        transition: '0.3s ease-in-out',
        '& span': {
          fontWeight: 'bold',
        },
        '&:hover': {
          bgcolor: 'primary.main',
          transform: 'scale(1.05)',
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            color: 'primary.main',
            width: 60,
            height: 60,
            mb: 2,
            fontSize: 30,
          }}
        >
          {post.title.charAt(0).toUpperCase()}
        </Avatar>
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: 'text.secondary',
          }}
          gutterBottom
        >
          <span>Title:</span> {post.title}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        <span>Description:</span> {post.body}
      </Typography>
    </Card>
  )
}

export default PostCard
