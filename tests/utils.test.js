const csvToJSON = require('../utils/csvToJSON')
const chai = require('chai')
const expect = chai.expect

describe('csvToJSON', () => {
  it('should convert a CSV string to a JSON object', () => {
    const csv = `file,text,number,hex
      test2.csv,text,5,17a36b47833a23de8de288e6d1824fd8`

    const expectedJSON = {
      file: 'test2.csv',
      text: 'text',
      number: 5,
      hex: '17a36b47833a23de8de288e6d1824fd8'
    }

    const result = csvToJSON(csv)[0]
    expect(result).deep.equal(expectedJSON)
  })
})
