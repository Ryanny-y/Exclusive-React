import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Use for navigation
import { ProductContext } from "../../context/ProductContext";

export default function Logout() {
  const { setUserData, setAccessToken, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setShowPopUp } = useContext(ProductContext)

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
        setShowPopUp(error.message);
      }
    };

    logoutUser();
  }, [setUserData, setAccessToken, setIsAuthenticated, navigate]);

  return <div>Logging out...</div>;
}