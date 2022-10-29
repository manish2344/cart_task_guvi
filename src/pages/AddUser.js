import { useHistory } from "react-router-dom";
import { useState } from "react";

function AddUser({ userList, setUserList }) {
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCity, setUserCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(userList);
    let newUser = {
      name: userName,
      email: userEmail,
      city: userCity,
      id: String(userList.length + 1),
    };
    setUserList([...userList, newUser]);
    history.push("/");
  };

  // useEffect(loadUser, userList);

  return (
    <>
      <h2>Add User</h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="city"
            id="userCity"
            name="userCity"
            value={userCity}
            onChange={(e) => setUserCity(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => onSubmit(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddUser;
