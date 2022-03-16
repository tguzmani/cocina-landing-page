import Types from '../../common/redux.types'

const articlesTypes = new Types('ARTICLES', [
  'READ_ALL',
  'READ_BY_CATEGORY',
]).createTypes()

export default articlesTypes
