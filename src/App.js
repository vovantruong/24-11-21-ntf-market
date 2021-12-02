import ScanWallet from "./components/ScanWallet";
import Home from "./components/Home";
import ConnectWallet from "./components/ConnectWallet";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/scanwallet" element={<ScanWallet/>}/>
       <Route path="/connectwallet" element={<ConnectWallet/>}/>
     </Routes>
    </div>
  );
}

export default App;