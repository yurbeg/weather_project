import Main from './components/Main';
import { Routes,Route} from "react-router-dom"
import { ROUTE_CONSTANTS } from './components/core/constants';
import HourlyData from "./components/HourlyData"
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <Main /> }> </Route>  
        <Route path = {`${ROUTE_CONSTANTS.CARD}/:day`} element={<HourlyData  />} />
      </Routes> 
    </div>
  );
}

export default App;
