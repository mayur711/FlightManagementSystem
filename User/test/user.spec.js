let chai=require('chai');
let chaiHttp=require('chai-http');
let server=require('../server');
let should = chai.should();
let mongoose = require("mongoose");
// let Flight = require('../Model/AdminModel');
// var should = require('chai').should();
// const should=require('should');
 const { response } = require('express');


chai.use(chaiHttp);

describe("Get Flights Details Accorfing to parameters Entered like From,To,Date",()=>{
    it("get flights required",(done)=>{
        let flight={
            From: "BLR",
            To: "MUM",
            Date:"2020-09-05"
        }
        chai.request('http://localhost:4000/user/getflight')
        .post("/")
        .send(flight)
        .end((err,res) =>{
            res.should.have.status(200);
            res.body.orders.should.have.property('FlightId');
                res.body.flight.should.have.property('FlightName');
                // res.body.orders.should.have.property('From');
                // res.body.orders.should.have.property('To');
                // res.body.orders.should.have.property('Date');
                // res.body.orders.should.have.property('price');
            done();
            
        });
    });
});
