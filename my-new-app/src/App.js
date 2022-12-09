import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Route , Routes } from "react-router";
import { Context } from "./context/Context";
import { useContext } from "react";
import Create from "./pages/create/Create";
import Writehouse from "./pages/writehouse/Writehouse";
import Writehostel from "./pages/writehostel/Writehostel";
import House from "./components/house/House";
import Hostel from "./components/hostel/Hostel";
import View from "./components/view/View";
import Viewpost from "./components/view/Viewpost";
import Viewhouse from "./components/view/Viewhouse";
import Viewhostel from "./components/view/Viewhostel";
import Search from "./components/search/Search";
import Searchbar from "./components/search/Searchbar";
import Allsearch from "./components/search/Allsearch";
import Searchhouse from "./components/search/Searchhouse";
import Searchhostel from "./components/search/Searchhostel";
import Postrange from "./components/search/Postrange";
import Houserange from "./components/search/Houserange";
import Hostelrange from "./components/search/Hostelrange";

function App() {
  // const { user } = useContext(Context);
  const { user } = useContext(Context);
  return (
    // <Router>
    <div>
       <Topbar/>
      <Routes>
       <Route path="/" element={ <Homepage/> } />
       <Route path="/register" element={user ? <Homepage /> : <Register />} />
       <Route path="/posts" element={<Homepage/>}/>
       <Route path="/search" element={<Search/>}/>
       <Route path="/searchhouse" element={<Searchhouse/>}/>
       <Route path="/searchhostel" element={<Searchhostel/>}/>
       <Route path="/postrange" element={<Postrange/>}/>
       <Route path="/houserange" element={<Houserange/>}/>
       <Route path="/hostelrange" element={<Hostelrange/>}/>
       <Route path="/allsearch" element={<Allsearch/>}/>
       <Route path="/searchbar" element={<Searchbar/>}/>
       <Route path="/viewposts" element={<Viewpost/>}/>
       <Route path="/viewhouse" element={<Viewhouse/>}/>
       <Route path="/viewhostel" element={<Viewhostel/>}/>
       <Route path="/login" element={user ? <Homepage /> : <Login />}/>
       <Route path="/house/:id" element={<House />}/>
       <Route path="/hostel/:id" element={<Hostel />}/>
       <Route path="/post/:id" element={<Single />}/>
       <Route path="/write" element={user ? <Write /> : <Login />}/>
       <Route path="/writehouse" element={user ? <Writehouse /> : <Login />}/>
       <Route path="/writehostel" element={user ? <Writehostel /> : <Login />}/>
       <Route path="/create" element={user ? <Create /> : <Login />}/>
       <Route path="/view" element={user ? <View /> : <Login />}/>
       <Route path="/settings" element={user ? <Settings /> : <Login />}/>
       
       </Routes>

       
       

    </div>
      
       
       
       
       
      
       
      
    
      
      
    //   <Routes>
    //     <Route path="/">
    //          <Homepage/>
    //     </Route>
    //   </Routes>
    // </Router>
    // <Router>
    //   <Routes>
    //     <Route exact path="/">
    //       <Homepage />
    //     </Route>
    //     <Route path="/posts">
    //       <Homepage />
    //     </Route>
    //     <Route path="/register">
    //       {currentUser ? <Homepage /> : <Register />}
    //     </Route>
    //     <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
    //     <Route path="/post/:id">
    //       <Single />
    //     </Route>
    //     <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
    //     <Route path="/settings">
    //       {currentUser ? <Settings /> : <Login />}
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
