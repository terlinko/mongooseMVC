
import './App.css';
import {useEffect, useState} from "react"


function UserList(){
  const [List, setList] = useState([]);

  useEffect(()=>{
    const url = 'http://localhost:3001/user';
    const fetchData = async () =>{
      try{
        const res = await fetch(url);
        if(res.ok){
          const data = await res.json();
          setList(data);
        }
      }catch(err){
        console.error(err);
      }
    };

    fetchData();
  },[]);

  return(
    <>
    <h2>User List</h2>
    <ul>
      {List.map((user)=>{
        return(
        <li key={user.seq} className="list_item"><p>{user.seq}.</p>
        <p>username : {user.name}</p>
        <p>Phone : {user.phone}</p>
        </li>
      )
      })}
    </ul>
    </>
  )
  
}

function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
