'use strict'

//Car constructor
function Car(brand, model, colour){
	this.brand = brand;
	this.model = model;
	this.colour = colour;
}

//Car factory constructor
function CarFactory(brand, model, colour, numCars){
	this.brand = brand;
	this.model = model;
	this.colour = colour;
	this.numCars = numCars;
	this.completedCars = [];
}

//manufacture method
CarFactory.prototype.manufacture = function() {
	while(this.numCars != 0){
		this.completedCars.push(new Car(this.brand, this.model, this.colour));
		--this.numCars;
	}
}

//repaint method
CarFactory.prototype.repaint = function(newColour) {
	let length = this.completedCars.length;
	for(let i = 0; i < length; i++){
		this.completedCars[i].colour = newColour;
	}
}

//Simple Testing

let AudiFactory = new CarFactory("Audi", "TT", "red", 5);
console.log(AudiFactory);
console.log(AudiFactory.completedCars.length);
//manufacturing cars
AudiFactory.manufacture();
console.log(AudiFactory.completedCars.length);
//making sure the numCars is at 0
console.log(AudiFactory);
//paint the cars blue
AudiFactory.repaint("blue")
console.log(AudiFactory.completedCars[0].colour);