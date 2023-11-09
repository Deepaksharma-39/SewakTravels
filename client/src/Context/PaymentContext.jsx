import React, { useState, createContext } from "react";

export const PaymentContext = createContext();
const { Provider } = PaymentContext;

export default function PaymentContextProvider(props) {
  
  const initialData = {
    firstName: "",
    LastName: "",
    email: "",
    contact: "",
    request:"",
    source: "",
    destination:"",
    tripType:"",
    time:"",
    date:"",
    totalPayment:0,
    paymentDone:0,
    paymentRemaining:0
  };

  const [paymentData, setPaymentData] = useState(initialData);


  return (
    <Provider value={{ paymentData, setPaymentData}}>
      {props.children}
    </Provider>
  );
}
