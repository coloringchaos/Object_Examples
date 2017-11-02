/*
This P5 sketch sends data serially to Arduino

This example includes two methods you can send data to Arduino
1) sending a single byte serially, a value between 0-255
this is demonstrated in the mouseDragged() function below
2) sending specific ASCII characters (which Arduino will decipher),
this is demonstrated in the keyPressed() and mouseClicked() below

By Arielle Hein, adapted from ITP Phys Comp Serial Labs
Edited Nov 2 2017

*/


var serial; //variable to hold an instance of the serial port library
var portName = 'YOUR PORT'; //fill in with YOUR port

function setup() {
  createCanvas(400, 300);

  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  //open our serial port
  serial.open(portName);

  //let's figure out what port we're on - useful for determining your port
  // serial.on('list', printList); //set a callback function for the serialport list event
  // serial.list(); //list the serial ports
}

function draw() {
  background('plum');

  // fill('mediumseagreen');
  // noStroke();
  // rect(0, 0, width/2, height);

}

//SEND A SINGLE BYTE TO ARDUINO
//when the mouse is dragged, send the Y value as a single Byte to Arduino
// function mouseDragged() {
//  // map the mouseY to a range from 0 to 255:
//  outByte = int(map(mouseY, 0, height, 0, 255));
//  // send it out the serial port:
//  serial.write(outByte);
// }


//SEND ASCII CHARACTER TO ARDUINO
//when a user enters 'H' or 'L', this is sent to Arduino
// function keyPressed() {
//   if (key ==='H' || key ==='L') { 	// if the user presses H or L
//  		serial.write(key);              // send it out the serial port
//     console.log(key);
//  	}
// }

//or, another method would be to click on particular parts of the screen to send a key value
// function mouseClicked(){
//   if(mouseX > 0 && mouseX < width/2){
//   	serial.write('H');
//   }

//   if(mouseX >= width/2 && mouseX < width){
//     serial.write('L');
//   }
// }


//all my callback functions here:
//these are useful for giving feedback
function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

/* this example does not receive data also,
but this is where you would incorporate that code */
function serialEvent(){

}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}
