
import React from "react";
import Add_plant from "../component/add_plant";
import Get_plant from "../component/get_plant";

function Add_Plant() {

  const [plantname, setPlantName] = React.useState("");
  const [profileid, setProfileid] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      profileid: ${profileid}
      plantname: ${plantname}
    `);

    Add_plant(profileid, plantname);

    console.log("Called Function Successfully");
    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
      <Get_plant/>
    <form onSubmit={handleSubmit}>
      <h1>Add a Plant</h1>

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
          Plant Name:
        <input
          name="plantname"
          type="plantname"
          value={plantname}
          onChange={e => setPlantName(e.target.value)}
          required />
      </label>

      <button class="button">Submit</button>
    </form>
    </div>
  </div>
      
  );
    }
    
    export default Add_Plant;