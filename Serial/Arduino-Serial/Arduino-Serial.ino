/* 
 *  This example incldues the code to send data in two different formats: 
 *  as binary, using Serial.write(), and as ASCII, using Serial.print / println
 *  comment in or out whichever method you intend to use, don't use both at the same time
*/

void setup() {
  Serial.begin(9600);   //initialize serial communication
}

void loop() {
  // READ DATA
  int sensor1 = analogRead(A0);   //read my sensor
  int sensor2 = analogRead(A1);   //read a second sensor value

  /*  SENDING BINARY - use for sendign one value
   *  we want to send our data as a binary value - btwn 0-255
   *  if we have full resolution, you can divide by 4, if we don't have full range, use map()   */
   
  int sensor1Mapped = map(sensor1, 0, 1023, 0, 255); //fits our data into a byte
  Serial.write(sensor1Mapped); //sends binary - will look like gibberish in serial monitor

  /*  SEND ASCII - use for sending two values  
   *  structure your string of characters based on how we want to receive on the p5 side
   *  use punctuation to separate the different values    */
  
//  Serial.print(sensor1); //send as ASCII
//  Serial.print(","); //add some kind of punctuation, comma or tab works well 
//  Serial.println(sensor2);
//    
  delay(10);

}
