import chai from 'chai'
import chaiHttp from 'chai-http'

import app from '../app.js'

chai.use(chaiHttp)
const expect = chai.expect

describe('GET /files/list', () => {
  it('should return an array of files', function (done) {
    chai
      .request(app)
      .get('/files/list')
      .end(function (_err, res) {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('object')
        expect(res.body.files).to.be.an('array')
        done()
      })
  })
})

describe('GET /files/:filename', () => {
  it('should return file content on valid request', done => {
    const filename = 'test2.csv'

    chai
      .request(app)
      .get(`/file/${filename}`)
      .end((_err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')
        expect(res.body).to.have.length.above(0)
        done()
      })
  })

  it('should return error status and message on invalid request', done => {
    const filename = 'nonexistent.csv'

    chai
      .request(app)
      .get(`/file/${filename}`)
      .end((_err, res) => {
        expect(res).to.have.status(404)
        expect(res.text).to.include('Not Found')
        done()
      })
  })
})
