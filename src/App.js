import ScanWallet from "./components/ScanWallet";
import ConnectWallet from './components/ConnectWallet';
import Home from "./components/Home";
import Discover from "./components/Discover";
import HowItWork from "./components/HowItWork"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/discover" element={<Discover/>}/>
       <Route path="/how-it-work" element={<HowItWork/>}/>
       <Route path="/scanwallet" element={<ScanWallet/>}/>
       <Route path="/connect-wallet" element={<ConnectWallet/>}/>
     </Routes>
    </div>
  );
}

export default App;