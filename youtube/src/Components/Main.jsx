import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
function Main() {
  const [videos,setVideos] = useState([])
const fetchData=async()=>{
    try {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCCobpDiyWKvN24wtjhwY_DmMRI1P3yP6s&maxResults=120`);
        const res = await data.json();
        setVideos(res.items);
        
    } catch (error) {
        console.log(error);
    }
  

}
console.table(videos);
    useEffect(()=>{
      fetchData();
    },[])
    return (<div className="main">
       {videos.map((video)=>{
        return <div key={video.id}>
     <VideoCard image={video.snippet.thumbnails.standard.url}
     
     title={video.snippet.title}
     channelTitle={video.snippet.channelTitle}
     viewCount={video.statistics.viewCount}
     time={video.snippet.publishedAt}
     id={video.id}
     />
        </div>
       })}
    </div>  );
}

export default Main;