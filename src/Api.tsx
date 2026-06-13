import axios from "axios";
import { useEffect, useState } from "react";

function Api() {
    const [data, setData] = useState([])

    useEffect(() => {
        myFirstAPI()
    }, [])  

  const myFirstAPI = () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setData(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }
  return (
    <div>
      <h1>API</h1>
      <p>This is the API page.</p>
      {data.map((item:any) => (
        <div key={item.id}>
          <h2>{item.title} - {item.id}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Api;