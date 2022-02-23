
import React from "react";



function Add() {

  const [profilename, setProfileName] = React.useState("");
  const [smthres, setSmThres] = React.useState("");
  const [slthres, setSlThres] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      ProfileName: ${profilename}
      SmThres: ${smthres}
      SlThres: ${slthres}
    `);

    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
    <form onSubmit={handleSubmit}>
      <h1>Add a Plant</h1>

      <label>
      
         Profile Name:
        <input
          name="profilename"
          type="profilename"
          value={profilename}
          onChange={e => setProfileName(e.target.value)}
          required />
      </label>

      <label>
          Soil Moisture Threshold:
        <input
          name="smthres"
          type="smthres"
          value={smthres}
          onChange={e => setSmThres(e.target.value)}
          required />
      </label>

      <label>
          Sunlight Threshold:
        <input
          name="slthres"
          value={slthres}
          onChange={e => setSlThres(e.target.value)}
          required/>
      </label>
      <button class="button">Submit</button>

      
    </form>
    </div>
  </div>
      
  );
    }
    
    export default Add;