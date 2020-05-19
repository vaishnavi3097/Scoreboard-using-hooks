import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Counters = () => {
  const [counters, setCounters] = useState([]);
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    score:0
  });

  const handleChange = (e) => {
    let playerInfoCopy = {...playerInfo};
    playerInfoCopy[e.target.id] = e.target.value;
    playerInfoCopy['score']=0;
    console.log(playerInfoCopy)
    setPlayerInfo(playerInfoCopy)
  }
  useEffect(()=>{
    console.log(counters)
  },[counters])
  useEffect(()=>{
    console.log(playerInfo)
  },[playerInfo])

  const handleAddPlayer = () => {
    let handleAddPlayerCopy = Array.from(counters);
    handleAddPlayerCopy.push(playerInfo);
    setCounters(handleAddPlayerCopy);
  }
  const onDecrement=(index)=>{
    let playerInfoCopy= [...counters];
    console.log(playerInfoCopy[index].score)
    playerInfoCopy[index].score =-- playerInfoCopy[index].score;
    setCounters(playerInfoCopy)
    console.log(playerInfoCopy[index].score)
  }

  const onIncrement=(index)=>{
    let playerInfoCopy=Array.from(counters)
    playerInfoCopy[index].score=++playerInfoCopy[index].score;
    setCounters(playerInfoCopy)
  }

  const onRemove=(index)=>{
    let playerInfoCopy=Array.from(counters)
    playerInfoCopy.splice(index,1);
    setCounters(playerInfoCopy)
  }

  console.log("a", counters)

  const users = counters.reduce(()=>counters.length,0);
  const sum = counters.reduce((acc, item) => acc + item.score, 0);
  return (
    <div >
    <h4>ScoreBoard</h4>
   <h2>Total User:{users}</h2>
   <h2>Total Score:{sum}</h2>
  <div class="col-sm-6">
  <input type="text" id="name" onChange={handleChange} />
  <button onClick={handleAddPlayer}  class="btnn" >Add Player</button>
  {
    counters.map((el, index) => <div key={index}>
    <p>{el.name}</p> 
      <button onClick={() =>onDecrement(index) }class="btn btn-danger" disabled={el.score < 1} >  -  </button>
      <h3>{el.score}</h3>
      <button onClick={() => onIncrement(index)}  class="btn btn-success">  + </button>
      <button onClick={()=>onRemove(index)} class="btn btn-warning" >X</button>
    </div>)}
    </div>
    </div>)
}

export default Counters;
