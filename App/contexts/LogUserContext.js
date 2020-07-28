import React, {useState, createContext} from 'react';
export const userDetails = createContext();

const UserDteailsProvider = ({children}) => {
  const [myToken, setToken] = useState(''),
    [userBalance, setUserBalance] = useState(''),
    [userInterest, setUserInterest] = useState(),
    [userEquivalent, setUserEquivalent] = useState(),
    [userName, setUserName] = useState(''),
    [phone, setPhoneNumber] = useState(''),
    [userEmail, setUseremail] = useState(''),
    [riderId, setRiderID] = useState('');
    // [riderRoutes, userName] = useState('');

  return (
    <userDetails.Provider
      value={{
        myToken,
        userInterest,
        userEquivalent,
        userName,
        phone,
        userEmail,
        riderId,
        setToken,
        setUserBalance,
        setUserInterest,
        setUserEquivalent,
        setUserName,
        setPhoneNumber,
        setUseremail,
        setRiderID,
      }}>
      {children}
    </userDetails.Provider>
  );
};

export default UserDteailsProvider;