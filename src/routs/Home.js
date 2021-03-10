import React, { useContext } from "react";
import { AppContext } from "../context/ContextProvider";
import { useHistory } from "react-router-dom";
const Home = () => {
  const { roomList, addCurrentRoomInFormation } = useContext(AppContext);
  let history = useHistory();
  return (
    <div
      style={{
        width: "14rem",
        height: "auto",
        border: "3px solid gray",
        margin: "5rem auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "2rem",
          flex: "1",
        }}
      >
        Smart House
      </h1>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        {roomList.map((room, i) => {
          return <div onClick={() => {
            addCurrentRoomInFormation(room)
            history.push('/room')
          }} style={{backgroundColor:`${room.roomColor}`,width:'5rem',height:'4rem',color:'white',margin:'1rem'}}>
            <h3 style={{textAlign:'center'}}>{ room.roomName}</h3>
          </div>
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            marginTop:'0.2rem',
            width: "8rem",
            height: "8rem",
            borderRadius: "50%",
            fontSize: "8rem",
            backgroundColor: "lightskyblue",
            border: "1px solid lightgrey",
          }}
          onClick={() => history.push("/newroom")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
