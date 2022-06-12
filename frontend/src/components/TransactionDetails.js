import React from "react";

export function TransactionDetails({txn}) {    
  return (
    <div>
        {txn.map((ele, index) => {
            return (
                <div key={index}>
                    <hr/>
                        <p>To: {ele[0]}</p>
                        <p>Value: {Number(ele[1])/10**18}</p>
                        <p>Executed: {ele[3].toString()}</p>
                        <p>Number Of Confirmations: {Number(ele[4])}</p>
                    <hr/>
                </div>
            )
        })}
    </div>
  );
}
