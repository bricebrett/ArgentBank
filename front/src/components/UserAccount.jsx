const dataUserAccount = ({ title, amount, amountdesc }) => {
  return (
    <div className="account-item">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-description">{amountdesc}</p>
    </div>
  );
};

export default dataUserAccount;
