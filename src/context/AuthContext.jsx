import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

  const [ userData, setUserData ] = useState({});
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  // 

  const authValue = {
    userData, setUserData,
    isAuthenticated, setIsAuthenticated
  }

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;