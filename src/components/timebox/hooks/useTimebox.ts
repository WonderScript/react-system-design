import {
  useGetUser,
  useGetUsersNames,
  useGetUsersRoles,
} from '../../../apis/profile';

export const useTimebox = () => {
  const {data: userData} = useGetUser();
  const {data: userNamesData} = useGetUsersNames();
  const {data: userRolesData} = useGetUsersRoles();

  const firstTwoUsersData = userData?.slice(0, 2);
  const firstTwoUsersNameData = userNamesData?.slice(0, 2);
  const firstTwoUserRolesData = userRolesData?.slice(0, 2);

  return {
    userData: firstTwoUsersData,
    userNamesData: firstTwoUsersNameData,
    userRolesData: firstTwoUserRolesData,
  };
};
