"use client";
import React from 'react';
import {useProfile} from './hooks/useProfile';

export default function Profile(): React.ReactNode {
  const {userData, userNamesData, userRolesData} = useProfile();
  console.log('userData', userData);
  console.log('usersNameData', userNamesData);
  console.log('userRolesData', userRolesData);

  return (
    <>
      <div>{userData && userData.map(item => <div>{item.email}</div>)}</div>
      <div>{userNamesData && userNamesData.map(item => <div>{item}</div>)}</div>
      <div>{userRolesData && userRolesData.map(item => <div>{item}</div>)}</div>
      <div>profile</div>
    </>
  );
}
