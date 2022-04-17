import React from "react";
import Get_plant from "../component/get_plant";
import Get_profile from "../component/get_profile"

function MyPlant() {

      return (
        <div>
          <div className="row">
            <div className= 'app-container col'>
              <h1 className='title_div'><b>Existing Profilies</b></h1>
              <br/>
              <Get_profile/>
            </div>

            <div className= 'app-container col'>
              <h1 className='title_div'><b>Existing Plants</b></h1>
              <br/>
              <Get_plant/>
            </div>

          </div>
         
        </div>
      );
    }
    
export default MyPlant;