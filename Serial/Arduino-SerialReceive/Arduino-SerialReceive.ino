const int ledPin = 5; // the pin that the LED is attached to
int incomingByte;     // a variable to read incoming serial data into

void setup() {
 Serial.begin(9600);             // initialize serial communication
 pinMode(ledPin, OUTPUT);        // initialize the LED pin as an output
}
 
void loop() {
//RECEIVE BINARY
//send a value between 0-255 from P5 and receive here
//  if (Serial.available() > 0) { // if there's serial data available
//    incomingByte = Serial.read();   // read it
//    Serial.write(incomingByte);         // send it back out as raw binary data
//    analogWrite(5, incomingByte);       // use it to set the LED brightness
//  }

//RECEIVE ASCII 
  if (Serial.available() > 0) {   // see if there's incoming serial data
    incomingByte = Serial.read(); // read it
    if (incomingByte == 'H') {    // if it's a capital H (ASCII 72),
      digitalWrite(ledPin, HIGH); // turn on the LED
    }
    if (incomingByte == 'L') {    // if it's an L (ASCII 76)
      digitalWrite(ledPin, LOW);  // turn off the LED
    }
  }
 
}
