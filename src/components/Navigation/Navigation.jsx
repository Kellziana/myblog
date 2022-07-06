import "./navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
  <>
    <div className="nav">
      <div className="logo"><Link to='/'><img src="icon.png" alt="icon"/></Link> </div>
        <div className="optionsList">
          <ul className = "options">
            <li>CONTACTS <Link to='/Contacts'></Link></li>
            <li>BLOG <Link to='/Blog'></Link></li>
            <li>HOME <Link to='/'></Link></li>
          </ul>
      </div>
    </div>
    </>
  )
}
