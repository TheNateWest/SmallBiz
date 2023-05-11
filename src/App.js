import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
import Router from './Router';
import Navigation from './Containers/Navigation';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
        <Router/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
