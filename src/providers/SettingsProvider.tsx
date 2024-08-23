import { createContext, FC, ReactNode, useState } from 'react';

interface ISettingsProvider {
  isRandom: boolean;
  updateIsRandom: (value: boolean) => void;
}

const initialState = {
  isRandom: false,
  updateIsRandom: () => {},
};

export const SettingsContext = createContext<ISettingsProvider>(initialState);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [isRandom, setIsRandom] = useState(false);

  const updateIsRandom = (newValue: boolean) => {
    setIsRandom(newValue);
  };
  /* const [currentAccount, setCurrentAccount] = useState<Account>(initialState.currentAccount);
  const [shop, setShop] = useState<Shop>(initialState.shop);

  const updateCurrentAccount = (account: Account) => {
    setCurrentAccount(account);
  };

  useEffect(() => {
    getAccount().then(({ data }) => updateCurrentAccount(data));
    getShop().then(({ data }) => setShop(data));
  }, []); */

  return (
    <SettingsContext.Provider
      value={{
        isRandom,
        updateIsRandom,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
