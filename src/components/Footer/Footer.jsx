import './footer.css'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class ="footer">
       <div class="connections">
            <section class="linkable">
            <a href="https://github.com/Kellziana">
            <img class="social" src="github.png" alt="git"/>
            </a>
            <a href="https://www.linkedin.com/in/samina-arshad-753514202/">
            <img class="social" src="linkedin.png" alt="ln"/>
            </a>
            </section>
            <section class="nonlink">
            <img class="social" src="email.png" alt="mail"/> <p>samina.arshad2003@gmail.com</p>
            <img class="social" src="telephone-call.png" alt="phone"/> <p>+353899469079</p>
            </section>
       </div>
       <ul>
        <li>Home <Link to='/'></Link></li>
        <li>Blog <Link to='/Blog'></Link></li>
       </ul>
       <p class="copyright">Samina Arshad @ 2022</p>
    </div>
  )
}
