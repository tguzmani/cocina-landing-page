import React, { useState } from 'react'
import {
  Paper,
  List,
  ListItemButton,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'
import { useDispatch } from 'react-redux'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { readArticlesByCategory, readArticles } from './../articles.actions'

const FilterPanel = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: 'rgba(149, 157, 165, 0.3) 0px 8px 24px',
}))

const ArticlesFilterPanel = () => {
  const dispatch = useDispatch()
  const categories = ['Todos', 'Productos', 'Recetas', 'Consejos']

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const handleReadByCategory = category => () => {
    setSelectedCategory(category)

    if (category !== 'Todos') {
      dispatch(readArticlesByCategory(category))
    } else {
      dispatch(readArticles())
    }
  }

  return (
    <FilterPanel>
      <List>
        {categories.map(category => (
          <ListItemButton
            key={category}
            onClick={handleReadByCategory(category)}
          >
            <ListItemText>
              <Typography
                variant='caption'
                color={selectedCategory === category ? 'primary' : null}
                sx={{ fontWeight: selectedCategory === category ? 700 : 400 }}
              >
                {category.toUpperCase()}
              </Typography>
            </ListItemText>
            {selectedCategory === category && (
              <ListItemIcon edge='end'>
                <ArrowForwardIcon color='primary' fontSize='small' />
              </ListItemIcon>
            )}
          </ListItemButton>
        ))}
      </List>
    </FilterPanel>
  )
}

export default ArticlesFilterPanel
