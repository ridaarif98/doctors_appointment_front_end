import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/splash/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { ViewProvider, MyComponent } from './navigation/ViewPort';
import './App.css';

function App() {
  return (
  <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

      <div className="App">
        <ViewProvider>
          <MyComponent />
        </ViewProvider>
      </div>
   </> 
  );
}

export default App;
