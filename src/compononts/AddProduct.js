import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/ContextProvider";

const AddProduct = () => {
  const {
    currentRoom,
    roomList,
    addCurrentRoomInFormation,
    addRoomList,
  } = useContext(AppContext);

  const [product, setProduct] = useState({
    id: Math.floor(Math.random() * 100000 + 1),
    productName: "",
    active: false,
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setError(false);
  };
  const handleSubmit = (e) => {
    let temp, temptwo, getID;
    e.preventDefault();
    if (product.productName === "דוד שמש") {
      if (currentRoom.roomType === "אמבטיה|שירותים") {
        temp = currentRoom.roomElectronics;
        temptwo = [...temp, product];
        currentRoom.roomElectronics = temptwo;
        for (let i = 0; i < roomList.length; i++) {
          if (roomList[i].id === currentRoom.id) {
            getID = i;
            break;
          }
        }
        roomList[getID] = currentRoom;
        addCurrentRoomInFormation(currentRoom);
        addRoomList(currentRoom);
      }
    } else {
      temp = currentRoom.roomElectronics;
      temptwo = [...temp, product];
      currentRoom.roomElectronics = temptwo;
      for (let i = 0; i < roomList.length; i++) {
        if (roomList[i].id === currentRoom.id) {
          getID = i;
          break;
        }
      }
      roomList[getID] = currentRoom;
      addCurrentRoomInFormation(currentRoom);
      addRoomList(currentRoom);
    }
       setProduct({
         ...product,
         id: Math.floor(Math.random() * 100000 + 1),
       });
    console.table(currentRoom.roomElectronics);
  };
  useEffect(() => {
 
  }, [currentRoom]);
  return (
    <div
      style={{
        width: "35rem",
        height: "10rem",
        border: "1.5px solid green",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <form
        noValidate
        style={{
          flex: 1,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <select
          name="productName"
          value={product.productName}
          onChange={handleChange}
          style={{
            borderRadius: "3px",
            fontSize: "1.7rem",
            width: "22rem",
            border: "1.5px solid green",
            paddingLeft: "30%",
            outline: "none",
          }}
        >
          <option style={{ textAlign: "center" }} value="">
            בחר{" "}
          </option>
          <option style={{ textAlign: "center" }} value="מנורה">
            {" "}
            מנורה
          </option>
          <option style={{ textAlign: "center" }} value="מזגן">
            מזגן
          </option>
          <option style={{ textAlign: "center" }} value="מערכת סטריאו">
            מערכת סטריאו
          </option>
          <option style={{ textAlign: "center" }} value="דוד שמש">
            דוד שמש
          </option>
        </select>
      </form>
      <div style={{ margin: "0 0 1rem 4rem" }}>
        <button
          style={{
            width: "9rem",
            fontWeight: "400",
            borderRadius: "3px",
            fontSize: "2.5rem",
            backgroundColor: "lightskyblue",
            border: "1.5px solid lightgray",
            outline: "none",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          הוסף
        </button>
        {error && <p>נא לבדוק את הערכים שהוזנו...</p>}
      </div>
    </div>
  );
};

export default AddProduct;
