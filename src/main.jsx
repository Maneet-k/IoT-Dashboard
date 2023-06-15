import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import About from './components/About';
import Faqs from './components/Faqs';
import Feedback from './components/Feedback';
import DashboardForm from './components/DashboardForm';
import Dashboard from './components/Dashboard';
import Hero from './components/Hero';
import { UserAuthContextProvider } from "./components/UserAuthContext";
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
              <Route path='/' element={<Hero/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/faqs' element={<Faqs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/feedback' element={<Feedback />} />
              </Route>
              <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute> } />
              <Route path='/dashboardForm' element={<ProtectedRoute><DashboardForm /></ProtectedRoute> } />
            </Routes>
          </BrowserRouter>
    </UserAuthContextProvider>
  </React.StrictMode>
)
