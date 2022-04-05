import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navigation from './Component/Navigation/Navigation';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Dashboard from './Component/Dashboard/Dashboard';
import Reviews from './Component/Reviews/Reviews';
import Login from './Component/Login/Login';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;