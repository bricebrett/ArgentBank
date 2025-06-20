import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUserName } from "../redux/user/userThunks";

/**
 * Formulaire de modification du nom d'utilisateur.
 *
 * Affiche les infos utilisateur (firstName et lastName en lecture seule)
 * et permet de modifier le userName. Une fois enregistré, le formulaire se ferme.
 *
 */

const EditUserForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userInfo.userName || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserName({ userName })).then(() => onClose());
  };

  return (
    <>
      <h1>User edit info</h1>
      <form className="edit-form__container" onSubmit={handleSubmit}>
        <div className="edit-form__input-wrapper">
          <label htmlFor="userName">User name: </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="edit-form__input-wrapper">
          <label htmlFor="userName">First name: </label>
          <input
            type="text"
            id="firstName"
            value={userInfo.firstName}
            disabled
          />
        </div>
        <div className="edit-form__input-wrapper">
          <label htmlFor="userName">Last name: </label>
          <input type="text" id="lastName" value={userInfo.lastName} disabled />
        </div>
        <div className="edit-form__buttons">
          <button type="submit" className="edit-form__button">
            Save
          </button>
          <button type="button" className="edit-form__button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EditUserForm;
