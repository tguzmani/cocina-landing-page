import contactTypes from './contact.types'

const initialState = {
  loading: false,
}

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case contactTypes.LOADING:
      return { ...state, loading: true }

    case contactTypes.SUBSCRIBE_TO_NEWSLETTER:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default articlesReducer
