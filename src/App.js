import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from "./components/Photo.js";
import Title from "./components/Title.js";
import Counter from "./components/Counter.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./theme.js";
import image01 from "./images/01.jpg";

// import Topnav from "./components/Topnav.js";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* //isto quer dizer que tem uma class "app" nos estilos */}

          <Nav />

          <br></br>

          <img src="https://pedroiki.github.io/portfolio-cgomes/images/bolas.gif" width="400" height="150" frameBorder="0"
            class="gif"  ></img>

          <Title title={"Carlos Pedro Gomes"}>  </Title>
          <p>Portfolio build with React.js</p>

          <div>

            <br></br>

            <article>
              <h3>About me</h3>
              <p>i have computer background and experience in IT Support , System Admin Linux and now Web Developer as Freelancer </p>
            </article>

            <a href="https://www.linkedin.com/in/pedro-zenha/">Linkedin!</a>

            <br></br>
            <br></br>

            <article>
              <h3>Developer</h3>
              <p>I started learn Web Developer in November 2019 and soon became a passion, long time ago
              i was familiar with Html  the Web language at that time .

  </p>
            </article>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </div>


          <a href="https://pedroiki.github.io/portfolio-cgomes/" target="_blank">
            <img src={image01} width="400" height="300" frameBorder="0"
              className="jpg"  ></img>

          </a>

          <br></br>
          <br></br>

          <a href="https://pedroiki.github.io/portfolio-cgomes/" target="_blank">
          <img src="https://pedroiki.github.io/portfolio-cgomes/images/04.jpg" width="400" height="300" frameBorder="0"
            className="jpg" to=""   ></img>
</a>

            
          <br></br>
          <br></br>

          <a href="https://pedroiki.github.io/portfolio-cgomes/" target="_blank">
          <img src="https://pedroiki.github.io/portfolio-cgomes/images/01.jpg" width="400" height="300" frameBorder="0"
            className="jpg"  ></img>
</a>

          <br></br>
          <br></br>

          <iframe width="400" height="300" src="https://pedroiki.github.io/tomato_game2016/">
          </iframe>
          <br></br>
          <br></br>


          <iframe width="400" height="300" src="https://pedroiki.github.io/Comics_eCommerce-beta1.0/">
          </iframe>
          <br></br>
          <br></br>


          <iframe width="400" height="300" src="https://pedroiki.github.io/login-firebase/">
          </iframe>
          <br></br>
          <br></br>


          <iframe width="400" height="300" src="https://pedroiki.github.io/Mikel_Therapist/">
          </iframe>
          <br></br>
          <br></br>


          <iframe width="400" height="300" src="https://pedroiki.github.io/blog_prototype/">
          </iframe>í

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Photo></Photo>
          <a
            className="App-link"
            href="https://pedroiki.github.io/portfolio-cgomes/#My-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Other Projets on Going */}

            <Bottom-container> </Bottom-container>
            <br></br>
            <br></br>
          </a>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
