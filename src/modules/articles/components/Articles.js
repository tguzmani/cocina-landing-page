import React from 'react'
import { useSelector } from 'react-redux'
import ArticleItem from './ArticleItem'
import ArticlesSkeleton from './ArticlesSkeleton'

import { Grid } from '@mui/material'

const Articles = () => {
  const { articles, loading } = useSelector(state => state.articles)

  if (loading) return <ArticlesSkeleton />

  return (
    <Grid container spacing={3}>
      {articles.map(article => (
        <Grid key={article.id} item lg={4}>
          <ArticleItem article={article} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Articles
