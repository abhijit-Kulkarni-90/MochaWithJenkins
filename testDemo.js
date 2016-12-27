var expect = require('chai').expect;
var sum = require('./sum.js');

describe('Numerical Operation', function(){
  it('adds two numbers', function(done){
    expect(sum.add(2,2)).to.equal(4);
    done();
  });
});
