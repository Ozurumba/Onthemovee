import React, {useState, createContext} from 'react';
export const userDetails = createContext();

const UserDteailsProvider = ({children}) => {
  const
    [riderBalance, setRiderBalance] = useState(''),
    [riderLocation, setRiderLocation] = useState(),
    [riderOrders, setRiderOrders] = useState(),
    [userName, setUserName] = useState(''),
    [phone, setPhoneNumber] = useState(''),
    [userEmail, setUseremail] = useState(''),
    [riderId, setRiderID] = useState('');
    // [riderRoutes, userName] = useState('');

  return (
    <userDetails.Provider
      value={{
        riderId,
        riderOrders,
        riderLocation,
        riderBalance,
        userName,
        phone,
        userEmail,
        setRiderLocation,
        setRiderBalance,
        setRiderOrders,
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