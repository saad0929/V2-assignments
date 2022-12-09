import React from "react";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios"
import { useLocation } from "react-router";
import Houses from "../../components/houses/Houses";
import Hostels from "../../components/hostels/Hostels";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [houses,setHouses] = useState([]);
  const [hostels,setHostels] = useState([]);

  const { search } = useLocation();
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      
      setPosts(res.data);

      const res1 = await axios.get("/houses" + search)

      setHouses(res1.data);

      const res2 = await axios.get("/hostels" + search)

      setHostels(res2.data);

    };
    fetchPosts();
  }, [search]);
  return (
  
    <>
      <Header />
      <div className="home">

        <div>
           <Posts posts={posts}/>
        </div>
       
       <div>
          <Houses posts={houses}/>
       </div>
       
<div> 
  <Hostels posts={hostels}/>
</div>
        
        <Sidebar />
      </div>
    </>
    
  );
}
