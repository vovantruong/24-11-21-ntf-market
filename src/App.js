import ScanWallet01 from "./components/ScanWallet01";
import ScanWallet from "./components/ScanWallet";
import ConnectWallet from "./components/ConnectWallet";
import Home from "./components/Home";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/scanwallet01" element={<ScanWallet01 />} />
        <Route path="/" element={<Home />} />
        <Route path="/scanwallet" element={<ScanWallet />} />
        <Route path="/connectwallet" element={<ConnectWallet />} />
      </Routes>
    </div>
  );
}

export default App;
