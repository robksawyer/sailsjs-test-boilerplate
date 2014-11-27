'use strict';
/**
 * Test File: Testing User
 * File location: test/models/User.test.js
 */


var request = require('supertest'),
    expect = require('chai').expect,
    should = require('chai').should,
    assert = require('chai').assert;

describe('User', function userModel(){

 describe('to have', function(){

    it('attributes', function(done, User){
      User.find({id: 1}).exec(function(err, res){
        
        expect(res[0]).to.have.property('email');
        expect(res[0]).to.have.property('password');
        expect(res[0]).to.have.property('phone');
        expect(res[0]).to.have.property('emailConfirmationStatus');
        expect(res[0]).to.have.property('phoneConfirmationStatus');
        expect(res[0]).to.have.property('comments');
        expect(res[0]).to.have.property('posts');
        expect(res[0]).to.have.property('role');
        expect(res[0]).to.have.property('status');

        done();
      });
    });

  });
});