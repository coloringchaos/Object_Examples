int pressPin = 0; //pressure sensor on A0
int potPin = 1; //pot on pin A1
int slidePin = 2; //slider on A2

void setup() {
  Serial.begin(9600);   //initialize serial communication

}

void loop() {
  // READ DATA
  int pressureRaw = analogRead(pressPin);  //getting values between 0-1000

  //we want to send our data as a binary value - btwn 0-255
  //if we have full resolution, you can divide by 4
  //if we don't have full range, use map()
  int pressure = map(pressureRaw, 0, 1000, 0, 255); //fits our data into a byte

  int pot = analogRead(potPin);


  // SEND DATA TO SERIAL
  //  Serial.write(pressure); //sends binary - will look like gibberish in serial monitor

    //use punctuation to separate our different values
    Serial.print(pressure); //send as ASCII
    Serial.print("\t"); //add some kind of punctuation
    Serial.println(pot);
    
  
  delay(300);

}
