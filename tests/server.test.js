const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

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
        expect(res.body.files).to.deep.equal([
          "test1.csv",
          "test2.csv",
          "test3.csv",
          "test18.csv",
          "test4.csv",
          "test5.csv",
          "test6.csv",
          "test9.csv",
          "test15.csv",
        ]);
        done();
      });
  });
});
