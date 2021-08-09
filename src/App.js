import './App.css';
import NavComponent from './Components/NavComponent/navComponent'
import HeaderComponent from './Components/HeaderComponent/headerComponent'
import ContactComponent from './Components/ContactComponent/contactComponent'
import AboutComponent from './Components/AboutComponent/aboutComponent'
import ProjectsCompoent from './Components/ProjectsComponent/projectsComponent'

function App() {
  return (
    <div className="App">
        <NavComponent />
        <HeaderComponent />
        <ContactComponent />
        <AboutComponent />
        <ProjectsCompoent />
    </div>
  );
}

export default App;
