/*
 *  This example incldues the code to RECEIVE data in two different formats:
 *  as binary (a signle byte of data), and as ASCII as particular characters
 *  comment in or out whichever method you intend to use
*/

//This simple circuit has an LED and resistor connected to digital pin 5

const int ledPin = 5; // the pin that the LED is attached to
int incomingByte;     // a variable to read incoming serial data into

void setup() {
 Serial.begin(9600);             // initialize serial communication
 pinMode(ledPin, OUTPUT);        // initialize the LED pin as an output
}

void loop() {
//RECEIVE BINARY
  if (Serial.available() > 0) { // if there's serial data available
    int inByte = Serial.read();   // read it
    Serial.write(inByte);         // send it back out as raw binary data
    analogWrite(5, inByte);       // use it to set the LED brightness
  }

//RECEIVE ASCII
 // if (Serial.available() > 0) {   // see if there's incoming serial data
 //   incomingByte = Serial.read(); // read it
 //   if (incomingByte == 'H') {    // if it's a capital H (ASCII 72),
 //     digitalWrite(ledPin, HIGH); // turn on the LED
 //   }
 //   if (incomingByte == 'L') {    // if it's an L (ASCII 76)
 //     digitalWrite(ledPin, LOW);  // turn off the LED
 //   }
 // }

}
