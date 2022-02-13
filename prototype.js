'use strict'

function Robot() {
    this.name = 'Robot';
    this.purpose = 'i just work';
}
Robot.prototype.Work = function () {
    console.log('I`m ' + this.name + ', ' + this.purpose);
}

function CofeeRobot() {
    this.name = 'CofeeRobot';
    this.purpose = 'i just make cofee';
}
CofeeRobot.prototype = Object.create(Robot.prototype);
CofeeRobot.prototype.constructor = CofeeRobot;

function RobotDancer() {
    this.name = 'RobotDancer';
    this.purpose = 'i just dance';
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCooker() {
    this.name = 'RobotCoocker';
    this.purpose = 'i just cook';
}
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;

let robot = new Robot();
let cofeeRobot = new CofeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.Work();
cofeeRobot.Work();
robotDancer.Work();
robotCooker.Work();

console.log();

let robotArray = [new Robot, new CofeeRobot, new RobotDancer, new RobotCooker];
robotArray.forEach(robots => {
    robots.Work();
});