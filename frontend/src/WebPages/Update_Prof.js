import React from "react";
import Update_profile from "../component/update_profile"
import Get_Profile from "../component/get_profile"

function Update_Prof() {
  const [profilename, setProfileName] = React.useState("");
  const [smthres, setSmThres] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      ProfileName: ${profilename}
      SmThres: ${smthres}
    `);
    
    Update_profile(profilename, smthres);
    alert("Profile has been updated");
    console.log("Called Function Successfully");
  }

  return (
      <div class="container-fluid add">
      <div class = 'row'>
        <div class='col'>
         <form onSubmit={handleSubmit}>
           <h1 class='title'>Update a Profile</h1><br/>
  
           <label>
               Profile Name:
             <input
               name="profilename"
               type="profilename"
               value={profilename}
               onChange={e => setProfileName(e.target.value)}
               required />
           </label> <br/>
  
           <label>
             Moisture Threshold:
             <input
               name="smthres"
               type="smthres"
               value={smthres}
               onChange={e => setSmThres(e.target.value)}
               required />
           </label>
           <br/>
           <button class="button">Submit</button>
           </form>
         </div>
  
         <div class='col'>
           <h1 class='title'>Existing Profile(s)</h1> <br/>
           <Get_Profile/>
         </div>
       </div>
   </div>
  );
    }
    
    export default Update_Prof;