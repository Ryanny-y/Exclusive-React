import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Use for navigation

export default function Logout() {
  const { setUserData, setAccessToken, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await fetch('https://exclusive-api.onrender.com/logout', {
          method: 'GET',
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Logout failed');
        }

        setUserData({});
        setAccessToken('');
        setIsAuthenticated(false);
        navigate('/Exclusive-React/login');
      } catch (error) {
        console.error(error);
      }
    };

    logoutUser();
  }, [setUserData, setAccessToken, setIsAuthenticated, navigate]);

  return <div>Logging out...</div>;
}