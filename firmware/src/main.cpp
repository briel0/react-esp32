#include <Arduino.h>
#include "BluetoothSerial.h"

BluetoothSerial SerialBT;

const int LAMP_PIN = 2;

void setup(){
    
    SerialBT.begin("ESP32");
    Serial.begin(115200);

    Serial.println("Hardware initialized!");
    SerialBT.println("Bluetooth Ready!");

    pinMode(LAMP_PIN, OUTPUT);
}

void loop(){
    
    if(SerialBT.available()){
        char message = SerialBT.read();
        digitalWrite(LAMP_PIN, message == '1');
        Serial.print("Command received: ");
        Serial.println(message);
    }
    
}