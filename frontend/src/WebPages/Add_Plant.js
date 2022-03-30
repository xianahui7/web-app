
import React from "react";

function Add_Plant() {

  const [profilename, setProfileName] = React.useState("");
  const [smthres, setSmThres] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      ProfileName: ${profilename}
      SmThres: ${smthres}
    `);

    console.log("Called Function Successfully");
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

      <button class="button">Submit</button>
    </form>
    </div>
  </div>
      
  );
    }
    
    export default Add_Plant;