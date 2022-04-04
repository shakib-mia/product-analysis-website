import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navigation from './Component/Navigation/Navigation';
import ErrorPage from './Component/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;