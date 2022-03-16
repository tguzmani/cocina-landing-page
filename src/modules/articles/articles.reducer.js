import articlesTypes from './articles.types'

const initialState = {
  loading: true,
  articles: [],
}

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case articlesTypes.LOADING:
      return { ...state, loading: true }

    case articlesTypes.READ_ALL:
    case articlesTypes.READ_BY_CATEGORY:
      return { ...state, loading: false, articles: action.payload }

    default:
      return state
  }
}

export default articlesReducer
