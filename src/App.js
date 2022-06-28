import './App.css';
import {useState} from "react";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

function App() {

    const [app, setApp] = useState('')
    return (
        <div className="App">

            <button onClick={() => setApp('About me')}>About me</button>
            <button onClick={() => setApp('My Projects')}>My Projects</button>
            <button onClick={() => setApp('Contact Me')}>Contact Me</button>
            {app === 'About me' && <AboutMe  />}
            {app === 'My Projects' && <MyProjects />}
            {app === 'Contact Me' && <ContactMe/>}
        </div>
    );
}

export default App;
