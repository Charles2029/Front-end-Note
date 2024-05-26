class Shape {

    name;
    sides;
    sideLength;

constructor(name,sides,sideLength){
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;

}
calcPerimeter(){
   
   const  perimeter =this.sides * this.sideLength;
   console.log(`This ${this.name}'s perimeter is ${perimeter}`);
}
  };

    class Square extends Shape {
        
        constructor(sideLength) {
          super("square", 4, sideLength);
        }
      
        calcArea() {
          const area = this.sideLength * this.sideLength;
          console.log(`Area of ${this.name}: ${area}`);
        }
      }
      
      // Create a Square instance
      const square = new Square(5);
      
      // Call calcPerimeter and calcArea methods
      square.calcPerimeter();
      square.calcArea();