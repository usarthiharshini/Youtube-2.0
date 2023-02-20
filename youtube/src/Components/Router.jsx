import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Video from "./Video";
function Router(){
    return <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route  path="/watch"  element={<Video/>}/>
       
   
      </Routes>
    </div>
}
export default Router;