import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/configureStore';
import { ViewProvider, MyComponent } from './navigation/ViewPort';
import AllDoctors from './component/AllDoctors';
import Doctor from './component/Doctors';

function App() {
  return (
    <Provider store={store}>
      <ViewProvider>
        <MyComponent />
        <Doctor />
      </ViewProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AllDoctors />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
