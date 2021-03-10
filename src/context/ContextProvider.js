import React, { createContext, useState } from 'react'
export const AppContext = createContext(null);



const ContextProvider = ({ children }) => {
  const [roomList, setRoomlist] = useState([])
  const [currentRoom,setCurrentRoom] = useState(null)
    const addRoomList = (room) => {
      let temp = [...roomList, room];
      setRoomlist(temp);
    };
  const addCurrentRoomInFormation = (room) => {
      setCurrentRoom(room)
    }
    return (
      <AppContext.Provider
        value={{ roomList, addRoomList, addCurrentRoomInFormation,currentRoom }}
      >
        {children}
      </AppContext.Provider>
    );
}

export default ContextProvider
