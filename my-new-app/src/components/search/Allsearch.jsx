
import { Link } from "react-router-dom";

import "./search.css";

export default function Allsearch() {
 
 

 
  return (
   <div>
     <div>
     
       {/* <h1 >Search by Address</h1> */}
       <div class="headerTitles"><h1>Search by Address</h1></div>
       <li className="topListItem">
            <Link className="link" to="/search">
            <h3>Search form Rent</h3>
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/searchhouse">
            <h3>Search from Sell House</h3>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/searchhostel">
            <h3>Search Hostel Rent</h3>
            </Link>
          </li>
     </div>
     <div>
       {/* <h1 >Search by Address</h1> */}
       <div class="headerTitles"><h1>Search by Price Range</h1></div>
       <li className="topListItem">
            <Link className="link" to="/postrange">
            <h3>Search form Rent</h3>
            </Link>
          </li>
        
          <li className="topListItem">
            <Link className="link" to="/houserange">
            <h3>Search from Sell House</h3>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/hostelrange">
            <h3>Search Hostel Rent</h3>
            </Link>
          </li>
     </div>
         

    </div>
  );
}