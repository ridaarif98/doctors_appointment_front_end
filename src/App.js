import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Register from './components/register/Register';
import DoctorDetails from './components/doctor/DoctorDetails';
import AppointmentForm from './components/appointment/AppointmentForm';
import './App.css';
import { ViewProvider, MyComponent } from './navigation/ViewPort';
import Doctor from './components/doctor/Doctors';
import { getDoctor } from './redux/mainpage/mainpage';
import Appointments from './components/appointment/Appointments';

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
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />

          <Route path="/book_appointment" element={<AppointmentForm />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/add-doctor" element={<DoctorForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
