import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
    {/* {
    let colour;
    if(total>0){
      colour=green;
    }
    else{
      colour:red;
    }} */}
      <h5>Your Balance</h5>
    <h3 style={{color:(total>=0)?"green":"red"}}><i class="fa fa-inr"></i> {total}</h3>
    </>
  )
}
