import React from "react";

export function TransactionDetails({txn, confirmTxn, revokeTxn, executeTxn}) {    
  
    
    return (
    <div>
        {txn.map((ele, index) => {
            return (
                <div key={index}>
                    <hr/>
                        <p>Transaction ID: {index}</p>
                        <p>To: {ele[0]}</p>
                        <p>Value: {Number(ele[1])/10**18}</p>
                        <p>Executed: {ele[3].toString()}</p>
                        <p>Number Of Confirmations: {Number(ele[4])}</p>
                        <button onClick={ (e) => {
                            confirmTxn(index)
                            }}>Confirm
                        </button>
                        <button onClick={ (e) => {
                            revokeTxn(index)
                            }}>Revoke Confirmation
                        </button>
                        <button onClick={ (e) => {
                            executeTxn(index)
                            }}>Execute
                        </button>                    
                    <hr/>
                </div>
            )
        })}
    </div>
  );
}


