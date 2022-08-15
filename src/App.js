import './App.css';
import { ViewProvider, MyComponent } from './navigation/ViewPort';

function App() {
  return (
    <div className="App">
      <ViewProvider>
        <MyComponent />
      </ViewProvider>
    </div>
  );
}

export default App;
