import React, { useState } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Fade,
} from '@mui/material'
import { styled } from '@mui/system'

import { Link } from 'react-router-dom'

const ArticleCard = styled(Card)(({ theme }) => ({
  boxShadow: 'rgba(149, 157, 165, 0.3) 0px 8px 24px',
}))

const ArticleItem = ({ article }) => {
  const [showActions, setShowActions] = useState(false)

  return (
    <ArticleCard
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        component='img'
        height='140'
        image={article.image}
        alt={article.title}
      />
      <CardContent sx={{ margin: '0.5rem' }}>
        <Typography
          gutterBottom
          variant='h5'
          color={showActions ? 'primary' : null}
          sx={{ transition: 'all 0.1s' }}
        >
          {article.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {article.content}
        </Typography>
      </CardContent>

      <Fade in={showActions} sx={{ margin: '1rem' }}>
        <CardActions>
          <a href={article.url}>Ver más</a>
        </CardActions>
      </Fade>
    </ArticleCard>
  )
}

export default ArticleItem
