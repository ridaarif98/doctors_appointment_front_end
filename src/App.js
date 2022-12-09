import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Register from './components/register/Register';
import DoctorDetails from './components/doctor/DoctorDetails';
import AppointmentForm from './components/appointment/AppointmentForm';
import './App.css';
import store from './redux/configureStore';
import { ViewProvider, MyComponent } from './navigation/ViewPort';
import Doctors from './components/doctor/Doctors';
import DoctorForm from './components/doctor/DoctorForm';
import Appointments from './components/appointment/Appointments';

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/book_appointment" element={<AppointmentForm />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/add-doctor" element={<DoctorForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
