import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Demo() {

    const [mydata, setMydata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/categories")
            .then(res => {
                console.log(res);
                setMydata(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        console.log("My Data:", mydata[0]?.id);
    }, [mydata]);

    return (
        <div>
    {mydata.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} width={200} />
      </div>
    ))}
  </div>
    )
}

export default Demo