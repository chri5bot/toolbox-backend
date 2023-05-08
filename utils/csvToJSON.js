const isValidRow = require('./isValidRow')

/**
 * Convert a CSV string to a JSON array.
 * @param {string} csv - The CSV string to parse.
 * @returns {Array<Object>} An array of objects representing the CSV data in JSON format.
 */
const csvToJSON = csv => {
  const lines = csv.trim().split('\n')
  const headers = lines.shift().trim().split(',')
  const result = []

  for (const line of lines) {
    const data = {}
    const values = line.trim().split(',')
    for (let i = 0; i < headers.length; i++) {
      const value = isNaN(values[i]) ? values[i] : Number(values[i])
      if (value) {
        data[headers[i]] = value
      }
    }

    if (isValidRow(data)) {
      result.push(data)
    }
  }

  return result
}

module.exports = csvToJSON
