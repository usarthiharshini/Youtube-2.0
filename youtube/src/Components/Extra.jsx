import React,{useState} from 'react';



const Extra = () => {
    let [name, setname] = useState('harshi papa');
    return (
        <div>
           {name}
        </div>
    );
}


export default Extra;
