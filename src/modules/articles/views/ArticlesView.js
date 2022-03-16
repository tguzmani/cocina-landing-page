import React, { useEffect } from 'react'
import { readArticles } from '../articles.actions'
import { useSelector, useDispatch } from 'react-redux'
import Articles from '../components/Articles'
import ArticlesFilterPanel from '../components/ArticlesFilterPanel'

import { Container, Grid } from '@mui/material'
import Heading from './../../../layout/Heading'

const ArticlesView = () => {
  const dispatch = useDispatch()
  const { articles } = useSelector(state => state.articles)

  useEffect(() => {
    if (articles.length === 0) dispatch(readArticles())
  }, [])

  return (
    <Container>
      <Heading heading='Nuestros artículos' />
      <Grid container spacing={3} mt={4}>
        <Grid item lg={3}>
          <ArticlesFilterPanel />
        </Grid>
        <Grid item lg={9}>
          <Articles />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ArticlesView
