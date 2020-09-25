let chai=require('chai');
let chaiHttp=require('chai-http');
let server=require('../server');
let should = chai.should();
let mongoose = require("mongoose");
let Flight = require('../Model/AdminModel');
// var should = require('chai').should();
// const should=require('should');
 const { response } = require('express');


chai.use(chaiHttp);

describe("Get Flights",()=>{
    it("get all flights",(done)=>{
        chai.request('localhost:5000/admin/getallflights')
        .get("/")
        .end((err,response) =>{
            response.should.have.status(200);
            done();
            
        });
    });
});

describe('/POST book', () => {
    it('it should not add a flight without price field', (done) => {
        let flight = {
            FlightId: "B017",
            FlightName: "AirAsia",
            From: "BLR",
            To: "PUN",
            Date:"2020-08-29"
        }
      chai.request('http://localhost:5000/admin/addflight')
          .post('/')
          .send(flight)
          .end((err, response) =>{
                response.should.have.status(500);
                response.body.should.have.property('error');
                 response.body.error.errors.should.have.property('price');
                response.body.error.errors.price.should.have.property('kind').eql('required');
            done();
          });
    });

    it('it should Add a Flight ', (done) => {
        let flight = new Flight({
            FlightId: "B017",
            FlightName: "AirAsia",
            From: "BLR",
            To: "PUN",
            Date:"2020-08-29",
            price:"5000"
        })
        chai.request('localhost:5000/admin/addflight')
        .post('/')
          .send(flight)
          .end((err, res) => {
                res.should.have.status(201);
                // res.body.should.be.a('object');
                res.body.should.have.property('message').eql("Flight Added successfully");
                res.body.createdProduct.should.have.property('FlightId');
                res.body.createdProduct.should.have.property('FlightName');
                res.body.createdProduct.should.have.property('From');
                res.body.createdProduct.should.have.property('To');
                res.body.createdProduct.should.have.property('Date');
                res.body.createdProduct.should.have.property('price');
            done();
          });
    });
});

describe('/DELETE/:id book', () => {
    it('it should DELETE a book given the id', (done) => {
              chai.request("localhost:5000/admin/deleteflight/B015")
               .delete('/')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.Deleted.should.have.property('message').eql('Order deleted');
                    // res.body.result.should.have.property('ok').eql(1);
                    // res.body.result.should.have.property('n').eql(1);
                done();
              });
        });
    });