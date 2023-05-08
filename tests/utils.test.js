const csvToJSON = require('../utils/csvToJSON')
const isValidRow = require('../utils/isValidRow')

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

describe('isValidRow', () => {
  it('should return true for a valid row', () => {
    const row = {
      file: 'test1.csv',
      text: 'rmIHxvQcUNmpIwAuKKrU',
      number: 13178252,
      hex: 'a4a8c1b2d6abcd1da2504baa9d5b0c63'
    }
    // eslint-disable-next-line no-unused-expressions
    expect(isValidRow(row)).to.be.true
  })

  it('should return false for a row with missing properties', () => {
    const row = {
      file: 'test2.csv',
      text: 'VNAWpWUXILyAciXmmZaxiPIxlia',
      number: 5
    }
    const result = isValidRow(row)
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.false
  })

  it('should return false for a row with extra properties', () => {
    const row = {
      file: 'test3.csv',
      text: 'eBaZBDcGZmLnhgfgtazNqfVVz',
      number: 26893511,
      hex: '0b0b03ef3326e09c6f8ebaa694a68d0a',
      extraProp: 'foobar'
    }
    const result = isValidRow(row)
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.false
  })
})
