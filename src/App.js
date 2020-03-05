import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from "./components/Photo.js";
import Title from "./components/Title.js"; 
import Counter from "./components/Counter.js";
import Nav from "./components/Nav.js";

class App extends React.Component { 
    render(){
      return (
        <div className="App">    
        {/* //isto quer dizer que tem uma class "app" nos estilos */}
          <header className="App-header">
          </header>
            
            <Title title={"My 1ft react Experience"}>  </Title>
            <Nav> </Nav>
            <Title title={"my React skills are on progress "}>  </Title>
            <Counter>  </Counter>
            <Photo></Photo>

            <a
              className="App-link"
              href="https://github.com/pedroiki"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>
          
        </div>
      );
    }
}

export default App;

