import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/splash/Splash';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import { ViewProvider, MyComponent } from './navigation/ViewPort';
import Doctor from './component/Doctors';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
