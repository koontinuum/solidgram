import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/toutes/PrivateRoute';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage'
import { useState } from 'react';
import PublicRoute from './components/toutes/PublicRoute';

function App() {
  const [isAuth, setAuth] = useState(true)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PrivateRoute isAuth={isAuth}><HomePage /></PrivateRoute>} />
        <Route path='/search' element={<HomePage />} />
        <Route path='/interesting' element={<HomePage />} />
        <Route path='/Reels' element={<HomePage />} />
        <Route path='/chat' element={<HomePage />} />
        <Route path='/login' element={<PublicRoute isAuth={isAuth}>{<LoginPage />}</PublicRoute>} />
      </Routes>
    </div>
  );
}

export default App;
