'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Auth Context
const AuthContext = createContext(null);

/**
 * AuthProvider Component
 * This component will wrap your application and provide authentication state
 * and functions to all descendant components.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle initial auth state check

  // Mock checking for a user session on component mount (e.g., from localStorage or a cookie)
  useEffect(() => {
    // In a real app, you would verify a token with your backend here
    const checkUserSession = () => {
      console.log('Checking for active session...');
      // For demonstration, we'll assume no user is logged in initially.
      // You could replace this with:
      // const storedUser = localStorage.getItem('user');
      // if (storedUser) {
      //   setUser(JSON.parse(storedUser));
      // }
      setLoading(false);
    };

    checkUserSession();
  }, []);

  // --- Authentication Functions ---

  /**
   * Logs in a user.
   * In a real-world scenario, this would involve an API call.
   * @param {object} userData - The user's data after successful login.
   */
  const login = (userData) => {
    console.log('Logging in user:', userData);
    setUser(userData);
    // You might want to save user data or token to localStorage here
    // localStorage.setItem('user', JSON.stringify(userData));
  };

  /**
   * Logs out the current user.
   */
  const logout = () => {
    console.log('Logging out user');
    setUser(null);
    // Clear any stored session data
    // localStorage.removeItem('user');
  };

  /**
   * Registers a new user.
   * @param {object} registrationData - The data for the new user.
   */
  const signup = (registrationData) => {
    // Here you would make an API call to your backend to register the user
    console.log('Signing up user with:', registrationData);
    // After successful registration, you might automatically log them in
    // For now, we'll just log it.
    const newUser = { id: Date.now(), ...registrationData };
    login(newUser);
  };

  // The value provided to consuming components
  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

/**
 * useAuth Custom Hook
 * A convenient way for components to access the authentication context.
 * @returns {object} The authentication context value.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
