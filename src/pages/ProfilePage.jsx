import { Fragment } from "react";
import { useParams } from "react-router";

const ProfilePage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Profile</h1>
      <p>{params.profileId}</p>
    </Fragment>
  );
};

export default ProfilePage;
