const isValidRow = row => {
  const expectedProperties = ['file', 'text', 'number', 'hex']
  const actualProperties = Object.keys(row)

  // Check that all expected properties are present
  if (
    !expectedProperties.every(property => actualProperties.includes(property))
  ) {
    return false
  }

  // Check that there are no extra properties
  if (actualProperties.length !== expectedProperties.length) {
    return false
  }

  return true
}

module.exports = isValidRow
