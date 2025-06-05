import { useState } from "react";
import { useSelector } from "react-redux";
import { dataUserAccount } from "../../data/dataUserAccount";
import UserAccount from "../../components/UserAccount";
import EditUserForm from "../../components/EditUserForm";
import "./profile.css";

const Profile = () => {
  const state = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <EditUserForm onClose={() => setIsEditing(false)} />
        ) : (
          <>
            <h1>
              Welcome back <br />
              {state.userInfo.userName}!
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {dataUserAccount.map((account) => (
        <section className="account" key={account.id}>
          <UserAccount
            title={account.title}
            amount={account.amount}
            amountdesc={account.amountDesc}
          />
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Profile;
