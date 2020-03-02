import React, { useState } from "react";
import apiClient from '../apis/apiClient';

export default function RandomGenerator() {
    const [randomNumList, setRandomNumList] = useState([]);
    const getData = () => {
        apiClient
      .post("/json-random",{num:10})
      .then(response => {
        if (response.status === 200) {
          setRandomNumList(response.data);
        } else {
          setRandomNumList([]);
          console.log('Failed');
        }
      })
      .catch(error => {
        console.log(`Error: ${error.message}`);
      });
    }
    return (
        
    <div>
        {randomNumList.length > 0 ? randomNumList.map((num,index)=> <span key={index}>{num}, </span> ):<div>no data</div>}
      <button onClick= {getData}> Generate </button>
    </div>
  );
}
