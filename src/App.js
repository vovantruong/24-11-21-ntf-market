import ScanWallet from "./components/ScanWallet";
import ScanWallet01 from "./components/ScanWallet01";
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/scanwallet" element={<ScanWallet/>}/>
       <Route path="/scanwallet01" element={<ScanWallet01/>}/>
     </Routes>
    </div>
  );
}

export default App;
