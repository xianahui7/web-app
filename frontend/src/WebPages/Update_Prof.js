import React from "react";
import Update_Profile from "../component/update_profile"
import Get_Profile from "../component/get_profile"

function Update_Prof() {
  const [profileid, setProfileid] = React.useState("");
  const [profilename, setProfileName] = React.useState("");
  const [smthres, setSmThres] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      Profileid: ${profileid}
      ProfileName: ${profilename}
      SmThres: ${smthres}
    `);

    Update_Profile(profileid, profilename, smthres);

    console.log("Called Function Successfully");
    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
        <Get_Profile/>
    <form onSubmit={handleSubmit}>
      <h1>Update a Profile</h1>

      <label>
         Profile ID:
        <input
          name="profileid"
          type="profileid"
          value={profileid}
          onChange={e => setProfileid(e.target.value)}
          required />
      </label>

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
    
    export default Update_Prof;