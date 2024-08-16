import { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const useRedirect = () => {

  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();
  
  useEffect(() => {
    if(!isAuthenticated) {
      navigate('/Exclusive-React/login');
      return;
    }
  }, [ isAuthenticated ])

};

export default useRedirect;