import articlesTypes from './articles.types'
import ArticlesRepository from './articles.repository'

const articlesRepository = new ArticlesRepository()

export const setLoading =
  (loading = true) =>
  dispatch =>
    dispatch({ type: articlesTypes.LOADING, payload: loading })

export const readArticles = () => async dispatch => {
  setLoading()(dispatch)

  try {
    const articles = await articlesRepository.readArticles()
    dispatch({ type: articlesTypes.READ_ALL, payload: articles })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: articlesTypes.ERROR,
      payload: error.response?.data.message,
    })
  }
}

export const readArticlesByCategory = category => async dispatch => {
  setLoading()(dispatch)

  try {
    const articles = await articlesRepository.readArticlesByCategory(category)
    dispatch({ type: articlesTypes.READ_BY_CATEGORY, payload: articles })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: articlesTypes.ERROR,
      payload: error.response?.data.message,
    })
  }
}
