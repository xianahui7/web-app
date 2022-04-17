import React from "react";
import Add_profile from "../component/add_profile";
import Get_profile from "../component/get_profile"

function MyPlant() {

  const [profilename, setProfileName] = React.useState("");
  const [smthres, setSmThres] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      ProfileName: ${profilename}
      SmThres: ${smthres}
    `);

    Add_profile(profilename, smthres);
    alert("Profile has been successfully added.");
  }

      return (
        <div>
          <div className= 'app-container'>
            <h1 className='title_div'><b>Existing Profilies</b></h1>
            <Get_profile/>
            
            <input
             type="text"
             name="profilename"
             required="requried"
             value={profilename}
             onChange={e => setProfileName(e.target.value)}
             />

            <input
             type="text"
             name="smthres"
             required="requried"
             value={smthres}
             onChange={e => setSmThres(e.target.value)}
             />

          </div>
        </div>
      );
    }
    
export default MyPlant;