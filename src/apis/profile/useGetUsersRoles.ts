import {useQuery} from '@tanstack/react-query';
import {getUser} from './getUser';
import usersAdapter from '../../adapters/userAdapter';
import {User} from '../../models/userSchema';

const useGetUsersNames = () =>
  useQuery<
    User[],
    Error,
    ReturnType<ReturnType<typeof usersAdapter>['getUsersRoles']>
  >({
    queryKey: ['getUsersRoles'],
    queryFn: getUser,
    select: data => usersAdapter(data).getUsersRoles(),
  });

export default useGetUsersNames;
