import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Register from './components/register/Register';
import DoctorDetails from './components/doctor/DoctorDetails';
import Doctors from './components/doctor/Doctors';
import './App.css';
import { ViewProvider, MyComponent } from './navigation/ViewPort';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ViewProvider>
            <MyComponent />
          </ViewProvider>
        </div>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetails />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
