import { useState, createContext } from "react";
export const UserContext = createContext();

const URL = import.meta.env.VITE_API_URL;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(userName) {
    try {
      const response = await fetch(`${URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUser({ name: data.name, discount: data.rebateid ? true : false });
      } else {
        console.log(response.status);
        throw new Error("Error");
      }
    } catch (err) {
      console.log(err);
    }
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
