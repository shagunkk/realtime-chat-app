import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();
  
    useEffect(() => {
      if (authUser && !socket) {
        const newSocket = io("http://localhost:5000", {
          query: {
            userId: authUser._id,
          },
        });
  
        newSocket.on("connect", () => {
          console.log("Socket connected");
        });
  
        setSocket(newSocket);
  
        newSocket.on("getOnlineUsers", (users) => {
          setOnlineUsers(users);
        });
  
        newSocket.on("updateOnlineUsers", (updatedUsers) => {
          setOnlineUsers(updatedUsers);
        });
  
        return () => {
          newSocket.close();
        };
      }
  
      // Cleanup if authUser is null or socket exists
      if (!authUser && socket) {
        socket.close();
        setSocket(null);
      }
    }, [authUser]);
  
    return (
      <SocketContext.Provider value={{ socket, onlineUsers }}>
        {children}
      </SocketContext.Provider>
    );
  };

