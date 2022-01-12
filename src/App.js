import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Index from './components/Index';
import Signin from './components/SignIn/Signin';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
