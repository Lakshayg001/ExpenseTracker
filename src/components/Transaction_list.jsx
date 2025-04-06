import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import Transactionn from "./Transactionn";

const Transaction_list = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {(transactions || []).map((transaction) =>
          transaction && transaction.id ? (
            <Transactionn key={transaction.id} transaction={transaction} />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default Transaction_list;
