class Types {
  baseTypes = ['LOADING', 'ERROR']

  constructor(resource, types) {
    this.resource = resource
    this.types = [...this.baseTypes, ...types]
  }

  createTypes() {
    let thisResourceTypes = {}

    this.types.forEach(
      type =>
        (thisResourceTypes = {
          ...thisResourceTypes,
          [type]: `${this.resource}/${type}`,
        })
    )

    return thisResourceTypes
  }
}

export default Types
