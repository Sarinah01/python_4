import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Ax=()=>{
        // const [joke,setJoke]=useState('')
        const [joke,setJoke]=useState(null)
        // function FJoke(){
        //     axios
        //     .get("https://dog.ceo/api/breeds/image/random")
        //     .then((res)=>{setJoke(res.data)})
        //     .catch((error)=>{console.log(error)})
        // }
        function Random(){
            axios
            .get("https://randomuser.me/api")
            .then((res)=>{setJoke(res.data.results[0])})
            .catch((error)=>{console.log(error)})
        }
        // useEffect(FJoke,[])
        useEffect(()=>{Random()},[])//function passed in anonymous to call function many time
        if(!joke) return <p>Loading...</p>
        const {name,email,picture}=joke
  return (
    <>
    {/* <div>image:<br></br><img src={joke.message}></img></div> */}
    {/* <h1>{joke.Punchline}</h1> */}
    {/* <button onClick={Random}>Generate</button> */}
    {/* <h1>{joke.setup}</h1> */}
    <div>
        <h1>Firstname:{name.first} Lastname: {name.last}</h1>
        <h1>Email:{email}</h1>
        <img src={picture.large} height="100" width="100"></img>
        <button onClick={Random}>Load new user</button>
    </div>
    </>
  )
}
export default Ax