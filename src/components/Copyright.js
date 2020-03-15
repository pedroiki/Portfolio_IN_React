import React from "react";
import "./Copyright.css";

class Copyright extends React.Component {
    render (){
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const name="Pedro";
      return (      

        <div>
          <p className="Copyright-info">Created by {name}</p>
          <p className="Copyright-info">Copyright {year}</p>
        </div>
        
      )
    }
}
export default Copyright