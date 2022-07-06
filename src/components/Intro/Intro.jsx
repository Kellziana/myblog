import "./intro.css"

export default function Intro() {
  return (
    <div>
        <div className = "introHeading">
        <h1 class="name">
                <span class="name-word name-word-1">SAMINA </span>
                <span class="name-word name-word-2">ARSHAD</span>
            </h1>
        </div>
        <div class = "info">
        <h2>Who am I?</h2>
        <img src="me.png" alt="sam"/>
        <p id="who"> My name is Samina Arshad and I am a 3rd year UCC student
            studying Computer Science, a 4 year course, and am hoping to go further into my 
            career after college. I have a particular interest in User Interface design and so 
            I see myself in that particular area in future.
        </p>
        <h2>Why UI design?</h2>
        <p id="why"> I enjoy coding and thinking logically as well as creatively.
            I strongly enjoy bringing my creative skills to use, thus I prefer to work 
        on the front-end of a devlopment. I like to develop on the look and feel of user interfaces using my skills
        in coding languages and sometimes adding my own creations such as digital art. I have worked on UI 
        projects and wish to work on bigger ones in future. I thoroughly enjoy spending my time this way. 
        </p>
        <h2>What else?</h2>
        <p id="what"> I also enjoy working on the back-end of a development. I have an
            interest in working on databases and working with data. I have worked on projects 
            consisting of databases using SQL.
        </p>
        <h2>Languages</h2>
        <ul id="lang">
            <li>Python</li>
            <li>Java</li>
            <li>Javascript/Typescript</li>
            <li>HTML</li>
            <li>SQL</li>
            <li>CSS</li>
        </ul>
    </div>
    </div>
  )
}
