import ScanWallet from "./components/ScanWallet";
import ConnectWallet from "./components/ConnectWallet";
import Home from "./components/Home";
import Discover from "./components/Discover";
import HowItWork from "./components/HowItWork";
import UploadItem from "./components/UploadItem";
import { Routes, Route } from "react-router-dom";
import CreateItem from "./components/CreateItem";
import ScanWallet01 from './components/ScanWallet01.jsx';
import HomeItem from './components/HomeItem.jsx'
import Activity from "./components/Activity.jsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/how-it-work" element={<HowItWork />} />
        <Route path="/scan-wallet" element={<ScanWallet />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/upload" element={<UploadItem />} />
        <Route path="/create-item" element={<CreateItem />} />
       <Route path="/scan-wallet01" element={<ScanWallet01/>}/>
       <Route path="/home-item" element={<HomeItem/>}/>
       <Route path="/activity" element={<Activity/>}/>
     </Routes>
    </div>
  );
}
export default App;




