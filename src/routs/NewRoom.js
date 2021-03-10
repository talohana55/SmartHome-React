import React, { useContext, useState } from "react";
import { AppContext } from "../context/ContextProvider";
import { useHistory } from "react-router-dom";

const NewRoom = () => {
  const { addRoomList, roomList } = useContext(AppContext);
  const { name } = useContext(AppContext);
  let history = useHistory();
  const [newRoomForm, setRoomForm] = useState({
    id: Math.floor(Math.random() * 100000 + 1),
    roomType: "",
    roomName: "",
    roomColor: "#000000",
    roomElectronics: [],
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomForm({
      ...newRoomForm,
      [name]: value,
    });
    setError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRoomForm.roomType.length < 2 && newRoomForm.roomName.length < 3) {
      return setError(true);
    } else {
      addRoomList(newRoomForm);
      history.push("/");
    }
  };

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
      <form
        noValidate
        onSubmit={handleSubmit}
        style={{
          flex: 1,
          margin: "1rem auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <select
          name="roomType"
          value={newRoomForm.roomType}
          onChange={handleChange}
          style={{
            paddingLeft: "30%",
            borderRadius: "3px",
            fontSize: "17px",
            textAlign: "center",
            width: "8rem",
            border: "1.5px solid gray",
            outline: "none",
          }}
        >
          <option style={{ textAlign: "center", fontSize: "20px" }} value="">
            בחר סוג חדר
          </option>
          <option
            style={{ textAlign: "center", fontSize: "20px" }}
            value="חדר שינה"
          >
            {" "}
            חדר שינה{" "}
          </option>
          <option
            style={{ textAlign: "center", fontSize: "20px" }}
            value="חדר אמבטיה"
          >
            {" "}
            חדר אמבטיה{" "}
          </option>
          <option
            style={{ textAlign: "center", fontSize: "20px" }}
            value="שירותים"
          >
            שירותים{" "}
          </option>
          <option
            style={{ textAlign: "center", fontSize: "20px" }}
            value="מטבח"
          >
            מטבח{" "}
          </option>
        </select>
        <input
          name="roomName"
          value={newRoomForm.roomName}
          onChange={handleChange}
          type="text"
          placeholder="שם החדר"
          style={{
            textAlign: "center",
            borderRadius: "3px",
            fontSize: "18px",
            width: "7.7rem",
            border: "1.5px solid gray",
            direction: "rtl",
          }}
        />
        <input
          name="roomColor"
          value={newRoomForm.roomColor}
          onChange={handleChange}
          type="color"
          style={{
            textAlign: "center",
            borderRadius: "3px",
            width: "7.7rem",
            border: "1.5px solid gray",
            direction: "rtl",
          }}
        />
      </form>
      <div
        style={{
          margin: "0 0 1rem -3.7rem",
          
        }}
      >
        <button
          style={{
            margin: "0 0 1rem 4rem",
            width: "5rem",
            fontWeight: "400",
            borderRadius: "3px",
            fontSize: "2rem",
            backgroundColor: "lightskyblue",
            border: "1.5px solid lightgray",
            outline: "none",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          צור
        </button>
        {error && <p>נא לבדוק את הערכים שהוזנו...</p>}
      </div>
    </div>
  );
};

export default NewRoom;
