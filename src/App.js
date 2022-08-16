import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/configureStore';
import { ViewProvider, MyComponent } from './navigation/ViewPort';
import Doctor from './component/Doctors';

function App() {
  return (
    <Provider store={store}>
      <ViewProvider>
        <MyComponent />
       
      </ViewProvider>
      <Doctor />
    </Provider>
  );
}

export default App;
