import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const APIcall = () => {

    const [data, setData] = useState([]);

    // API calling 

    /// general api calling using javascript
    // let response = fetch('https://jsonplaceholder.typicode.com/todos');  // this will return the promise 

    //response.then((res) => res.json()).then((data) => console.log(data))
    //response.then((res) => console.log(res));


    // second method using async and await  -> because javascript is asynchrounous language  and call api are async
    const getData = async () => {

        console.log("get data using async and await");

        // await basically wait for the promise to resolve and then return the value otherwise it will throw an error 
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');  // this will return the promise 
        const data = await response.json();
        console.log(data)
    }
    //getData();


    // api calling using axios  -> third method

    const getDataUsingAxios = async () => {
        const axiosResp = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // console.log("axios resp ", axiosResp.data);
        setData(axiosResp.data);
    }

    const removeData = () => {
        setData([]);
    }


    return (
        <div>
            <button style={{ color: "black", fontWeight: "bold", height: "40px", width: "100px", backgroundColor: "orange", borderRadius: "12px" }}
                onClick={getDataUsingAxios}>Get Data</button>

            <button style={{ color: "black", fontWeight: "bold", height: "40px", width: "100px", backgroundColor: "orange", borderRadius: "12px", marginLeft: "10px" , margin: "20px"}}
                onClick={removeData}>Remove Data</button>

            <div>
                {data.map(function (elem, idx) {
                    return <li key={idx}>
                        {idx%2 == 0 && <p style={{color: "green", fontWeight:"bold"}}>{idx} {elem.title}</p> }
                         {idx%2 == 1 && <p style={{color: "orange", fontWeight:"bold"}}>{idx} {elem.title}</p> }
                        

                    </li>
                })}
            </div>
        </div>
    )
}

export default APIcall