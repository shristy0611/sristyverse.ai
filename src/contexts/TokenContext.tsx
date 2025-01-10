import React, { createContext, useContext, useState } from 'react';

interface TokenContextType {
  tokensRemaining: number;
  useTokens: (amount: number) => boolean;
  resetTokens: () => void;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export function TokenProvider({ children }: { children: React.ReactNode }) {
  const [tokensRemaining, setTokensRemaining] = useState(100);

  const useTokens = (amount: number): boolean => {
    if (tokensRemaining >= amount) {
      setTokensRemaining(prev => prev - amount);
      return true;
    }
    return false;
  };

  const resetTokens = () => {
    setTokensRemaining(100);
  };

  return (
    <TokenContext.Provider value={{ tokensRemaining, useTokens, resetTokens }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useTokens() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokenProvider');
  }
  return context;
}