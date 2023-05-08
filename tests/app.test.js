const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("GET /v1/secret/files", () => {
  it("should return an array of files", function (done) {
    chai
      .request(app)
      .get("/v1/secret/files")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
        expect(res.body.files).to.be.an("array");
        done();
      });
  });
});

describe("GET /v1/secret/files/:filename", () => {
  it("should return file content on valid request", (done) => {
    const filename = "test2.csv";

    chai
      .request(app)
      .get(`/v1/secret/files/${filename}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.include("file,text,number,hex");
        done();
      });
  });

  it("should return error status and message on invalid request", (done) => {
    const filename = "nonexistent.csv";

    chai
      .request(app)
      .get(`/v1/secret/files/${filename}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.include("Not Found");
        done();
      });
  });
});
