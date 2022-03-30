
import React from "react";
import Add_profile from "../component/add_profile"
import Get_Profile from "../component/get_profile"

function Add_Profile() {

  const [profilename, setProfileName] = React.useState("");
  const [smthres, setSmThres] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      ProfileName: ${profilename}
      SmThres: ${smthres}
    `);

    Add_profile(profilename, smthres);
    
    console.log("Called Function Successfully");
    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
    <form onSubmit={handleSubmit}>
      <h1>Add Custom Profile</h1>

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
      <Get_Profile/>
    </div>
  </div>
      
  );
    }
    
    export default Add_Profile;