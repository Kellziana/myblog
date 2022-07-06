import "./cont.css"

export default function Cont() {
  return (
    <div className="contacting">
      <div>
            <h2 className="quote">You're welcome to get in touch with me!!</h2>
        </div>
        <div className = "contactList">
            <ul>
                <li><em>Github</em>: <a href="https://github.com/Kellziana">Kellziana</a></li>
                <li><em>Linkedin</em>: <a href="https://www.linkedin.com/in/samina-arshad-753514202/">Samina Arshad</a></li>
                <li><em>Email</em>: samina.arshad2003@gmail.com</li>
                <li><em>Phone Number</em>: +353899469079</li>
            </ul>
        </div>
        <img className = "samina" src = "me.png" alt="sam"/>
    </div>
  )
}
