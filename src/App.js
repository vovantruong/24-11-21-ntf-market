// import EditProfile from "./components/Editprofile";
// import Profile from "./components/Profile";
import Followings from "./components/ProfileFollowings.jsx";
import {Routes,Route} from "react-router-dom"
import ProfileFollowers from "./components/ProfileFllowers";


function App() {
  return (
    <div className="App">
      <Routes>
      
       {/* <Route path="/profile" element={<Profile/>}/>
       <Route path="/edit-profile" element={<EditProfile/>}/> */}
       <Route path="/profile-followings" element={<Followings/>}/>
       <Route path="/profile-followers" element={<ProfileFollowers/>}/>
     </Routes>
   
    </div>
  );
}

export default App;
