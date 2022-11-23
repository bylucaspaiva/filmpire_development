import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, setUser } from '../../features/auth';

const Profile = () => {
  //* This variable must have the same name it has in store.js
  const { user } = useSelector(userSelector);
  console.log(user.username);

  return (
    <div>
      <h1>Profile - {user.username}</h1>
    </div>
  );
};

export default Profile;
