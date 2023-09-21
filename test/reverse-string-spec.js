// Your code here
let chai = require('chai');
const expect = chai.expect;

let reverseString = require('../problems/reverse-string')

describe('reverseString' ,function(){
    it('should return a string in reverse',function(){
        let string = 'fun';
        let res = reverseString(string)
        expect(res).to.equal('nuf')
    });
    it("should throw a TypeError when the input is not a string", function () {
        const input = 123;
        expect(() => reverseString(input)).to.throw(TypeError);
      });
})