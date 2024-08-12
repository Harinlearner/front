import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' ;


const UpdateUsers = () => {
    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");
    const navigate = useNavigate();
    const submit = (e) =>
    {
        e.preventDefault();
        axios.post("https://backendserver-m6nf.onrender.com/create",{name,age,email})
        .then(result=>{
            console.log(result);
            navigate("/");
        })
    }
  return (
    <div>
      <div>
        <div>
            <form onSubmit={submit}>
                <div>
                <label>Name : </label>
                <input id="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                
                <div>
                <label>Age : </label>
                <input id="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>

                <div>
                <label>Email : </label>
                <input id="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <input type="submit" value="Click Me"/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateUsers;
