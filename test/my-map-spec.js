const chai = require('chai');
const spies = require('chai-spies');
const { myMap } = require('../problems/my-map');

chai.use(spies);
const expect = chai.expect;

describe('myMap', () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('should return a new array with the result of applying the callback to each element', () => {
    const callback = (el) => el * 2;
    const result = myMap(arr, callback);

    expect(result).to.deep.equal([2, 4, 6]);
  });

  it('should not mutate the original array', () => {
    const callback = (el) => el * 2;
    const originalArr = [...arr];
    myMap(arr, callback);

    expect(arr).to.deep.equal(originalArr);
  });

  it('should not call the built-in Array.map method', () => {
    const callback = (el) => el * 2;
    chai.spy.on(Array.prototype, 'map');
    myMap(arr, callback);

    expect(Array.prototype.map).to.not.have.been.called();
  });

  it('should invoke the callback once for each element in the array', () => {
    const callback = chai.spy((el) => el * 2);
    myMap(arr, callback);

    expect(callback).to.have.been.called.exactly(arr.length);
  });
});
