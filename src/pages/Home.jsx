import './index.css'
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Contact from '../components/Contact/Contact';


const Home = () => {

    const projects = [
        {
            img: '',
            title: 'E-commerce WebPage',
            description: 'Javascript, HTML and CSS, React',
            github: 'https://github.com/SimoMordi/Trendy_Tech.git',
            site: 'https://trendy-tech.netlify.app/'
        },
        {
            img: '',
            title: 'Note-Taking',
            description: 'Welcome to Note-Taking App, light tool designed to simplify the process of note-taking and allows users to add customized lists on the fly. ',
            github: 'https://github.com/SimoMordi/Tasks_Note.git',
            site: 'https://code-reviewer.onrender.com/'
        }
        
    ]

    return (
        <div id="container">
            <Navbar />
            <div id="home">
                <div id="info">
                    <h1>Simo Mordi</h1>
                    <p>  Full-Stack software developer My journey into tech began with attending various boot camps, coding language courses, and professional development classes to solidify my technical foundation. While I am relatively new to the tech field, I am armed with a wealth of knowledge and a fierce determination to make a mark. Skilled in JavaScript, React, express and more..  with strong problem-solving, and effective communication skills will make me an asset in your team.</p>
                </div>
                <div id="img">
                    <img src="/assets/PerScholas.jpg" />
                </div>
            </div> 
            <h1 className='title' id="p-title">Projects</h1>
            <div id="projects">
                {projects.map(project => {
                    return <Project project={project} />
                })}
            </div>
            <Contact />
        </div>
     );
}
 
export default Home;
