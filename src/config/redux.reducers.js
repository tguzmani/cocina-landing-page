import { combineReducers } from 'redux'

import articles from '../modules/articles/articles.reducer'
import contact from '../modules/contact/contact.reducer'

export default combineReducers({ articles, contact })
