This example uses the [P5 web editor](http://alpha.editor.p5js.org/) to read a single sensor value, sent as a single byte, from the serial port. 

The most important thing to confirm is that you are sending data in the correct format from Arduino, and that you are getting good sensor readings. Troubleshoot on the Arduino side before moving on to P5 if you're readings are unreliable.

You also must include the [p5.serialport.js](https://raw.githubusercontent.com/vanevery/p5.serialport/master/lib/p5.serialport.js) library in your P5 project, and you must have the [p5.seriacontrol](https://github.com/vanevery/p5.serialcontrol/releases) App running in the background (or via the command line).

This code is adapted from the ITP's [Serial Input to P5 Lab](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/).
