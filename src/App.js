import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Register from './components/register/Register';
import DoctorDetails from './components/doctor/DoctorDetails';
import Doctor from './components/doctor/Doctors';
import AppointmentForm from './components/appointment/AppointmentForm';

import './App.css';
import { ViewProvider, MyComponent } from './navigation/ViewPort';
import { getDoctor } from './redux/mainpage/mainpage';
import Appointments from './components/appointment/Appointments';
import DoctorForm from './components/doctor/doctorForm';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
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
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/book_appointment" element={<AppointmentForm />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/add-doctor" element={<DoctorForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
