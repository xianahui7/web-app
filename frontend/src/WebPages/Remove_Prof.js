import React from "react";
import Remove_Profile from "../component/remove_profile"
import Get_Profile from "../component/get_profile"

function Remove_Prof() {
  const [profileid, setProfileid] = React.useState("");
  const [profilename, setProfileName] = React.useState("");
  
  const handleSubmit = (event) => {
    // console.log(`
    //   Profileid: ${profileid}
    //   ProfileName: ${profilename}
    // `);

    Remove_Profile(profileid, profilename);

    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
        <Get_Profile/>
    <form onSubmit={handleSubmit}>
      <h1>Delete a Profile</h1>

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
      <button class="button">Submit</button>
    </form>
    </div>
  </div>
      
  );
    }
    
    export default Remove_Prof;