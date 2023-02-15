
import { useEffect ,useState} from 'react';
import './App.css';
import Home from './Components/Home';


function App() {
  const [vi,setv] = useState([])

  const getData= async()=>{
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=huxhqphtDrM&maxResults=25&key=AIzaSyCCobpDiyWKvN24wtjhwY_DmMRI1P3yP6s')
    const res = await data.json();
       setv(res.items)
  }
  useEffect(()=>{
    getData();
  },[])
  console.log(vi);
  return (
    <div className="App">
     <Home/>

 </div>
  );
}

export default App;
