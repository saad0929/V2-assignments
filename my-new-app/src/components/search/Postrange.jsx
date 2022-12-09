import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./search.css";

import { useLocation } from "react-router";
import Houses from "../../components/houses/Houses";
import Hostels from "../../components/hostels/Hostels";
import Post from "../post/Post";
import Searchbar from "./Searchbar";

function Postrange() {
    const [posts, setPosts] = useState([]);
  const [houses,setHouses] = useState([]);
  const [hostels,setHostels] = useState([]);
  const { search1 } = useLocation();

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
  }, [search1]);
 
    const filterPosts = (posts, query, query5) => {
        if (!query) {
            return posts;
        }
    
        return posts.filter((post) => {
            const postName = post.title.toLowerCase();
            const postAmount = Math.floor(post.amount);
            const query2 = Math.floor(query);
            const query3 = Math.floor(query5);
            // const query3 = Math.floor(query1);
         if(!query3){
             if(postAmount>=query2)
            {
                return postName;
            }
         }
         else {
             if(postAmount>=query2&&postAmount<=query3)
             {
                return postName;
             }
         }
            
         
        });
    };

    const filterPosts1 = (posts, query1) => {
        if (!query1) {
            return posts;
        }
    
        return posts.filter((post) => {
            const postName = post.title.toLowerCase();
            const postAmount = Math.floor(post.amount);
            const query2 = Math.floor(query1);
           
        //  if(!query1){
             if(postAmount>address)
            {
                return postName;
            }
        //  }
        //  else {
        //      if(postAmount>query2&&postAmount<=query3)
        //      {
        //         return postName;
        //      }
        //  }
            
         
        });
    };

    const { search } = window.location;
    const { search2 } = window.location;
    const [address, setAddress] = useState("");
    const query = new URLSearchParams(search).get('s');
    const query1 = new URLSearchParams(search2).get('q');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const [searchQuery1, setSearchQuery1] = useState(query1 || '');
    const filteredPosts = filterPosts(posts, searchQuery,address);
    const filteredPosts1 = filterPosts1(posts, address);
    return (
        <div>
            
            
            <div>
                <label>Input lower limit</label>
                <Searchbar 
            searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />
               <div><input
            type="number"
            placeholder="Input upper limit"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
            onChange={e=>setAddress(e.target.value)}
          /></div>
            <ul>
                {filteredPosts.map(post => (
                    // <li key={post.key}>{post.title}</li>
                    <Posts posts={filteredPosts}/>
                ))}
            </ul> 
            </div>
           
           
        </div>
    );
  }
  
  export default Postrange;