import ScanWallet from "./components/ScanWallet";
import ScanWallet01 from "./components/ScanWallet01";
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/scan-wallet" element={<ScanWallet/>}/>
       <Route path="/scan-wallet01" element={<ScanWallet01/>}/>
     </Routes>
    </div>
  );
}

export default App;
