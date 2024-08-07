import { useState, createContext } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(userName) {
    setUser(userName);
  }
  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
