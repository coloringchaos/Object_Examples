This example uses the P5 web editor to read two values from the serial port.

The most important thing to confirm is that you are sending data in the correct format from Arduino, and that you are getting good sensor readings. Troubleshoot on the Arduino side before moving on to P5 if you're readings are unreliable.

This example is utilizing the [P5 web editor](http://alpha.editor.p5js.org/)

A few notes on running this example:
+ Confirm that you are sending correctly formatted values into the serial port from your microcontroller
+ Your p5 project must include the [p5.serialport.js](https://raw.githubusercontent.com/vanevery/p5.serialport/master/lib/p5.serialport.js) library - be sure to also link to this file from your index.html page
+ Be sure that you have downloaded the p5 serial control application to run in the background. This is a necessary step in connecting your web browser (p5) to the serial port on your computer.

This code is adapted from the ITP's [Serial Input to P5 Lab](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/). Be sure that your
