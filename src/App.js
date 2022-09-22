import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from 'containers/client/Home/Home';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';
import Review from 'containers/client/Review/Review';
import SeatPlan from 'containers/client/SeatPlan/SeatPlan';
import Theater from 'containers/client/Theater/Theater';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movive-detail' element={<MovieDetail/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/seat-plan' element={<SeatPlan/>}/>
        <Route path='/theater' element={<Theater/>}/>
      </Routes>
    </div>
  );
}

export default App;
