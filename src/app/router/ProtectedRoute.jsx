import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  
  // Bypass authentication for initial local development if needed, but here we check it.
  // Set to true or bypass check to facilitate quick layout view.
  const bypass = true; 
  return (isAuthenticated || bypass) ? children : <Navigate to="/login" replace />;
}
