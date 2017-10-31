/*
This P5 sketch reads incoming binary data from the serial port.
The data on the Arduino side is being sent as a single byte (a value between 0-255).
then parses the data into separate variables

By Arielle Hein, adapted from ITP Phys Comp Serial In Lab
Edited Oct 31 2017

*/

var serial;          // variable to hold an instance of the serialport library
var portName = 'YOUR PORT';  // fill in your serial port name here

var inData;

function setup() {
  createCanvas(400, 300);

  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.open(portName);              // open a serial port
}

function draw(){
  background('darkcyan');
	print(inData);
  noStroke();
  ellipse(width/2, height/2, inData, inData);
}

function serverConnected() {
  print('connected to server.');
}

function portOpen() {
  print('the serial port opened.')
}

//THIS IS WHERE WE READ INCOMING DATA
function serialEvent() {
  //read data and set the type as a Number
  inData = Number(serial.read());
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}
