import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const useRedirect = ( isAuthenticated, path ) => {

  const navigate = useNavigate();
  
  useEffect(() => {
    if(!isAuthenticated) {
      navigate(path);
      return;
    }
  }, [ isAuthenticated, path ])

};

export default useRedirect;