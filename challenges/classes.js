class CuboidMakerClass {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }
    surfaceArea() {
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
    }
    volume() {
        return this.length * this.width * this.height;
    }
}

const classCuboid = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(classCuboid.volume()); // 100
console.log(classCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.