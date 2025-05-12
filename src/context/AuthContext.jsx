import { createContext, useState } from "react";

export const AuthContext = createContext({
  userData: {
    first_name: '',
    username: '',
    id: ''
  },
  setUserData(){},

});

const AuthProvider = ({children}) => {

  const [ userData, setUserData ] = useState({
    // maybe pass the empty prop value
  });
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const [ accessToken, setAccessToken ] = useState('');
  const uri = import.meta.env.VITE_DB_URI;

  // 
  const authValue = {
    userData, setUserData,
    isAuthenticated, setIsAuthenticated,
    accessToken, setAccessToken,
    uri
  }

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;