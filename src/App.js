import './App.css';
import { RouteList } from './lib/routes';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationContextProvider } from './lib/context';

function App() {
  return (
    <BrowserRouter>
    <ApplicationContextProvider>

  <RouteList/>
    </ApplicationContextProvider>
    </BrowserRouter>
  );
}

export default App;
