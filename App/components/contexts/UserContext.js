import React, {useState, createContext} from 'react';
export const userDetails = createContext();

const UserDetailsProvider = ({children}) => {
  const [myToken, setToken] = useState(''),
    [userFirstname, setUserFirstname] = useState(''),
    [userLastname, setUserLastname] = useState(''),
    [userPhone, setUserPhoneNumber] = useState(''),
    [userEmail, setUseremail] = useState(''),
    [pickupAddress, setPickupAddress] = useState(''),
    [deliveryAddress, setDeliveryAddress] = useState([]),
    [customerId, setCustomerID] = useState('');

  return (
    <userDetails.Provider
      value={{
        myToken,
        userFirstname,
        userLastname,
        userPhone,
        userEmail,
        pickupAddress,
        deliveryAddress,
        customerId,
        setToken,
        setUserFirstname,
        setUserLastname,
        setUserPhoneNumber,
        setUseremail,
        setPickupAddress,
        setDeliveryAddress,
        setCustomerID,
      }}>
      {children}
    </userDetails.Provider>
  );
};

export default UserDetailsProvider;
