
import { AiFillHome } from 'react-icons/ai'
import { FaVideo } from 'react-icons/fa'
import { MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
function Sidebar() {
    return (<div className="sidebar">
       

        <div onClick={()=>alert('hi')}>
           <AiFillHome className='icon' />
            <p>Home</p>
            </div>

        <div><FaVideo className='icon' />
            <p>Shorts</p></div>
        <div><MdSubscriptions className='icon' />
            <p>Subscriptions</p></div>
        <div><MdVideoLibrary className='icon' />
            <p>Library</p></div>
    </div>);
}

export default Sidebar;