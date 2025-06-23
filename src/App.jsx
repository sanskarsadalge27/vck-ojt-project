import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionPage';
import ConatactPage from './pages/ConatactPage';
const App = () => {

  return (
  <div>
   < BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/contact' element={<ConatactPage/>}/>
        <Route path='/Admission' element={<AdmissionsPage/>}/>
      </Routes> 
    </BrowserRouter>
  </div>
)
}

export default App;
