import Activity from "./components/Activity";
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/activity" element={<Activity/>}/>
     </Routes>
    </div>
  );
}

export default App;




