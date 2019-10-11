This example uses the P5 web editor to read two values from the serial port.

The most important thing to confirm is that you are sending data in the correct format from Arduino, and that you are getting good sensor readings. Troubleshoot on the Arduino side before moving on to P5 if you're readings are unreliable.

This example is utilizing the [P5 web editor](http://alpha.editor.p5js.org/)

You should have the following code on your Arduino. It reads the sensor values and prints to the serial monitor. 

~~~~
void setup() {
  Serial.begin(9600);
}

void loop() {
  int pot = analogRead(A0);
  int slider = analogRead(A1);

  Serial.print(pot);
  Serial.print(",");
  Serial.println(slider);
  delay(1); //allows the serial port to keep up
}
	
~~~~

Your data should be clean and well formatted in the Arduino Serial Monitor. There should be NO whitespace, and there should be a carriage return after each line. Like this:

~~~~
225,399
222,402
209,404 
198,417
…
~~~~

A few notes on running this example:
+ Confirm that you are sending correctly formatted values into the serial port from your microcontroller
+ Your p5 project must include the [p5.serialport.js](https://raw.githubusercontent.com/vanevery/p5.serialport/master/lib/p5.serialport.js) library - be sure to also link to this file from your index.html page
+ Be sure that you have downloaded the p5 serial control application to run in the background. This is a necessary step in connecting your web browser (p5) to the serial port on your computer.
+ Make sure the Arduino serial monitor is **closed** before you move to the P5 side

**[Here is the completed P5 code](https://github.com/coloringchaos/Object_Examples/blob/master/Serial/02-twoValuesToP5/sketch.js)**
