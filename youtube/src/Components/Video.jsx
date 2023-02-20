import { useParams } from "react-router-dom";
import Youtube from 'react-youtube'
function Video() {
    const params = new URLSearchParams(window.location.search)
    const v = params.get('v') 
   // const {v} = useParams();
    console.log(v);
    const opts={
        playerVars:{
            autoplay:1
        }
    }
    return ( <div className="video-container">
       <div className="video-section"> 
       <Youtube videoId={v} opts={opts}/>
       </div>
       <div className="suggestions">
        
         </div>
       
    </div> );
}

export default Video;