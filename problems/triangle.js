// Your code here
class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    getPerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  
    hasValidSideLengths() {
      const { side1, side2, side3 } = this;
      return side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2;
    }
  
    validate() {
      this.isValid = this.hasValidSideLengths();
    }
  
    static getValidTriangles(...triangles) {
      let validTriangles = []
      for(const triangle of triangles){
        if(triangle.isValid === true){
          validTriangles.push(triangle)
        }
      }
      return validTriangles;
    }
  }
  
  class Scalene extends Triangle {
    constructor(side1, side2, side3) {
      super(side1, side2, side3);
      this.isValidTriangle = this.hasValidSideLengths();
      this.validate()
    }

    isScalene(){
      const {side1,side2,side3,isValidTriangle} = this;
      return isValidTriangle && side1 !== side2 && side2 !== side3 && side1 !== side3;
    }
  
    validate() {
      this.isValidScalene = this.isScalene()
    }
  }
  
  class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
      super(side1, side2, side3);
      this.validate();
    }

    isIsosceles(){
        const {side1,side2,side3} = this;
        return (side1 === side2 || side2 === side3 || side1 === side3)
    }
  
    validate() {
      super.validate();
      this.isValidIsosceles = this.isIsosceles()
    }
  }
  
  class RightTriangle extends Triangle {
    constructor(side1, side2, side3) {
      super(side1, side2, side3);
      this.validate();
    }
    
    isRightTriangle(){
      return this.isValid && (this.side1 ** 2 + this.side2 ** 2 === this.side3 ** 2 ||
        this.side1 ** 2 + this.side3 ** 2 === this.side2 ** 2 ||
        this.side2 ** 2 + this.side3 ** 2 === this.side1 ** 2)
    }

    validate() {
      super.validate();
      this.isValidTriangle = this.isRightTriangle();
    }
  }
  
  class Equilateral extends Triangle {
    constructor(side) {
      super(side, side, side);
      this.side = side;
      this.isValidTriangle = true;
      this.validate();
    }
    isEquilateral() {
      return this.isValidTriangle && this.side1 === this.side2 && this.side2 === this.side3;
    }
    
    validate() {
      super.validate();
      this.isValidTriangle = this.isEquilateral();
    }
  }
  
  module.exports = {
    Triangle,
    Scalene,
    Isosceles,
    RightTriangle,
    Equilateral,
  };
  