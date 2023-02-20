import { Router } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Tagsbar from "./Tagsbar";

function Home() {
    return ( <div className="home">
      
       <Navbar/>
        
        <div className="container">
        
           <Sidebar/>
           <div className="emo">
             <Tagsbar/>
             
             <Main/>
           </div>

            
        </div>
    </div> );
}

export default Home;