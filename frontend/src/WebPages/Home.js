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
       
       <h2>List of Materials</h2>
       <br/>

       <ul >
       <li>
          <h4>NodeMCU ESP8266/ESP32</h4>
          <img src = '/pictures/esp8266.jpg' alt=''/><br/>
          Microcontroller Units that will interface with all the sensors and send data to the Raspberry Pi via MQTT
          <br/><br/><br/>
        </li>
        <li>
          <h4>Light Sensor</h4>
          <img src = '/pictures/light_sensor.jpg' alt=''/> <br/>
          A photoresistor that outputs the analog reading of the amount of light in the facing direction
          <br/><br/><br/>
        </li>
        <li>
          <h4>Soil Moisture Sensor</h4>
          <img src = '/pictures/moisture_sensor.jpg' alt=''/><br/>
          A capacitance moisture sensor that will alert the Arduino if the plant needs to be watered
          <br/><br/><br/>
        </li>
        <li>
          <h4>DHT-11 Sensor</h4>
          <img src = '/pictures/temp_humid_sensor.jpg' alt=''/><br/>
          A two-in-one sensor that records the temperature and humidity levels of its surroundings
          <br/><br/><br/>
        </li>

        <li>
          ADC I2C Module
        </li>

        <li>
          5V One Channel Relay Module
        </li>

        <li>
          Water Pump
        </li>

        <li>
          Power Supply Module
        </li>

        <li>
          Raspberry Pi 
        </li>
        
      </ul>
    </div>

  );
}

export default Home;