
import React from "react";
import Add_plant from "../component/add_plant";
import Get_plant from "../component/get_plant";

function Add_Plant() {

  const [profileid, setProfileid] = React.useState("");
  const [plantname, setPlantName] = React.useState("");
  // const [profilename, setProfileName] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      profileid: ${profileid}
      plantname: ${plantname}
    `);

    // Add_plant(plantname, profilename);
    Add_plant(plantname, profileid);

    console.log("Called Function Successfully");
  }

  return (
     <div class="container-fluid add">
       <div class = 'row'>
         <div class='col'>
          <form onSubmit={handleSubmit}>
            <h1 class='title'>Add a Plant</h1><br/>

            <label>
                Plant Name:
              <input
                name="plantname"
                type="plantname"
                value={plantname}
                onChange={e => setPlantName(e.target.value)}
                required />
            </label> <br/>

            <label>
              Profile ID:
              <input
                name="profileid"
                type="profileid"
                value={profileid}
                onChange={e => setProfileid(e.target.value)}
                required />
            </label>

            {/* <label>
              Profile ID:
              <input
                name="profilename"
                type="profilename"
                value={profilename}
                onChange={e => setProfileName(e.target.value)}
                required />
            </label> */}
            <br/>
            <button class="button">Submit</button>
            </form>
          </div>

          <div class='col'>
            <h1 class='title'>Existing Plants</h1> <br/>
            <Get_plant/>
          </div>
        </div>
    </div>   
  );
    }
    
    export default Add_Plant;