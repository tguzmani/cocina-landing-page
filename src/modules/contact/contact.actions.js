import contactTypes from './contact.types'
import ContactRepository from './contact.repository'

const contactRepository = new ContactRepository()

export const setLoading =
  (loading = true) =>
  dispatch =>
    dispatch({ type: contactTypes.LOADING, payload: loading })

export const subscribeToNewsletter = () => async dispatch => {
  setLoading()(dispatch)

  try {
    await contactRepository.subscribeToNewsletter()
    dispatch({ type: contactTypes.SUBSCRIBE_TO_NEWSLETTER })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: contactTypes.ERROR,
      payload: error.response?.data.message,
    })
  }
}
