// class Rectangle {
//     public width: number;
//     public height: number;
    
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
// }

// class AreaCalculator {
//     public calculate(rectangle: Rectangle): number {
//         return rectangle.width * rectangle.height;
//     }
// }




interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    public width: number;
    public height: number;
    
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    public radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class AreaCalculator {
    public calculate(shape: Shape): number {
        return shape.calculateArea();
    }
}
