import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Grid, Skeleton } from '@mui/material'

const ArticlesSleketon = () => {
  return (
    <Grid container spacing={3}>
      {[...Array(6).keys()].map(n => (
        <Grid key={uuidv4()} item lg={4}>
          <Skeleton
            animation='wave'
            variant='rectangular'
            width={270}
            height={338}
            sx={{ borderRadius: '10px' }}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ArticlesSleketon
