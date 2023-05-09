/**
 * Checks if a given row object is valid by verifying if it contains all expected properties and no extra ones.
 *
 * @param {Object} row - The row object to validate.
 * @returns {boolean} - Returns `true` if the row is valid, otherwise `false`.
 */
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

export default isValidRow
