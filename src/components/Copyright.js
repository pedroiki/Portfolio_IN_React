import React from "react";
import "./Copyright.css";

class Copyright extends React.Component {
    render (){
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const name="Carlos Pedro Gomes";
      return (      

        <div>
          <p className="Copyright-info">Develop by {name}</p>
          <p className="Copyright-info">&#169;
Copyright {year}</p>
        </div>
        
      )
    }
}
export default Copyright