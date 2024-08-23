import { createContext, FC, ReactNode, useState } from 'react';

interface IPlayersProvider {
  isRandom: boolean;
  updateIsRandom: (value: boolean) => void;
}

const initialState = {
  isRandom: false,
  updateIsRandom: () => {},
};

export const PlayersContext = createContext<IPlayersProvider>(initialState);

interface PlayersProviderProps {
  children: ReactNode;
}

export const PlayersProvider: FC<PlayersProviderProps> = ({ children }) => {
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
    <PlayersContext.Provider
      value={{
        isRandom,
        updateIsRandom,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
