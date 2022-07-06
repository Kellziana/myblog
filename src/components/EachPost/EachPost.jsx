import "./eachpost.css";
import { Link } from "react-router-dom";

export default function EachPost() {
  return (
    <Link to='/Post'><div className="post">
    <div className="postPic"><img src="keyboard.png" alt="keyboard"/></div>
    <div className="postTitle"><h1>How I learned React</h1></div>
    </div></Link>
  )
}
