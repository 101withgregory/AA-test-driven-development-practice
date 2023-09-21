// Your code here
let chai = require('chai')
let expect = chai.expect;

let {returnsThree} = require('../problems/number-fun')
let {reciprocal} = require('../problems/number-fun')


describe('returnsThree',()=>{
    it('should return three',()=>{
        let res = returnsThree();
        expect(res).to.equal(3)
    })
})

describe('reciprocal', () => {
    context('with valid arguments', () => {
      it('should return the reciprocal of the number', () => {
        // Test case 1
        let res = reciprocal(5);
        expect(res).to.equal(0.2);
  
        // Test case 2
        res = reciprocal(2000);
        expect(res).to.equal(0.0005);
      });
    });
  
    context('with invalid arguments', () => {
      it('should throw a RangeError for arguments less than 1', () => {
        expect(() => reciprocal(0.5)).to.throw(RangeError, "The argument must be between 1 and 1,000,000.");
        expect(() => reciprocal(-10)).to.throw(RangeError, "The argument must be between 1 and 1,000,000.");
      });
  
      it('should throw a RangeError for arguments greater than 1,000,000', () => {
        expect(() => reciprocal(1000001)).to.throw(RangeError, "The argument must be between 1 and 1,000,000.");
        expect(() => reciprocal(2000000)).to.throw(RangeError, "The argument must be between 1 and 1,000,000.");
      });
    });
  });

  