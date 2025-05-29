const dataUserAccount = ({ title, amount, amountDesc }) => {
  return (
    <div className="account-item">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{amount}</p>
      <p className="account-amount-desc">{amountDesc}</p>
    </div>
  );
};

export default dataUserAccount;
