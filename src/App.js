import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Content from './Component/Content/Content';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;