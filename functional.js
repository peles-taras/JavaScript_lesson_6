'use strict'

function Robot() {
    let self = this;
    self.name = 'Robot';
    self.purpose = 'i just work';
    self.Work = function () {
        console.log('I`m ' + self.name + ', ' + self.purpose);
    }
}

function CofeeRobot() {
    Robot.call(this);
    this.name = 'CofeeRobot';
    this.purpose = 'i just make cofee';
}

function RobotDancer() {
    Robot.call(this);
    this.name = 'RobotDancer';
    this.purpose = 'i just dance';
}

function RobotCooker() {
    Robot.call(this);
    this.name = 'RobotCoocker';
    this.purpose = 'i just cook';
}

let robot = new Robot();
let cofeeRobot = new CofeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.Work();
cofeeRobot.Work();
robotDancer.Work();
robotCooker.Work();

console.log()

let robotArray = [new Robot, new CofeeRobot, new RobotDancer, new RobotCooker];

robotArray.forEach(robots => {
    robots.Work();
});