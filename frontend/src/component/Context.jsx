import React, { createContext, useContext, useState } from "react";

// Step 1: Create Context
export const Authcontext = createContext();

// Step 2: Create Provider Component
export default function AuthProvider({ children }) {
  const initialuser = localStorage.getItem("User");
  const [authUser, setauthuser] = useState(
    initialuser ? JSON.parse(initialuser) : undefined
  );

  return (
    <Authcontext.Provider value={[authUser, setauthuser]}>
      {children}
    </Authcontext.Provider>
  );
}

// Step 3: Custom Hook to Access Auth
export const useAuth = () => useContext(Authcontext);
