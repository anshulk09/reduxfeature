import React, {useState} from 'react'

const New = () => {
    
    const count = useState(0);
    console.log(count[0]);
    const handleOnClick = () => {
        count[1](count[0]+1);
    }

    return (
        <div>
            hello world
            My React App can go through
            <button onClick={handleOnClick}>Inc Count</button>
            <p>{count[0]}</p>
        </div>
    )
}

export default New;
