import { createContext, FC, ReactNode, useState } from 'react';

interface IWordsProvider {
  isRandom: boolean;
  updateIsRandom: (value: boolean) => void;
}

const initialState = {
  isRandom: false,
  updateIsRandom: () => {},
};

export const WordsContext = createContext<IWordsProvider>(initialState);

interface WordsProviderProps {
  children: ReactNode;
}

export const WordsProvider: FC<WordsProviderProps> = ({ children }) => {
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
    <WordsContext.Provider
      value={{
        isRandom,
        updateIsRandom,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};
