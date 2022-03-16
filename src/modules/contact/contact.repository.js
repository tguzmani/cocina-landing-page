import AxiosRepository from '../../common/axios.repository'

export default class ContactRepository extends AxiosRepository {
  constructor() {
    super('newsletter')
  }

  async subscribeToNewsletter(contact) {
    return await super.post('/', contact)
  }
}
