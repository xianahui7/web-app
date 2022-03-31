import React from "react";
import Remove_profile from "../component/remove_profile"
import Get_Profile from "../component/get_profile"

function Remove_Prof() {
  const [profilename, setProfileName] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      Profile Name: ${profilename}
    `);

    Remove_profile(profilename);

    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
        <Get_Profile/>
    <form onSubmit={handleSubmit}>
      <h1>Delete a Profile</h1>

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