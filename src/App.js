import EditProfile from "./components/Editprofile";
import Profile from "./components/Profile";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
      
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/edit-profile" element={<EditProfile/>}/>
     </Routes>
   
    </div>
  );
}

export default App;
