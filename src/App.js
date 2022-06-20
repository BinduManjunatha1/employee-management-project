
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Home from './components/Home';
import ListEmployee from './components/ListEmployee';
import NavbarComponent from './components/NavbarComponent';
import SearchEmployee from './components/SearchEmployee';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     <NavbarComponent/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/search/:id' element={<SearchEmployee/>}/>
      <Route path='/add' element={<AddEmployee/>}/>
      <Route path='/list' element={<ListEmployee/>}/>
      </Routes>
    </div>
  );
}

export default App;
