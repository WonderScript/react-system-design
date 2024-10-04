import React from 'react';
import {useProfile} from './hooks/useProfile';

export default function Profile(): React.ReactNode {
  const {userData, userNamesData, userRolesData} = useProfile();

  return (
    <>
      <div>{userData && userData.map(item => <div>{item.email}</div>)}</div>
      <div>{userNamesData && userNamesData.map(item => <div>{item}</div>)}</div>
      <div>{userRolesData && userRolesData.map(item => <div>{item}</div>)}</div>
      <div>profile</div>
    </>
  );
}
