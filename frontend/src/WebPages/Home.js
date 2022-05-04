import React from "react";
import "../Styling/index.css";

function Home() {
  return (
    <div className="home">
       <h1>Welcome to IoT:Automated Irrigation System</h1>
       <br/>
       The goal of our project was to create an automated irrigation system. This project aims to build a conceptual idea for our future to become more sustainable. The current scope is focused on small at-home gardens to encourage more people to be sustainable. It makes maintaining a garden easier by making it self-sustainable.
       <br/><br/>
       The goal of the IoT : Automated Irrigation System is to provide the convenience of an automated system to water plants and display sensor analytics for plant owners. 
       <br/><br/><br/>
       <h2>IoT Devices Used</h2>
       <br/><br/>
       <ul > 
       <li>
          <div class="flex-container"> 
            <div class="flex-left">
            <img src = '/pictures/esp8266.jpg' alt=''/><br/>
            </div>
            <div class="flex-right">
              <h5>NodeMCU ESP8266/ESP32</h5> <br/>
              Microcontroller Units that will interface with all the sensors and send data to the Raspberry Pi via MQTT
            </div>
          </div>
        </li>
        <br/><br/>
        <li>
        <div class="flex-container"> 
          <div class="flex-left">
          <img src = '/pictures/light_sensor.jpg' alt=''/> <br/>
          </div>
          <div class="flex-right">
            <h5>Light Sensor</h5> <br/>
            A photoresistor that outputs the analog reading of the amount of light in the facing direction
          </div>
        </div>
        </li>
        <br/><br/>
        <li>
          <div class="flex-container"> 
            <div class="flex-left">
            <img src = '/pictures/moisture_sensor.jpg' alt=''/><br/>
            </div>
            <div class="flex-right">
            <h5>Soil Moisture Sensor</h5> <br/>
            A capacitance moisture sensor that will alert the Arduino if the plant needs to be watered
            </div>
          </div>
        </li>
        <br/><br/>
        <li>
        <div class="flex-container"> 
            <div class="flex-left">
              <img src = '/pictures/temp_humid_sensor.jpg' alt=''/><br/>
            </div>
            <div class="flex-right">
              <h5>DHT-11 Sensor</h5> <br/>
              A two-in-one sensor that records the temperature and humidity levels of its surroundings
            </div>
          </div>
        </li>
      </ul>
    </div>

  );
}

export default Home;