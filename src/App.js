import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from "./components/Photo.js";
import Title from "./components/Title.js"; 
import Counter from "./components/Counter.js";
import Nav     from "./components/Nav.js";
import Footer from  "./components/Footer.js";
import {Button} from "@material-ui/core" ;


// import Topnav from "./components/Topnav.js";




class App extends React.Component { 
    render(){
      return (
        <div className="App">    
        {/* //isto quer dizer que tem uma class "app" nos estilos */}
          <header className="App-header">
          </header>
          
            <Title title={"Carlos Gomes Porfolio (React.js) "}>  </Title>
            {/* <button>oi</button>
            <Button color="primary" variant="contained">oi</Button> */}







            <iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" width="480" height="270" frameBorder="0"
             class="giphy-embed" allowFullScreen></iframe><p>
               <a href="https://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6"></a></p>







            <Nav> </Nav>
            
            {/* <br></br>
            <Counter>  </Counter> */}



  
  
  
  <div>
    
 

 


 
<br></br>
<br></br>

   

<article>
  <h2>About me</h2>
  <p>i have a computer technician background and i am have experience and IT Support , System Admin and now Web Developer </p>
</article>

<a href="https://www.linkedin.com/in/pedro-zenha/">Linkedin!</a>

<br></br>

<article>
  <h2>As Web Developer</h2>
  <p>I started learn Web Developer in November 2019 and soon became a passion, long time ago back to 2000
     i was already familiar with html and that was the only web language at that time and i have create websites

  </p>
</article>

<a href="https://github.com/pedroiki?tab=repositories">GitHub Repository</a>

<br></br>
<br></br>
<br></br>
<br></br>

  </div>

    

    <iframe width="280" height="170" src="https://pedroiki.github.io/portfolio-cgomes/">
      
    </iframe>

    <iframe width="280" height="170" src="https://pedroiki.github.io/costeira.praia/">
      
    </iframe>

<br></br>


    <iframe width="280" height="170" src="https://pedroiki.github.io/mobile-tag/">
      
    </iframe>

    <iframe width="280" height="170" src="https://pedroiki.github.io/tomato_game2016/">
      
    </iframe>


<br></br>
<br></br>
<br></br>


 



<br></br>
<br></br>
<br></br>


           
            <Photo></Photo>

            <br></br>
            <br></br>
            <br></br>

            <a
              className="App-link"
              href="https://pedroiki.github.io/portfolio-cgomes/#My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Other Projets on Going


              
                  
              <Bottom-container> </Bottom-container>

  
                

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
              
              
            </a>
          


 
           <Footer></Footer>



        </div>
      );
    }
}







export default App;

