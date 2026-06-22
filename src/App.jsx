import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './app/providers/QueryProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { AuthProvider } from './app/providers/AuthProvider';
import { NotificationProvider } from './app/providers/NotificationProvider';
import { PremiumProvider } from './app/providers/PremiumProvider';
import AppRouter from './app/router/AppRouter';
import './styles/globals.css';

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <PremiumProvider>
              <BrowserRouter>
                <div className="app-layout">
                  <AppRouter />
                </div>
              </BrowserRouter>
            </PremiumProvider>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
