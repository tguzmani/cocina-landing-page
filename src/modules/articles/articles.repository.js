import AxiosRepository from '../../common/axios.repository'

export default class ArticlesRepository extends AxiosRepository {
  constructor() {
    super('articles')
  }

  async readArticles() {
    return await super.get('/')
  }

  async readArticlesByCategory(category) {
    return await super.get(`?filter=${category}`)
  }
}
