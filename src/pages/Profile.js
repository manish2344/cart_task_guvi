import { useParams, useHistory } from "react-router-dom";

function Profile({ userList }) {
  const { id } = useParams();
  const history = useHistory();

  const fdUser = userList.filter((obj) => {
    return obj.id === id;
  });

  return (
    <div className="text-center">
      <h2>Profile:({id})</h2>
     
      <h3>{fdUser[0].name}</h3>
      <h4>{fdUser[0].email}</h4>
      <h4>{fdUser[0].city}</h4>
      <nav className="profile-btns">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            history.push("/");
          }}
        >
          Go Home
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            history.push("/editprofile/" + id);
          }}
        >
          Edit Profile
        </button>
      </nav>
    </div>
  );
}

export default Profile;
