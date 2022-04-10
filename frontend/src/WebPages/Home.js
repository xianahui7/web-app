import React from "react";
import "../Styling/index.css";

function Home() {
  return (

    <div className="home">
       <h1>Welcome to IoT:Automated Irrigation System</h1>
       <br/>
       The goal of our project was to create an automated irrigation system. This project aims to build a conceptual idea for our future to become more sustainable. The current scope is focused on small at-home gardens to encourage more people to be sustainable. It makes maintaining a garden easier by making it self-sustainable.
       <br/><br/>
       The goal of the IoT: Automated Irrigation System is to provide the convenience of an automated system to water plants and display sensor analytics for plant owners. 
       <br/><br/><br/>
       <h2>List of Materials</h2>
       <br/>

       <ul >
       <li>
          NodeMCU ESP8266/ESP32<br/>
          <img src = '/pictures/esp8266.jpg' alt=''/>

        </li>

        <li>
        Light Sensor<br/>
          <img src = '/pictures/light_sensor.jpg' alt=''/>

        </li>

        <li>
        Soil Moisture Sensor <br/>
          <img src = '/pictures/moisture_sensor.jpg' alt=''/>
          <br/>
        </li>

        <li>
          DHT-11 Sensor<br/>
          <img src = '/pictures/temp_humid_sensor.jpg' alt=''/>
          <br/>
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