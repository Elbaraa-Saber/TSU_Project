import mainPhoto from '../imgs/mainPhoto.jpg'
import '../Css/sidebar.css'
function Sidebar(){
    return (
        <>
            <div className="sidebar">
                <div className='container-side'>
                    <div className='main-info'>
                        <div className='photo'>
                            <img src={mainPhoto} alt='My Image'/>
                        </div>
                        <h1>Salem Elbaraa</h1>
                        <p>Front-End Developer in Russia</p>
                    </div>
                    <div className='links'>
                        <ul>
                            <li className='active'>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href='#'>About</a>
                            </li>
                            <li>
                                <a href='#'>Sevices</a>
                            </li>
                            <li>
                                <a href='#'>Skills</a>
                            </li>
                            <li>
                                <a href='#'>Education</a>
                            </li>
                            <li>
                                <a href='#'>Experience</a>
                            </li>
                            <li>
                                <a href='#'>Work</a>
                            </li>
                            <li>
                                <a href='#'>Blog</a>
                            </li>
                            <li>
                                <a href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-sidebar'>
                        <div >
                            © Copyright ©2024 All rights reserved | This template is made with <span></span> by Colorlib
                        </div>
                        <div>My GitHub: <a href='https://github.com/Elbaraa-Saber'>Click Me</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;