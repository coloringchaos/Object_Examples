/*
This P5 sketch reads incoming ASCII data
from the serial port of two different sensor values
then parses the data into separate variables

The incoming data from Arduino should be formatted as follows:

sensor1,sensor2
sensor1,sensor2
sensor1,sensor2
...

// By Arielle Hein
// Edited Oct 2019

*/


var serial; //variable to hold an instance of the serial port library
var portName = 'YOUR PORT'; //fill in with YOUR port

var inData; //a variable to store incoming data
var sensor1, sensor2; //variables for each of my incoming sensor values - name these whatever you want

function setup() {
  createCanvas(400, 300);

  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);

  //open our serial port
  serial.open(portName);
}

function draw() {
  background('plum');
  noStroke();
  var circleSize = 50;

  //use incoming sensor data to draw something to the screen
  //be sure to map your sensor range appropriately!!

  //map the slider to move the ellipse across the screen
  var slider = map(sensor2, 0, 1023, 0+circleSize/2, width-circleSize/2);

  //one sensor value will change the fill
  fill(map(sensor1, 0, 1023, 255, 0));

  ellipse(slider, height/2, circleSize);

}


//all my callback functions here:
//callback functions are useful for giving feedback
function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

//THIS IS WHERE WE ACTUALLY RECEIVE DATA!!!!!!
//make sure you're reading data based on how you're sending from arduino
function serialEvent(){
  //THIS READS BINARY - serial.read reads from the serial port, Number() sets the data type to a number
	// inData = Number(serial.read());  //reads data as a number not a string

  //THIS READS ASCII
  inData = serial.readLine(); //read until a carriage return

  //best practice is to make sure you're not reading null data
  if(inData.length > 0){
    //split the values apart at the comma
    var numbers = split(inData, ',');

    //set variables as numbers
    sensor1 = Number(numbers[0]);
    sensor2 = Number(numbers[1]);
  }

  console.log(sensor1 + ", " + sensor2);
}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}


// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}
