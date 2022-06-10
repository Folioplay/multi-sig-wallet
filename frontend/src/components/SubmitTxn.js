import React from "react";

export function SubmitTxn({ submitTransaction }) {
  return (
    <div>
      <h3>Submit Transaction</h3>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const to = formData.get("to");
          const amount = Number(formData.get("amount"))*10**18;
          console.log(amount)

          if (to && amount) {
            submitTransaction(to, amount.toString());
          }
        }}
      >
        <div className="form-group">
          <label>Value in USDT</label>
          <input
            className="form-control"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <label>Recipient address</label>
          <input className="form-control" type="text" name="to" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
