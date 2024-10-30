import logo from './logo.svg';
import './App.css';
import HelloWorld from './helloworld';
import Hi from './Hi';
import Parent from './parent';
import StaticControl from './StaticControl';
import AuthError from './Dashboard/AuthError';
import LogInForm from './Exercise1 - Module2/LoginForm';
import LogAdmin from './Dashboard/Log-Admin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfile from './Profile/UserProfile';
import MyHome from './components/MyHome';
import MyProfile from './components/MyProfile';
import ContactUs from './components/ContactUs';
import Nav from './components/Nav';



function App() {
  return (


        <Router>
          <Nav/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<MyHome/>}/>
              <Route path="/profile" element={<MyProfile/>}/>
              <Route path="/contact" element={<ContactUs/>}/>
              <Route path="*" element={<h2>404 Not Found</h2>}/>
             
            </Routes>
          </div>
        </Router>
  );
}

export default App;
