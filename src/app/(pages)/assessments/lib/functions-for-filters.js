export function addFrom(values, filters) {
  const object = []

  values.filter(item => {
    for (let key in filters) {
      if (item.id === filters[key].id) {
        item['value'] = filters[key].value;
        object.push(item)
      }
    }
  })
  return object
}

export function removeFrom(values, filters) {
  for (let key in filters) {
    const index = values.findIndex(function (value) {
      return value.id === filters[key].id
    });
    if (index >= 0) {
      values.splice(index, 1)
    }
  }
  return values
}
