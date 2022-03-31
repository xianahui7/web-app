import React from "react";
import Update_plant from "../component/update_plant"
import Get_plant from "../component/get_plant"

function Update_Plant() {
  const [profileid, setProfileid] = React.useState("");
  const [plantname, setPlantName] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
    Plant Name: ${plantname},
    Profile ID: ${profileid}
    `);


    Update_plant(profileid, plantname);
    console.log("Called Function Successfully");
    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
        <Get_plant/>
    <form onSubmit={handleSubmit}>
      <h1>Update a Plant</h1>

      <label>
          Plant Name:
        <input
          name="plantname"
          type="plantname"
          value={plantname}
          onChange={e => setPlantName(e.target.value)}
          required />
      </label>

      <label>
         Profile ID:
        <input
          name="profileid"
          type="profileid"
          value={profileid}
          onChange={e => setProfileid(e.target.value)}
          required />
      </label>

      <button class="button">Submit</button>
    </form>
    </div>
  </div>
      
  );
    }
    
    export default Update_Plant;