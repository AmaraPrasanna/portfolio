import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            <img className="mx-2 w-10 color:white "  src={logo} alt="logo" style={{zoom:3}}/>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/parth-shiroya-9586931b4/"><FaLinkedin/></a>
          <a href="https://github.com/72784"><FaGithub/></a>
          <a href="https://www.instagram.com/parth__shiroya/">    <FaInstagram/></a>
          
        
      
            
        </div>
      </nav>
   
  )
}

export default Navbar
