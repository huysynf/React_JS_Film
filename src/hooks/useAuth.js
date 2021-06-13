import {createContext, useContext} from 'react';
import {useSelector} from 'react-redux';
import {getUserCurrent} from '../features/user/userSlide';

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useSelector(getUserCurrent);
  return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
  );
}

export default function useAuth() {
  return useContext(authContext);
}