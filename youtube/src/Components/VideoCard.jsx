



import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { format, render, cancel, register } from 'timeago.js';

function  VideoCard({image,title,channelTitle,viewCount,time}){

    const [vCount,setvCount] = useState(viewCount)
  

    // format views count
    if(vCount >= 1000 && vCount <1000000){
        let count= Math.trunc(vCount/1000)
        setvCount(`${count}K`)
    }
    if( vCount >=1000000){
        let count= Math.trunc(vCount/1000000)
        setvCount(`${count}M`)
    }

    //format time posted

   

  const pas = time.split('T')  
  const past=format(pas[0])
  //console.log(format(pas[0]));

    return <div className="video-card">
        <div >
            <img className="thumbnail" src={image} alt='title'/>
        </div>
        <div className="thumb">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" size='sm' /> 
        <div className='thumb-description'>
             <p className="thumb-title">
                {title}
             </p>
              
              <p className='channel-title'>{channelTitle}</p>
              <p className='channel-title'>{vCount} views • {past}</p>
        </div>
        </div>
    </div>
}
export default VideoCard;