import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TokenProvider } from './contexts/TokenContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </StrictMode>
);