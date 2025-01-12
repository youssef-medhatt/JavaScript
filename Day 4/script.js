var arr = [1, 2, 3, 4];
Array.prototype.avg = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i]; 
    }
    return sum / this.length;
}
console.log(arr.avg());


var obj1 = {

}
var obj2 = { message: 'This is a message' };

Object.prototype.toString = function () {
    if (this.message != undefined)
        return this.message;
    return "this is an object"

}
    
console.log(String(obj1));
console.log(String(obj2));


let vCount = 0;
const maxV = 50;
function Vehicle(type, speed) {
    if (vCount < maxV) vCount++;
    else {
     throw new Error("cant add more vehicles");
    }
    this.type = type;
    this.speed = speed;
}
Vehicle.prototype.start = function () {
    console.log("starting");
}
Vehicle.prototype.stop = function () {
    console.log("stopping");
}

function Car(type, speed) {
    Vehicle.call(this, type, speed);

}
Car.prototype.__proto__ = Vehicle.prototype;
Car.prototype.drive = function () {
    console.log("driving");
}


var car = new Car("honda", 100);
car.drive();
car.start();
car.stop();
var v = new Vehicle("veh", 111);
v.start();
// v.drive(); 

function isCar1(obj) {
    return obj instanceof Car;
}
function isCar2(obj) {
    var proto = Object.getPrototypeOf(obj);
    
    if (proto === Car.prototype) 
            return true;
    return false;
}
const car1 = new Car("hatchback", 120);
console.log(isCar1(car1));
console.log(isCar2(car1));
console.log(isCar2(obj1));
