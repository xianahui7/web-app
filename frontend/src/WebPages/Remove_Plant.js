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
    alert("Plant has been removed.");
  }

  return (
    <div class="container-fluid add">
    <div class = 'row'>
      <div class='col'>
       <form onSubmit={handleSubmit}>
         <h1 class='title'>Delete a Plant</h1><br/>

         <label>
             Plant Name:
           <input
             name="plantname"
             type="plantname"
             value={plantname}
             onChange={e => setPlantName(e.target.value)}
             required />
         </label> <br/>
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
    
    export default Remove_Plant;