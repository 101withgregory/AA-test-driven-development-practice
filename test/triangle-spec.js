// Your code here
const chai = require('chai');
const expect = chai.expect;

const {Triangle} = require('../problems/triangle');
const {Isosceles} = require('../problems/triangle')
const {Scalene} = require('../problems/triangle')
const {RightTriangle} = require('../problems/triangle')
const {Equilateral} = require('../problems/triangle')

describe('Triangle', () => {
  describe('constructor', () => {
    it('should create a new instance with the side1, side2, and side3 properties', () => {
      const triangle = new Triangle(3, 4, 5);

      // Check if properties exist on the instance
      expect(triangle).to.have.property('side1');
      expect(triangle).to.have.property('side2');
      expect(triangle).to.have.property('side3');

      // Check if properties are set correctly
      expect(triangle.side1).to.equal(3);
      expect(triangle.side2).to.equal(4);
      expect(triangle.side3).to.equal(5);
    });
  });

  describe('getPerimeter', () => {
    it('should return the perimeter of the Triangle instance', () => {
      const triangle = new Triangle(3, 4, 5);
      const perimeter = triangle.getPerimeter();

      expect(perimeter).to.equal(12); // perimeter = 3 + 4 + 5 = 12
    });
  });

  describe('hasValidSideLengths', () => {
    it('should return true if the Triangle instance has valid side lengths', () => {
      const validTriangle = new Triangle(3, 4, 5);
      const isValid = validTriangle.hasValidSideLengths();

      expect(isValid).to.be.true;
    });

    it('should return false if the Triangle instance has invalid side lengths', () => {
      const invalidTriangle = new Triangle(1, 1, 10);
      const isValid = invalidTriangle.hasValidSideLengths();

      expect(isValid).to.be.false;
    });
  });

  describe('validate', () => {
    it('should add an isValid property to the Triangle instance with value true for a valid triangle', () => {
      const validTriangle = new Triangle(3, 4, 5);
      validTriangle.validate();

      expect(validTriangle.isValid).to.be.true;
    });

    it('should add an isValid property to the Triangle instance with value false for an invalid triangle', () => {
      const invalidTriangle = new Triangle(1, 1, 10);
      invalidTriangle.validate();

      expect(invalidTriangle.isValid).to.be.false;
    });
  });

  
  describe('getValidTriangles', () => {
    it('should return an array of valid triangles', () => {
      const triangle1 = new Triangle(3, 4, 5);
      const triangle2 = new Triangle(1, 1, 10);
      const triangle3 = new Triangle(6, 8, 10);
      const triangle4 = new Triangle(5, 5, 5);

      triangle1.validate();
      triangle2.validate();
      triangle3.validate();
      triangle4.validate();

      const validTriangles = Triangle.getValidTriangles(
        triangle1,
        triangle2,
        triangle3,
        triangle4
      );

      expect(validTriangles).to.have.lengthOf(3);
      expect(validTriangles).to.include.members([triangle1, triangle3, triangle4]);
    });

    it('should return an empty array if no valid triangles are present', () => {
      const triangle1 = new Triangle(1, 1, 10);
      const triangle2 = new Triangle(2, 3, 6);

      triangle1.validate();
      triangle2.validate();

      const validTriangles = Triangle.getValidTriangles(triangle1, triangle2);

      expect(validTriangles).to.be.an('array').that.is.empty;
    });
  });
});


//SCALENE TEST SPECS

describe('Scalene', () => {
    describe('constructor', () => {
      it('should initialize a Scalene instance with side lengths and isValidTriangle property', () => {
        const scalene = new Scalene(4, 5, 6);
  
        expect(scalene).to.have.property('side1', 4);
        expect(scalene).to.have.property('side2', 5);
        expect(scalene).to.have.property('side3', 6);
        expect(scalene).to.have.property('isValidTriangle', true);
      });
    });
  
    describe('isScalene', () => {
      it('should return true for a valid scalene triangle', () => {
        const scalene = new Scalene(4, 5, 6);
        const isScalene = scalene.isScalene();
  
        expect(isScalene).to.be.true;
      });
  
      it('should return false for an invalid scalene triangle', () => {
        const scalene = new Scalene(4, 4, 6);
        const isScalene = scalene.isScalene();
  
        expect(isScalene).to.be.false;
      });
    });

    describe('validate', () => {
        it('should add isValidScalene property with correct value for a valid scalene triangle', () => {
          const scalene = new Scalene(4, 5, 6);
          scalene.validate();
    
          expect(scalene).to.have.property('isValidScalene', true);
        });
    
        it('should add isValidScalene property with correct value for an invalid scalene triangle', () => {
          const scalene = new Scalene(4, 4, 6);
          scalene.validate();
    
          expect(scalene).to.have.property('isValidScalene', false);
        });
    
        it('should override the validate() method of the Triangle class', () => {
          const scalene = new Scalene(4, 5, 6);
    
          expect(scalene.validate).to.not.equal(Triangle.prototype.validate);
        });
      });

      describe('Isosceles', () => {
  describe('validate', () => {
    it('should add isValidIsosceles property with correct value for a valid isosceles triangle', () => {
      const isosceles = new Isosceles(5, 5, 6);
      isosceles.validate();

      expect(isosceles).to.have.property('isValidIsosceles', true);
    });

    it('should add isValidIsosceles property with correct value for an invalid isosceles triangle', () => {
      const isosceles = new Isosceles(4, 5, 6);
      isosceles.validate();

      expect(isosceles).to.have.property('isValidIsosceles', false);
    });

    it('should override the validate() method of the Triangle class', () => {
      const isosceles = new Isosceles(5, 5, 6);

      expect(isosceles.validate).to.not.equal(Triangle.prototype.validate);
    });
  });

  describe('isIsosceles', () => {
    it('should return true for a valid isosceles triangle', () => {
      const isosceles = new Isosceles(5, 5, 6);
      const result = isosceles.isIsosceles();

      expect(result).to.be.true;
    });

    it('should return false for an invalid isosceles triangle', () => {
      const isosceles = new Isosceles(4, 5, 6);
      const result = isosceles.isIsosceles();

      expect(result).to.be.false;
    });
  });
});
  });

  //RIGHT ANGLE AND EQUILATERAL SPECS
  describe('Right Triangle (Right)', () => {
    describe('constructor', () => {
      it('should create a new instance with the side lengths', () => {
        const right = new RightTriangle(3, 4, 5);
  
        expect(right).to.have.property('side1', 3);
        expect(right).to.have.property('side2', 4);
        expect(right).to.have.property('side3', 5);
      });
    });
  
    describe('validate', () => {
      it('should return true for a valid right triangle', () => {
        const right = new RightTriangle(3, 4, 5);
        right.validate();
  
        expect(right.isValidTriangle).to.be.true;
      });
  
      it('should return false for an invalid right triangle', () => {
        const right = new RightTriangle(2, 3, 4);
        right.validate();
  
        expect(right.isValidTriangle).to.be.false;
      });
  
      it('should override the validate() method of the Triangle class', () => {
        const right = new RightTriangle(3, 4, 5);
  
        expect(right.validate).to.not.equal(Triangle.prototype.validate);
      });
    });
  });
  
  describe('Equilateral Triangle (Equilateral)', () => {
    describe('constructor', () => {
      it('should create a new instance with the side length', () => {
        const equilateral = new Equilateral(5);
  
        expect(equilateral).to.have.property('side1', 5);
        expect(equilateral).to.have.property('side2', 5);
        expect(equilateral).to.have.property('side3', 5);
      });
    });
  
    describe('validate', () => {
      it('should return true for a valid equilateral triangle', () => {
        const equilateral = new Equilateral(5);
        
  
        expect(equilateral.isValidTriangle).to.be.true;
      });
  
      it('should return false for an invalid equilateral triangle', () => {
        const equilateral = new Equilateral(4);
      
  
        expect(equilateral.isValidTriangle).to.be.true;
      });
  
      it('should override the validate() method of the Triangle class', () => {
        const equilateral = new Equilateral(5);
  
        expect(equilateral.validate).to.not.equal(Triangle.prototype.validate);
      });
    });
  });