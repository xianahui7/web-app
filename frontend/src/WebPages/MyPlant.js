import React from "react";
import Get_profile from "../component/get_profile"

function MyPlant() {

      return (
        <div>
          <div className= 'app-container'>
            <h1 className='title_div'><b>Existing Profilies</b></h1>
            <br/>
            <Get_profile/>
            <Get_plant
          </div>
        </div>
      );
    }
    
export default MyPlant;