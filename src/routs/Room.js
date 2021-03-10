import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/ContextProvider";
import { useHistory } from "react-router-dom";
import AddProduct from "../compononts/AddProduct";

const Room = () => {
  const [displayAddProductComponent, setDisplayAddProductComponent] = useState(false);
  const {
    currentRoom,
    addCurrentRoomInFormation,
    addRoomList,
    roomList,
  } = useContext(AppContext);
  useEffect(() => {}, [currentRoom]);
  return (
    <>
      <div
        style={{
          width: "35rem",
          height: "25rem",
          border: "1.5px solid green",
          margin: "5rem auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: "3rem",
          }}
        >
          Smart House
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flex: "1",
            flexDirection: "row-reverse",
          }}
        >
          <div style={{ direction: "rtl", margin: "1rem", width: "12rem" }}>
            <h4>שם החדר: {currentRoom.roomName}</h4>
            <h4>סוג החדר: {currentRoom.roomType}</h4>
          </div>
          <div style={{ direction: "rtl", margin: "2rem", width: "15rem" }}>
            {currentRoom.roomElectronics.map((electronic, i) => {
              return (
                <butten key ={i}
                  onClick={() => {
                    let getID;
                    if (currentRoom.roomElectronics[i].active === true) {
                       currentRoom.roomElectronics[i].active = false;
                    } else {
                       currentRoom.roomElectronics[i].active = true
                       
                    }
                    for (let i = 0; i < roomList.length; i++) {
                      if (roomList[i].id === currentRoom.id) {
                        getID = i;
                        break;
                      }
                    }
                    roomList[getID] = currentRoom;
                    addCurrentRoomInFormation(currentRoom);
                    addRoomList(currentRoom);
                  }}
                  style={{
                    height: "2rem",
                    width: "7rem",
                    fontWeight: "400",
                    borderRadius: "3px",
                    fontSize: "1rem",
                    backgroundColor: `${
                      electronic.active ? "orange" : "darkgray"
                    }`,
                    border: "1.5px solid lightgray",
                    outline: "none",
                    color: "white",
                    display: "block",
                    margin: "2px",
                    textAlign: "center",
                  }}
                >
                  {electronic.productName}
                </butten>
              );
            })}
          </div>
        </div>
        <div style={{ margin: "0 2rem 1rem 0", direction: "rtl" }}>
          <button
            style={{
              height: "4rem",
              width: "10rem",
              fontWeight: "400",
              borderRadius: "3px",
              fontSize: "1.8rem",
              backgroundColor: "lightskyblue",
              border: "1.5px solid lightgray",
              outline: "none",
              color: "white",
            }}
            onClick={() => {
              setDisplayAddProductComponent(!displayAddProductComponent);
            }}
          >
            הוסף מוצר
          </button>
        </div>
      </div>
      {displayAddProductComponent && <AddProduct />}
    </>
  );
};

export default Room;
