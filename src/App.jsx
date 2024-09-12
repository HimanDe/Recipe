
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import About1 from './About1';
import Pnf1 from './Pnf1';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './Component/Navbar';
import Expense from './Expense';
import Recipe1 from './Recipe1';
import ViewRecipe from './ViewRecipe';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About1/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/expence' element={<Expense/>}/>
      <Route path='/recipe' element={<Recipe1/>}/>
      <Route path='/view' element={<ViewRecipe/>}/>
      <Route path='/*' element={<Pnf1/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
