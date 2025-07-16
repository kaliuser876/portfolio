import './styles.css';
import Navbar from './Narbar';
import Experience from './pages/Experience';
import Projects from './pages/Project';
import Home from './pages/Home';
import React from 'react';
import { Route, Routes} from "react-router-dom";

function App() {
  
  

  return (
    <div>
      {/*Nav Bar */}
      {/*Contain Home, Projects, Experience, Skills, About Me Contact */}
      <><Navbar />
      <div className='container'>
        <Routes>
          <Route path='portfolio' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
      </>

      {/*Little Introduction, Have an image to pull attraction. Keep it simple. Express 
      full stack developer and software developer */}


      {/*Projects
      Show off some of the things I have done on github, link to the pages. Make them clickable, expand on them
      then allow the user to click the image again to redirect */}

      {/*Experience
      Give simple bulitpoints about internships, tutoring */}


      {/*Skills
      Use image's to show my skills (python snake) */}


      {/*About Me 
      Add a little shpeel about my hobbies and drive*/}


      {/*Contact Me*/}






    </div>
  );
}

export default App;
