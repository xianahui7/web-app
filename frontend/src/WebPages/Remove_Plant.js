import React from "react";
import Remove_plant from "../component/remove_plant";
import Get_plant from "../component/get_plant";

function Remove_Plant() {
  const [plantname, setPlantName] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      plantname: ${plantname}
    `);

    Remove_plant(plantname);

    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
        <Get_plant/>
    <form onSubmit={handleSubmit}>
      <h1>Delete a Profile</h1>

      <label>
         Plane Name:
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
    
    export default Remove_Plant;