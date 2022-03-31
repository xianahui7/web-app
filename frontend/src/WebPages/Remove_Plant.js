import React from "react";
import Remove_plant from "../component/remove_plant";
import Get_plant from "../component/get_plant";

function Remove_Plant() {
  const [plantid, setPlantid] = React.useState("");
  
  const handleSubmit = (event) => {
    console.log(`
      Profileid: ${plantid}
    `);

    Remove_plant(plantid);

    event.preventDefault();
  }

  return (
    <div className="add">
      <div class="container">
        <Get_plant/>
    <form onSubmit={handleSubmit}>
      <h1>Delete a Profile</h1>

      <label>
         Profile ID:
        <input
          name="plantid"
          type="plantid"
          value={plantid}
          onChange={e => setPlantid(e.target.value)}
          required />
      </label>

      <button class="button">Submit</button>
    </form>
    </div>
  </div>
      
  );
    }
    
    export default Remove_Plant;