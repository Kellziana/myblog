import "./navigation.css";

export default function Navigation() {
  return (
  <>
    <div className="nav">
      <div className="logo"><a href="index.html"><img src="icon.png" alt="icon"/></a></div>
        <div className="optionsList">
          <ul className = "options">
            <li>CONTACTS</li>
            <li>BLOG</li>
            <li>HOME</li>
          </ul>
      </div>
    </div>
    </>
  )
}
