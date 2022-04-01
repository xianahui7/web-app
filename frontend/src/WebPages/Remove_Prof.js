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
    
    alert("Profile has been removed.");
    }

  return (
    <div class="container-fluid add">
    <div class = 'row'>
      <div class='col'>
       <form onSubmit={handleSubmit}>
         <h1 class='title'>Delete a Profile</h1><br/>

         <label>
             Profile Name:
           <input
             name="profilename"
             type="profilename"
             value={profilename}
             onChange={e => setProfileName(e.target.value)}
             required />
         </label> <br/>
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
    
    export default Remove_Prof;