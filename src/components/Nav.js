import React from "react" 
import "./Nav.css" 
class Nav extends React.Component {

    render() {
        return (
          
        

            <ul className="links-list">
                <li className="list-item" >
                  <a className="link" href="https://pedroiki.github.io/portfolio-cgomes/" target="_blank">The Developer</a>
                </li >
                <li className="list-item">
                  <a className="link"  href="https://pedroiki.github.io/portfolio-cgomes/#My-Portfolio" target="_blank">Projects</a>
                </li>
                <li className="list-item">
                  <a className="link" href="https://api.whatsapp.com/send?phone=351919214504&text=Ol%c3%a1%21&source=&data="target="_blank"
                   >Contact me on Whatsapp
                  
                  </a>
                </li>
             
            </ul>
          



        )

    }
}

export default Nav