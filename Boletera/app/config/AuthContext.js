import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Verifica si ya hay un token guardado
    const savedToken = localStorage.getItem('access_token');
    if (savedToken) {
      setToken(savedToken);
      getUserInfo(savedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://backdesarollomovil.onrender.com/login', { email, password });
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token); 
      setToken(access_token);
      getUserInfo(access_token);
    } catch (error) {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  const getUserInfo = async (token) => {
    if (!user || !user.username) {
      console.error('No user information available yet.');
      return;
    }
    try {
      const response = await axios.post('https://backdesarollomovil.onrender.com/datos', { username: user.username }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data.Usuario);
    } catch (error) {
      console.error('Error fetching user info:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    localStorage.removeItem('access_token'); // Limpiar token
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
